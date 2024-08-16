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
import {CarInfoView} from './CarInfoView';

export const CarsView = () => {
  const page = useSelector(selectPage);
  const selectedFilters = useSelector(selectCombinedFilters);
  const {brand, model, tarif} = selectedFilters;
  const hasFilters = [brand, model, tarif].some(arr => arr.length > 0);

  const {
    error: allCarsError,
    isLoading: isLoadingAllCars,
    data: allCars,
  } = useGetAllCarsQuery(page.currentPage);

  const {
    data: filteredCars,
    isFetching: isFetchingFilteredCars,
    error: filteredCarsError,
  } = useGetFilteredCarsQuery({...selectedFilters, page});

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (hasFilters && filteredCars) {
      setTotalPages(filteredCars.pages);
    } else if (!hasFilters && allCars) {
      setTotalPages(allCars.pages);
    }
  }, [hasFilters, filteredCars, allCars]);

  if (isLoadingAllCars || isFetchingFilteredCars) return <Spinner />;
  if (allCarsError || filteredCarsError) return <Text>Произошла ошибка загрузки</Text>;

  return (
    <div>
      <CarInfoView data={hasFilters ? filteredCars : allCars} />
      <PageButtons totalPages={totalPages} />
    </div>
  );
};
