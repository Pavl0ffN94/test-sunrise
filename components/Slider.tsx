'use client';

import {Iimage} from '@/types';
import {Box, Flex, Image, Text, Button} from '@chakra-ui/react';
import {useState} from 'react';

export const SliderComponent = ({images}: {images: Iimage[]}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Box maxW='800px' mx='auto' mt={8} position='relative'>
      <Box w='100%' h='50vh' overflow='hidden' position='relative'>
        <Flex
          h='100%'
          transition='transform 0.3s ease'
          transform={`translateX(-${currentSlide * 100}%)`}>
          {images.map((imag, index) => (
            <Box key={index} flex='0 0 100%' minWidth='100%' position='relative'>
              <Image
                src={imag.image}
                alt={`Slide ${index + 1}`}
                w='100%'
                h='100%'
                objectFit='cover'
              />
            </Box>
          ))}
        </Flex>
      </Box>
      <Flex justify='center' mt={2}>
        <Button onClick={prevSlide} mr={2}>
          Предыдущая
        </Button>
        <Button onClick={nextSlide}>Следующая</Button>
      </Flex>
      <Text mt={4} textAlign='center'>
        Слайд {currentSlide + 1} из {images.length}
      </Text>
    </Box>
  );
};
