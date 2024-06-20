import {PayloadAction, createSlice} from '@reduxjs/toolkit';
export interface IPage {
  currentPage: number;
}
const initialState: IPage = {
  currentPage: 1,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    incrementPage(state) {
      state.currentPage += 1;
    },
    decrementPage(state) {
      state.currentPage -= 1;
    },
  },
});

export const {decrementPage, incrementPage, setPage} = pageSlice.actions;

export default pageSlice.reducer;
