import {ICar, IResponseData} from '@/types';
import {Box, Flex, Grid, GridItem, Heading} from '@chakra-ui/react';
import React from 'react';
import {CarsCard} from './CarsCard';
interface ICarInfoView {
  data: IResponseData<ICar>;
}

export const CarInfoView = ({data}: ICarInfoView) => {
  if (data.list.length === 0) {
    return <Heading>Уупс, кажется ничего не найдено, попробуйте другие фильтры</Heading>;
  }
  return (
    <Grid templateColumns='repeat(3, 1fr)' gridTemplateRows='repeat(3, 1fr)' gap={3}>
      {data.list.map(car => (
        <GridItem key={car.id} colSpan={1} rowSpan={1}>
          <CarsCard
            brand={car.brand}
            image={car.image}
            model={car.model}
            number={car.number}
            price={car.price}
            tarif={car.tarif}
            id={car.id}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
