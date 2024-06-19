import {FilterResponse, ICheckFilter, IFormatingTarif} from '@/types';
import {Box, Checkbox, HStack, Tag, Text, VStack} from '@chakra-ui/react';
import React, {memo} from 'react';

export const CheckFilterImpl: React.FC<ICheckFilter> = ({
  data,
  selectedFilters,
  handleChange,
}) => {
  if (data) {
    const {brands, models, tarif} = data;
    const formatingTarif: IFormatingTarif = Object.entries(tarif.values);

    return (
      <HStack justifyContent='space-between' alignItems='flex-start'>
        <Box>
          <Tag>{brands.name}</Tag>
          {brands.values.map((brand, index) => (
            <Box key={index}>
              <Checkbox
                size='lg'
                colorScheme='blue'
                isChecked={selectedFilters.brand.includes(brand)}
                onChange={() => handleChange('brand', brand)}>
                <Text>{brand}</Text>
              </Checkbox>
            </Box>
          ))}
        </Box>

        <Box>
          <Tag>Модели</Tag>
          {models.values.flatMap(brand =>
            brand.models.map(model => (
              <Box key={model}>
                <Checkbox
                  size='lg'
                  colorScheme='blue'
                  isChecked={selectedFilters.model.includes(model)}
                  onChange={() => handleChange('model', model)}>
                  <Text>
                    {brand.brand} - {model}
                  </Text>
                </Checkbox>
              </Box>
            )),
          )}
        </Box>
        <Box>
          <Tag>{tarif.name}</Tag>
          {formatingTarif.map(tarif => (
            <Box key={tarif[0]}>
              <Checkbox
                size='lg'
                colorScheme='blue'
                isChecked={selectedFilters.tariff.includes(tarif[1])}
                onChange={() => handleChange('tariff', tarif[1])}>
                <Text>{tarif[1]}</Text>
              </Checkbox>
            </Box>
          ))}
        </Box>
      </HStack>
    );
  }
  return <Box>Данные не загрузились попробуйте еще раз</Box>;
};
export const CheckFilter = memo(CheckFilterImpl);
