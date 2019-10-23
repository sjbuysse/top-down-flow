import { createSelector } from '@ngrx/store';
import { Sandwich } from '../sandwich.interface';
import { DataState } from './state';

const selectData = (state: { data: DataState }) => state.data;

export const selectSandwichesArray = createSelector(selectData, data => data.sandwichesArray);
export const selectSandwichesObject = createSelector(selectData, data => data.sandwichesObject);
