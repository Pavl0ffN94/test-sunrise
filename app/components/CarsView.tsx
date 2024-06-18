'use client';

import React, {useEffect, useState} from 'react';

import {
  Spinner,
  Box,
  Button,
  IconButton,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import {PageButtons} from './PageButton';
import {useGetAllCarsQuery} from '@/store';
import {CarCard} from './CarCard';

export const CarsView: React.FC = () => {
  const [page, setPage] = useState(1);
  console.log(page);

  const {error, isLoading, data} = useGetAllCarsQuery(page);

  if (isLoading) return <Spinner />;
  if (error) return <div>Произошла ошибка загрузки</div>;

  const totalPages = data?.pages;

  return (
    <Box>
      <Grid templateColumns='repeat(3, 1fr)' gridTemplateRows='repeat(3, 1fr)' gap={3}>
        {data &&
          data.list.map(car => (
            <GridItem key={car.id} colSpan={1} rowSpan={1}>
              <CarCard
                brand={car.brand}
                image={car.image}
                model={car.model}
                number={car.number}
                price={car.price}
                tarif={car.tarif}
              />
            </GridItem>
          ))}
      </Grid>

      <Flex mt={4} justify='center'>
        <PageButtons page={page} totalPages={totalPages} setPage={setPage} />
      </Flex>
    </Box>
  );
};
