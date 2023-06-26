import { createSlice } from '@reduxjs/toolkit';

import {
  updateCard,
  addCard,
  removeCard,
  updateCardColumn,
} from './cardsOperations';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(addCard.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          items: state.items.push(payload),
        };
      })
      .addCase(updateCard.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          items: state.items.map(el =>
            el.id !== payload.id ? el : { ...el, ...payload },
          ),
        };
      })
      .addCase(removeCard.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          items: state.items.filter(el => el.id !== payload),
        };
      })
      .addCase(updateCardColumn.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          items: state.items.map(el =>
            el.id !== payload.id ? el : { ...el, columnId: payload.columnId },
          ),
        };
      })
      .addMatcher(
        action =>
          action.type.startsWith('card') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      )
      .addMatcher(
        action =>
          action.type.startsWith('card') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        },
      );
  },
});

export default cardsSlice.reducer;