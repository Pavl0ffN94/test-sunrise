'use client';

import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectCombinedFilters,
  setBrandFilter,
  setModelFilter,
  setTarifFilter,
  useGetFiltersQuery,
} from '@/store';
import {
  Box,
  Spinner,
  Button,
  useDisclosure,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
} from '@chakra-ui/react';
import {CheckFilter} from './CheckFilter';

import {FilterType} from '@/types';

export const FilterComponent = () => {
  const dispatch = useDispatch();
  const {data, error, isLoading, isFetching} = useGetFiltersQuery();

  const selectedFilters = useSelector(selectCombinedFilters);

  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleChange = useCallback(
    (type: FilterType, value: string) => {
      let updatedValues;
      switch (type) {
        case 'brand':
          updatedValues = selectedFilters.brand.includes(value)
            ? selectedFilters.brand.filter(item => item !== value)
            : [...selectedFilters.brand, value];
          dispatch(setBrandFilter(updatedValues));
          break;
        case 'model':
          updatedValues = selectedFilters.model.includes(value)
            ? selectedFilters.model.filter(item => item !== value)
            : [...selectedFilters.model, value];
          dispatch(setModelFilter(updatedValues));
          break;
        case 'tarif':
          updatedValues = selectedFilters.tarif.includes(value)
            ? selectedFilters.tarif.filter(item => item !== value)
            : [...selectedFilters.tarif, value];
          dispatch(setTarifFilter(updatedValues));
          break;
      }
    },
    [selectedFilters, dispatch],
  );

  if (isLoading || isFetching) return <Spinner />;

  if (error) return <Box>Ошибка загрузки фильтров</Box>;

  return (
    <>
      <Button bg='blue.500' color='#fff' _hover={{}} onClick={onOpen}>
        Отфильтровать машины
      </Button>

      <Drawer
        isFullHeight={false}
        isOpen={isOpen}
        placement='top'
        size='lg'
        onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent gap={2}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Выберите фильтр</DrawerHeader>
          <DrawerBody>
            {data && (
              <CheckFilter
                data={data}
                selectedFilters={selectedFilters}
                handleChange={handleChange}
              />
            )}
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Вернуться
            </Button>
            <Button colorScheme='blue' onClick={onClose}>
              Применить
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
