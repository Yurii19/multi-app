import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPageComponent } from '../features/currency-page/currency-page.component';
import { WeatherPageComponent } from '../features/weather-page/weather-page.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HeadComponent } from '../features/head/head.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [CurrencyPageComponent, WeatherPageComponent, HeadComponent],
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
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  exports: [
    MatButtonModule,
    CurrencyPageComponent,
    WeatherPageComponent,
    HeadComponent,
  ],
})
export class SharedModule {}
