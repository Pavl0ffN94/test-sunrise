export interface IResponseData<T> {
  result: number;
  page: number;
  pages: number;
  per_page: number;
  list: T[];
}
