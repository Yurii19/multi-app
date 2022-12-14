import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './features/head/head.component';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { SharedModule } from './shared/shared.module';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AppComponent, HeadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatListModule,
    SharedModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
