import {IPage} from '@/store';

export interface FilterParams {
  brand: string[];
  model: string[];
  tarif: string[];
  page: IPage;
}

export interface FiltersState {
  brand: string[];
  model: string[];
  tarif: string[];
}

export type FilterType = 'brand' | 'model' | 'tarif';
