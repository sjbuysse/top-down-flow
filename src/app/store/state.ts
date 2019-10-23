import { Sandwich } from '../sandwich.interface';

export interface DataState {
  sandwichesArray: Sandwich[];
  sandwichesObject: { [key: string]: Sandwich };
}

export const initialDataState: DataState = {
  sandwichesArray: [],
  sandwichesObject: {}
};
