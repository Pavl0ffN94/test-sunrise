'use client';

import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Spinner, Box, Flex, Grid, GridItem} from '@chakra-ui/react';
import {PageButtons} from './PageButton';
import {selectFilteredCars, useGetAllCarsQuery} from '@/store';
import {CarsCard} from './CarsCard';

export const CarsView: React.FC = () => {
  const [page, setPage] = useState(1);

  const {error, isLoading, data} = useGetAllCarsQuery(page);
  const filteredCars = useSelector(selectFilteredCars);

  if (isLoading) return <Spinner />;
  if (error) return <div>Произошла ошибка загрузки</div>;

  const carsToDisplay = filteredCars.length > 0 ? filteredCars : data?.list || [];
  const totalPages = data?.pages;

  return (
    <Box>
      <Grid templateColumns='repeat(3, 1fr)' gridTemplateRows='repeat(3, 1fr)' gap={3}>
        {carsToDisplay.map(car => (
          <GridItem key={car.id} colSpan={1} rowSpan={1}>
            <CarsCard
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
