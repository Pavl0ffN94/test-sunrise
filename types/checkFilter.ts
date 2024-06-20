import {FilterResponse} from './filterResponse';

export interface ICheckFilter {
  data: FilterResponse;
  selectedFilters: {
    brand: string[];
    model: string[];
    tarif: string[];
  };
  handleChange: (type: 'brand' | 'model' | 'tarif', value: string) => void;
}

export type IFormatingTarif = Array<[string, string]>;
