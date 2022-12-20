import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { HttpClientModule } from '@angular/common/http';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { CurrencyPageComponent } from '../features/currency-page/currency-page.component';
import { WeatherPageComponent } from '../features/weather-page/weather-page.component';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import {MatChipsModule} from '@angular/material/chips';

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
    MatListModule,MatChipsModule
  ],
  exports: [CurrencyPageComponent, WeatherPageComponent],
})
export class SharedModule {}
