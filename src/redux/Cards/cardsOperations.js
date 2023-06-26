import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import {
  addCardApi,
  removeCardApi,
  updateCardApi,
  updateCardColumnApi,
} from 'services/backendAPI';

const returnStatusNotify = status => {
  switch (status) {
    case 401:
      Notiflix.Notify.warning('Please, log in👻');
      break;
    case 404:
      Notiflix.Notify.warning('Sorry, this page not found👻');
      break;
    case 500:
      Notiflix.Notify.warning('Sorry, server error👻');
      break;
    default:
      Notiflix.Notify.warning('Sorry, bad request👻');
  }
};

export const addCard = createAsyncThunk(
  'card/add',
  async (newCard, { rejectWithValue }) => {
    try {
      const data = await addCardApi(newCard);
      Notiflix.Notify.success('You create new card');
      return data;
    } catch (error) {
      const status = error.response.status;
      returnStatusNotify(status);

      return rejectWithValue(error.message);
    }
  },
);

export const updateCard = createAsyncThunk(
  'card/update',
  async (id, data, { rejectWithValue }) => {
    try {
      const newData = await updateCardApi(id, data);
      Notiflix.Notify.success('Your card has been successfully updated');
      return newData;
    } catch (error) {
      const status = error.response.status;
      returnStatusNotify(status);

      return rejectWithValue(error.message);
    }
  },
);

export const updateCardColumn = createAsyncThunk(
  'card/column/update',
  async (id, { rejectWithValue }) => {
    try {
      const data = await updateCardColumnApi(id);
      Notiflix.Notify.success('Your card has been transferred successfully');
      return data;
    } catch (error) {
      const status = error.response.status;
      returnStatusNotify(status);

      return rejectWithValue(error.message);
    }
  },
);

export const removeCard = createAsyncThunk(
  'card/remove',
  async (id, { rejectWithValue }) => {
    try {
      await removeCardApi(id);
      Notiflix.Notify.success('Your card removed');
      return id;
    } catch (error) {
      const status = error.response.status;
      returnStatusNotify(status);

      return rejectWithValue(error.message);
    }
  },
);

//-------------------------column-----------------------------
// export const getAllColumns = createAsyncThunk(
//   'board/get',
//   async (id, { rejectWithValue }) => {
//     try {
//       const data = await getBoardByIdApi(id);
//       return data.columns;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

// export const removeColumn = createAsyncThunk(
//   'column/remove',
//   async (id, { rejectWithValue }) => {
//     try {
//       await removeColumnApi(id);
//       Notiflix.Notify.success('Your card removed');
//       return id;
//     } catch (error) {
//       const status = error.response.status;

//       switch (status) {
//         case 401:
//           Notiflix.Notify.warning('Please, log in👻');
//           break;
//         case 404:
//           Notiflix.Notify.warning('Sorry, this page not found👻');
//           break;
//         case 500:
//           Notiflix.Notify.warning('Sorry, server error👻');
//           break;
//         default:
//           Notiflix.Notify.warning('Sorry, bad request👻');
//       }
//       return rejectWithValue(error.message);
//     }
//   },
// );

// const columnSlice = createSlice({
//   name: 'column',
//   initialState: {
//     items: [],
//     error: null,
//     isLoading: null,
//   },
//   extraRedusers: builder => {
//     builder
//       .addCase(removeColumn.pending, state => {
//         return {
//           ...state,
//           isLoading: true,
//         };
//       })
//       .addCase(removeColumn.fulfilled, (state, { payload }) => {
//         return {
//           ...state,
//           isLoading: false,
//           card: state.items.filter(el => el.id !== payload),
//         };
//       })
//       .addCase(removeColumn.rejected, (state, { payload }) => {
//         return {
//           ...state,
//           isLoading: false,
//           error: payload,
//         };
//       });
//   },
// });
// export default columnSlice.reducer;