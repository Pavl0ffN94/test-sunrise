import {FilterResponse} from './filterResponse';

export interface ICheckFilter {
  data: FilterResponse;
  selectedFilters: {
    brand: string[];
    model: string[];
    tariff: string[];
  };
  handleChange: (type: 'brand' | 'model' | 'tariff', value: string) => void;
}

export type IFormatingTarif = Array<[string, string]>;
