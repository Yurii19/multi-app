export interface IRoute {
  name: string; routerLink: string
}
export interface ICurrency {
  code: number;
  name: string;
}
export interface ICurrencyEntry {
  ccy: string;
  base_ccy: string;
  rate: number;
}
