'use client';

import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectBrandFilter,
  selectModelFilter,
  selectTarifFilter,
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

export const FilterComponent: React.FC = () => {
  const dispatch = useDispatch();
  const {data, error, isLoading, isFetching} = useGetFiltersQuery();

  const selectedBrands = useSelector(selectBrandFilter);
  const selectedModels = useSelector(selectModelFilter);
  const selectedTariffs = useSelector(selectTarifFilter);

  const [selectedFilters, setSelectedFilters] = useState({
    brand: selectedBrands,
    model: selectedModels,
    tariff: selectedTariffs,
  });

  const handleChange = (type: FilterType, value: string) => {
    setSelectedFilters(prev => {
      const currentValues = prev[type] || [];
      return {
        ...prev,
        [type]: currentValues.includes(value)
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value],
      };
    });
  };

  const applyFilters = () => {
    dispatch(setBrandFilter(selectedFilters.brand));
    dispatch(setModelFilter(selectedFilters.model));
    dispatch(setTarifFilter(selectedFilters.tariff));
  };

  const {isOpen, onOpen, onClose} = useDisclosure();

  console.log(selectedFilters);

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
              Вернутся
            </Button>
            <Button
              colorScheme='blue'
              onClick={() => {
                applyFilters();
                onClose();
              }}>
              Применить
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
