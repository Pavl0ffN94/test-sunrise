export interface FilterParams {
  brand: string[];
  model: string[];
  tarif: string[];
  page: number;
}

export interface FiltersState {
  brand: string[];
  model: string[];
  tarif: string[];
}

export type FilterType = 'brand' | 'model' | 'tariff';
