'use client';

import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Spinner, Box, Flex, Grid, GridItem, Text} from '@chakra-ui/react';
import {PageButtons} from './PageButton';
import {
  selectCombinedFilters,
  selectPage,
  useGetAllCarsQuery,
  useGetFilteredCarsQuery,
} from '@/store';
import {CarsCard} from './CarsCard';

export const CarsView: React.FC = () => {
  const page = useSelector(selectPage);

  const selectedFilters = useSelector(selectCombinedFilters);

  const {
    error,
    isLoading,
    data: allCars,
    isFetching,
  } = useGetAllCarsQuery(page.currentPage);

  const {data: filteredCars} = useGetFilteredCarsQuery({...selectedFilters, page});
  console.log(filteredCars);

  if (isLoading && isFetching) return <Spinner />;
  if (error) return <Text>Произошла ошибка загрузки</Text>;

  const totalPages = filteredCars ? filteredCars.pages : allCars?.pages;

  return (
    <Box>
      <Grid templateColumns='repeat(3, 1fr)' gridTemplateRows='repeat(3, 1fr)' gap={3}>
        {allCars.list.map(car => (
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
        <PageButtons totalPages={totalPages} />
      </Flex>
    </Box>
  );
};
