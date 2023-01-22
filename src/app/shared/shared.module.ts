import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPageComponent } from '../features/currency-page/currency-page.component';
import { WeatherPageComponent } from '../features/weather-page/weather-page.component';
import { MatChipsModule } from '@angular/material/chips';
// import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
// import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [CurrencyPageComponent, WeatherPageComponent],
  imports: [
    CommonModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
  exports: [CurrencyPageComponent, WeatherPageComponent],
})
export class SharedModule {}
