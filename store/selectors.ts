import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './store';

export const selectBrandFilter = (state: RootState) => state.filters.brand;
export const selectModelFilter = (state: RootState) => state.filters.model;
export const selectTarifFilter = (state: RootState) => state.filters.tarif;

export const selectAllCars = (state: RootState) =>
  state.api.queries['getCars(undefined)']?.data || [];

export const selectFilteredCars = createSelector(
  [selectAllCars, selectBrandFilter, selectModelFilter, selectTarifFilter],
  (cars, selectedBrands, selectedModels, selectedTarifs) => {
    return cars.filter(
      car =>
        (selectedBrands.length === 0 || selectedBrands.includes(car.brand)) &&
        (selectedModels.length === 0 || selectedModels.includes(car.model)) &&
        (selectedTarifs.length === 0 || selectedTarifs.includes(car.tarif)),
    );
  },
);
