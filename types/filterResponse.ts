export interface FilterResponse {
  result: number;
  brands: {
    name: string;
    code: string;
    values: string[];
  };
  models: {
    name: string;
    type: string;
    values: [
      {
        brand: string;
        models: string[];
      },
    ];
  };
  tarif: {
    name: string;
    type: string;
    values: Record<string, string>;
  };
}
