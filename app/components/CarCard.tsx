import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  Tag,
  VStack,
  HStack,
} from '@chakra-ui/react';

import React from 'react';

import {ICar} from '@/types';

export const CarCard: React.FC<Omit<ICar, 'id'>> = ({
  brand,
  model,
  number,
  price,
  image,
  tarif,
}) => {
  return (
    <Card w='md' p={2}>
      <CardBody display='flex' flexDir='column' gap={2}>
        <Box pos='relative' width='100%' h='50%'>
          <Image src={image} alt='img auto' borderRadius='lg' />
          <Tag
            pos='absolute'
            left={4}
            bottom={0}
            borderRadius={8}
            size='md'
            bg='#d974748a'
            color='#e92626b3'>
            -14%
          </Tag>
        </Box>
        <Stack mt='6' spacing='3'>
          <HStack>
            <Heading size='md'>{brand}</Heading>
            <Text as='del'> {model}</Text>
          </HStack>
          <HStack color='#cd35b9'>
            <Text fontSize='lg' fontWeight='600'>
              {price}
            </Text>
          </HStack>
          <Text as='abbr' fontSize={16} color='#877f7fd6'>
            {number}
          </Text>
        </Stack>
        <Box
          p={2}
          w='50%'
          borderRadius={25}
          fontSize='lg'
          fontWeight='600'
          color='#271a1a'
          bg='linear-gradient(90deg, rgba(15,180,62,0.7791491596638656) 6%, rgba(224,255,0,1) 100%)'>
          {tarif ? tarif[0] : ''}
        </Box>
      </CardBody>
    </Card>
  );
};
