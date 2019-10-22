import { createSelector } from '@ngrx/store';
import { Sandwich } from '../sandwich.interface';

const selectData = (state: { data: { sandwiches: Sandwich[] } }) => state.data;

export const selectSandwiches = createSelector(selectData, data => data.sandwiches);
