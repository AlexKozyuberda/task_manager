// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  id?: string | null;
  show?: boolean;
}

const initialState: IInitialState = {
  id: null,
  show: false,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog(state, { payload }: PayloadAction<IInitialState>) {
      const { id } = payload;
      state.id = id;
      state.show = true;
    },
    closeDialog(state) {
      state.show = false;
      state.id = null;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
