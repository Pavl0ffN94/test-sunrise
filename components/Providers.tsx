'use client';
import React from 'react';
import {persistor, store} from '@/store/store';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}
