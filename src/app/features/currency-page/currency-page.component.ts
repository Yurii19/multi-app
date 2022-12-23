import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import {  map } from 'rxjs/operators';
import { CurrencyService } from 'src/app/services/currency.service';
import { ICurrencyEntry } from 'src/app/shared/interfaces';

@Component({
  selector: 'currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.scss'],
})
export class CurrencyPageComponent implements OnInit {
  currencyData: Observable<any> = new Observable();

  LIST = {
    UAH: { code: 980, name: 'UAH' },
    USD: { code: 840, name: 'USD' },
    EUR: { code: 978, name: 'EUR' },
  };

  displayedColumns: string[] = ['ccy', 'base_ccy', 'rate'];
  dataSource: ICurrencyEntry[] = [
    { ccy: this.LIST.UAH.name, base_ccy: this.LIST.EUR.name, rate: 3 },
  ];

  columns = [
    { columnsDef: 'ccy', header: 'Base currency', cell: 'CELL' },
    { columnsDef: 'base_ccy', header: 'Target currency', cell: 'CELL' },
    { columnsDef: 'rate', header: 'Rate', cell: 'CELL' },
  ];

  constructor(
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    const src = Object.values(this.LIST);
    const remote$ = forkJoin(
      src.map((el) => {
        return this.currencyService.getRate(this.LIST.UAH, el).pipe(
          map((d) => ({
            ccy: this.LIST.UAH.name,
            base_ccy: el.name,
            rate: +(1 / d).toFixed(2),
          }))
        );
      })
    );

    remote$.subscribe((d: ICurrencyEntry[]) => (this.dataSource = d));
  }
}
