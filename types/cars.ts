export interface ICar {
  id: number;
  brand: string;
  model: string;
  number: string;
  price: number;
  image: string | null;
  tarif: string[] | [];
}

export interface Iimage {
  id: string;
  image: string;
}

export interface IOneCar {
  result: number;
  item: {
    brand: string;
    model: string;
    id: number;
    price: number;
    images: Iimage[];
    tarif: string[];
  };
}
