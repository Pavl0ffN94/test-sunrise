import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './store';

export const selectFiltersBrand = (state: RootState) => state.filters.brand;
export const selectFiltersModel = (state: RootState) => state.filters.model;
export const selectFiltersTarif = (state: RootState) => state.filters.tarif;
export const selectPage = (state: RootState) => state.page;

export const selectCombinedFilters = createSelector(
  [selectFiltersBrand, selectFiltersModel, selectFiltersTarif, selectPage],
  (brand, model, tarif, page) => ({
    brand: brand || [],
    model: model || [],
    tarif: tarif || [],
    page: page.currentPage || 1,
  }),
);
