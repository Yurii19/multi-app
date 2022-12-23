import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrency } from '../shared/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  BASE_URL: string = 'https://api.exchangerate.host'

  constructor(
    private http: HttpClient
  ) { }

  getRate(baseCurrency: ICurrency, aCurrency: ICurrency): Observable<any> {
   // const [cur1, cur2]: ICurrency[] = curencies;
   console.log(baseCurrency, aCurrency)
    return this.http
      .get(`${this.BASE_URL}/latest?base=${baseCurrency.name}`)
      .pipe(map((data: any) => data.rates[aCurrency.name]));
  }

}
