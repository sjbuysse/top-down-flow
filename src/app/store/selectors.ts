import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Sandwich } from '../sandwich.interface';
import { DataState } from './state';

const selectData = createFeatureSelector<{ data: DataState }, DataState>('data');

export const selectSandwichesArray = createSelector(selectData, data => data.sandwichesArray);
export const selectSandwichesObject = createSelector(selectData, data => data.sandwichesObject);
