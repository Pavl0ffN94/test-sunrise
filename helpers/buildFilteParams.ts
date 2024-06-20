import {FilterParams} from '@/types';

export const buildQueryParams = ({brand, model, tarif, page}: FilterParams) => {
  const params = new URLSearchParams();

  if (brand) {
    brand.forEach(item => item && params.append('brand[]=', item));
  }

  if (model) {
    model.forEach(item => item && params.append('model[]=', item));
  }

  if (tarif) {
    tarif.forEach(item => item && params.append('tarif[]=', item));
  }

  if (page) {
    params.append('page=', page.toString());
  }

  return params.toString();
};
