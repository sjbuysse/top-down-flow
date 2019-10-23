import { createReducer, on } from '@ngrx/store';
import { addSandwichToArray, addSandwichToObject, updateSandwichesArray, updateSandwichesObject } from './actions';
import { createDeliciousSandwich } from '../sandwich.interface';
import { initialDataState } from './state';


const _sandwichReducer = createReducer(initialDataState,
  on(addSandwichToArray, state => ({
    ...state,
    sandwichesArray: [...state.sandwichesArray, {...createDeliciousSandwich()}]
  })),
  on(updateSandwichesArray, state => ({
    ...state,
    sandwichesArray: [...state.sandwichesArray]
  })),
  on(addSandwichToObject, state => {
    const newSandwich = {...createDeliciousSandwich()};
    return {
      ...state,
      sandwichesObject: {...state.sandwichesObject, [newSandwich.id]: newSandwich}
    };
  }),
  on(updateSandwichesObject, state => ({
    ...state,
    sandwichesObject: {...state.sandwichesObject}
  })),
);

export function sandwichReducer(state, action) {
  return _sandwichReducer(state, action);
}
