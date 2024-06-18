import {FiltersState} from '@/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: FiltersState = {
  brand: [],
  model: [],
  tarif: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrandFilter(state, action: PayloadAction<string[]>) {
      state.brand = action.payload;
    },
    setModelFilter(state, action: PayloadAction<string[]>) {
      state.model = action.payload;
    },
    setTarifFilter(state, action: PayloadAction<string[]>) {
      state.tarif = action.payload;
    },
  },
});

export const {setBrandFilter, setModelFilter, setTarifFilter} = filtersSlice.actions;

export default filtersSlice.reducer;
