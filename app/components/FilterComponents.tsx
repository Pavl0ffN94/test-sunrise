'use client';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  RootState,
  setBrandFilter,
  setModelFilter,
  setTarifFilter,
  useGetFiltersQuery,
} from '@/store';
import {Box, Spinner, VStack, Text, CheckboxGroup, Checkbox} from '@chakra-ui/react';

export const FilterComponent: React.FC = () => {
  const dispatch = useDispatch();
  const {data, error, isLoading} = useGetFiltersQuery();

  const selectedBrands = useSelector((state: RootState) => state.filters.brand);
  const selectedModels = useSelector((state: RootState) => state.filters.model);
  const selectedTarifs = useSelector((state: RootState) => state.filters.tarif);

  const handleBrandChange = (selected: string[]) => {
    dispatch(setBrandFilter(selected));
  };

  const handleModelChange = (selected: string[]) => {
    dispatch(setModelFilter(selected));
  };

  const handleTarifChange = (selected: string[]) => {
    dispatch(setTarifFilter(selected));
  };

  if (isLoading) return <Spinner />;
  if (error) return <Box>Error loading filters</Box>;

  return (
    <VStack spacing={4} align='stretch'>
      <Box>
        <Text mb={2}>Марка</Text>
        <CheckboxGroup value={selectedBrands} onChange={handleBrandChange}>
          {data?.brands.values.map(brand => (
            <Checkbox key={brand} value={brand}>
              {brand}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </Box>

      <Box>
        <Text mb={2}>Модель</Text>
        <CheckboxGroup value={selectedModels} onChange={handleModelChange}>
          {data?.models.values.flatMap(model =>
            model.models.map(m => (
              <Checkbox key={m} value={m}>
                {m}
              </Checkbox>
            )),
          )}
        </CheckboxGroup>
      </Box>

      <Box>
        <Text mb={2}>Тариф</Text>
        <CheckboxGroup value={selectedTarifs} onChange={handleTarifChange}>
          {data &&
            Object.entries(data.tarif.values).map(([id, tarif]) => (
              <Checkbox key={id} value={id}>
                {tarif}
              </Checkbox>
            ))}
        </CheckboxGroup>
      </Box>
    </VStack>
  );
};
