import {configureStore} from '@reduxjs/toolkit';
import {carsApi} from './carsApi';
import filterReducer from './filterSlice';
import pageReducer from './pageSlice';

const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    filters: filterReducer,
    page: pageReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(carsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
