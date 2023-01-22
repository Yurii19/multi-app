import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
// import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { HttpClientModule } from '@angular/common/http';
// import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
// import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
