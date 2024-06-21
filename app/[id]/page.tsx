'use client';

import {useGetOneCarQuery} from '@/store';
import {Badge, Box, Button, Image, SimpleGrid, Spinner, Text} from '@chakra-ui/react';
import {useEffect} from 'react';
import {SliderComponent} from '../components/Slider';
import Link from 'next/link';

type Props = {
  params: {
    id: number;
  };
};

export default function CarPage({params: {id}}: Props) {
  const {data, isLoading, error, status} = useGetOneCarQuery(id);

  if (isLoading || status === 'pending') return <Spinner />;
  if (error) return <Text>Произошла ошибка загрузки</Text>;

  if (status === 'fulfilled' && data !== undefined) {
    return (
      <Box maxW='7xl' mx='auto' p={4}>
        <Button>
          <Link href='/'>Назат</Link>
        </Button>
        <Text fontSize='2xl' fontWeight='bold'>
          {data.item.brand} {data.item.model}
        </Text>
        <Text fontSize='lg' color='gray.500'>
          Цена: {data.item.price} руб.
        </Text>
        {data.item.tarif ? (
          <Box mt={4}>
            {data.item.tarif.map(t => (
              <Badge key={t} colorScheme='teal' mr={2}>
                {t}
              </Badge>
            ))}
          </Box>
        ) : null}
        {data.item.images ? (
          <SliderComponent images={data.item.images} />
        ) : (
          <Text> Изображение отсутсвует</Text>
        )}
      </Box>
    );
  }

  return null;
}
