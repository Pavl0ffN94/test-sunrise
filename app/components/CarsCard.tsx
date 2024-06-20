import {Box, Heading, Image, Text} from '@chakra-ui/react';

import React from 'react';

import {ICar} from '@/types';

export const CarsCard: React.FC<Omit<ICar, 'id'>> = ({
  brand,
  model,
  number,
  price,
  image,
  tarif,
}) => {
  return (
    <Box w='xs' p={2}>
      {image !== null ? (
        <Box display='flex' alignItems='center' justifyContent='center' boxSize='xs'>
          <Image src={image} alt='img auto' borderRadius='lg' />
        </Box>
      ) : (
        <Box
          overflow='hidden'
          display='flex'
          alignItems='center'
          justifyContent='center'
          boxSize='xs'>
          <Image
            w='275px'
            h='150px'
            objectFit='cover'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAeBFiDf4QBNr8Z7oO6OCXEU_CqCRnIjtEg&s'
            borderRadius='lg'
            alt='Default img'
          />
        </Box>
      )}

      <Box
        display='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='space-between'>
        <Text fontSize='lg' fontWeight='600'>
          Бренд: {brand}
        </Text>

        <Text fontSize='lg' fontWeight='600'>
          Модель: {model}
        </Text>
        <Text fontSize={15}>Цена: {price}</Text>

        <Text as='abbr' fontSize={16} color='#877f7fd6'>
          Госномер: {number}
        </Text>
        {tarif.length !== 0 && (
          <Box fontWeight='600' display='flex' alignItems='center' flexDir='column'>
            <Heading fontSize={20}> Тариф:</Heading>
            {tarif.map(el => (
              <Text key={el}>{el}</Text>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
