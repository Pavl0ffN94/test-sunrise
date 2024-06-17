import {ICar, IResponseData} from '@/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://test.taxivoshod.ru/api/test'}),
  endpoints: build => ({
    getAllCars: build.query<IResponseData<ICar>, number>({
      query: page => `/?w=catalog-cars&${page}`,
    }),
  }),
});

export const {useGetAllCarsQuery} = carsApi;
