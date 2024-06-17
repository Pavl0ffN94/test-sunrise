'use client';

import React, {useEffect, useState} from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Spinner,
  Box,
  Button,
  IconButton,
  Flex,
  Text,
  HStack,
  Heading,
} from '@chakra-ui/react';

import {PageButtons} from './PageButton';
import {useGetAllCarsQuery} from '@/store';
import {CarCard} from './CarCard';

export const CarsView: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const {error, isLoading, data} = useGetAllCarsQuery({page});

  if (isLoading) return <Spinner />;
  if (error) return <div>Произошла ошибка загрузки</div>;
  console.log(page);

  const totalPages = Math.ceil(data.total / limit);

  return (
    <Box>
      <Heading as='h2' size='lg' mb={4}>
        Список пользователей
      </Heading>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Имя</Th>
            <Th>Роль</Th>
            <Th>Время создания</Th>
            <Th>Действия</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.list.map(car => (
              <CarCard
                key={car.id}
                brand={car.brand}
                image={car.image}
                model={car.model}
                number={car.number}
                price={car.price}
                tarif={car.tarif}
              />
            ))}
        </Tbody>
      </Table>
      <Flex mt={4} justify='center'>
        <PageButtons page={page} totalPages={totalPages} setPage={setPage} />
      </Flex>
    </Box>
  );
};
