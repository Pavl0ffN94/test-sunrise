import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {carsApi} from './carsApi';
import filterReducer from './filterSlice';
import pageReducer from './pageSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filters', 'page'],
};

const rootReducer = {
  [carsApi.reducerPath]: carsApi.reducer,
  filters: persistReducer(persistConfig, filterReducer),
  page: persistReducer(persistConfig, pageReducer),
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(carsApi.middleware),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, persistor};
