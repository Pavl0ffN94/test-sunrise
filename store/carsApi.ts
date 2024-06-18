import {ICar, IResponseData} from '@/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://test.taxivoshod.ru/api/test/'}),
  endpoints: builder => ({
    getFilters: builder.query<FilterResponse, void>({
      query: () => `?w=catalog-filter`,
    }),
    getFilteredCars: builder.query<IResponseData<ICar>, FilterParams>({
      query: ({brand, model, tarif, page}) => ({
        url: 'catalog-cars',
        params: {
          brand: brand.join(','),
          model: model.join(','),
          tarif: tarif.join(','),
          page,
        },
      }),
    }),
    getAllCars: builder.query<IResponseData<ICar>, number>({
      query: page => `?w=catalog-cars&page=${page}`,
    }),
  }),
});

export const {useGetFiltersQuery, useGetFilteredCarsQuery, useGetAllCarsQuery} = carsApi;
