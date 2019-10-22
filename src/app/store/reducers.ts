import { createReducer, on } from '@ngrx/store';
import { addSandwich, updateSandwiches } from './actions';
import { createDeliciousSandwich } from '../sandwich.interface';

export const initialState = {sandwiches: []};

const _sandwichReducer = createReducer(initialState,
  on(addSandwich, state => ({
    ...state,
    sandwiches: [...state.sandwiches, {...createDeliciousSandwich()}]
  })),
  on(updateSandwiches, state => ({
    ...state,
    sandwiches: [...state.sandwiches]
  })),
);

export function sandwichReducer(state, action) {
  return _sandwichReducer(state, action);
}
