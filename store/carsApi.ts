import {buildQueryParams} from '@/helpers';
import {FilterParams, FilterResponse, ICar, IOneCar, IResponseData} from '@/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IPage} from './pageSlice';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://test.taxivoshod.ru/api/test/'}),
  endpoints: builder => ({
    getAllCars: builder.query<IResponseData<ICar>, number>({
      query: page => `?w=catalog-cars&page=${page}`,
    }),
    getFilters: builder.query<FilterResponse, void>({
      query: () => `?w=catalog-filter`,
    }),
    getFilteredCars: builder.query<IResponseData<ICar>, FilterParams>({
      query: filters => {
        const queryParams = buildQueryParams(filters);
        return {
          url: `?w=catalog-cars&${queryParams}`,
        };
      },
    }),
    getOneCar: builder.query<IOneCar, number>({
      query: id => `?w=catalog-car&id=${id}`,
    }),
  }),
});

export const {
  useGetFiltersQuery,
  useGetFilteredCarsQuery,
  useGetAllCarsQuery,
  useGetOneCarQuery,
} = carsApi;
