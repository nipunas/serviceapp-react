import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import DEMO from '../constant';

const result: string[] = [];

interface UsersState {
  entities: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export interface Card {
  id: number
  title: string
  description: string
}

// A function that generates a set of prebuilt reducers and selectors for performing CRUD operations 
// on a normalized state structure containing instances of a particular type of data object. 
// These reducer functions may be passed as case reducers to createReducer and createSlice. 
// They may also be used as "mutating" helper functions inside of createReducer and createSlice.
const cardsAdapter = createEntityAdapter<Card>({
  selectId: card => card.id,
  sortComparer: (a, b) => b.title.localeCompare(a.title)
});

const initialState = cardsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const url = DEMO.SERVER_URL + `card`;
  const response = await fetch(url);
  const tasks = await response.json();

  return tasks;
});

export const addNewCard = createAsyncThunk('/cards/addNewCard', async (card: any, { signal }) => {
  const url = DEMO.SERVER_URL + `card`;
  const source = axios.CancelToken.source();

  signal.addEventListener('abort', () => {
    source.cancel()
  });

  const response = await axios.post(url, card, {
    cancelToken: source.token,
  });

  return response.data;
});

export const updateCard = createAsyncThunk('/cards/updateCard', async (card: any, { signal }) => {
  const url = DEMO.SERVER_URL + `card`;
  const source = axios.CancelToken.source();

  signal.addEventListener('abort', () => {
    source.cancel()
  });

  const response = await axios.put(url, card, {
    cancelToken: source.token,
  });

  return response.data;
})

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // updateCard: cardsAdapter.updateOne,

    whenNewCardAdded(state, action) {
      cardsAdapter.addOne(state, action.payload);
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchCards.pending, (state, action) => {
      state.status = 'loading'
    });

    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.status = 'succeeded'
      cardsAdapter.upsertMany(state, action.payload)
    });

    builder.addCase(fetchCards.rejected, (state, action) => {
      state.status = 'failed'
      // state.error = action.error.message
    });

    builder.addCase(addNewCard.fulfilled, (state, action) => {
      state.status = 'succeeded';
      cardsAdapter.addOne(state, action.payload);
    });

    builder.addCase(updateCard.fulfilled, (state, action) => {
      state.status = 'succeeded';
      cardsAdapter.updateOne(state, action.payload);
    });
  }
});

// export const { cardAdded } = cardsSlice.actions

export default cardsSlice.reducer

export const {
  selectAll: selectAllCards,
  selectById: selectCardById,
  selectIds: selectCardIds,
} = cardsAdapter.getSelectors((state: any) => state.cards)