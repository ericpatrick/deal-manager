import { NotificationsModule } from '../shared/components/notifications/notifications.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';

import { DealListComponent } from './deal.component';
import { DealRoutingModule } from './deal-routing.module';
import { DealConfirmationModalComponent } from './components/deal-confirmation-modal/deal-confirmation-modal.component';
import { DealFormComponent } from './components/deal-form/deal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { DealViewComponent } from './components/deal-view/deal-view.component';
import { DealTableComponent } from './components/deal-table/deal-table.component';
import { DealTableFilterComponent } from './components/deal-table-filter/deal-table-filter.component';
import { InputCurrencyModule } from '../shared/components/input-currency/input-currency.module';



@NgModule({
  declarations: [
    DealListComponent,
    DealConfirmationModalComponent,
    DealFormComponent,
    DealViewComponent,
    DealTableComponent,
    DealTableFilterComponent
  ],
  imports: [
    CommonModule,
    DealRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatBadgeModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    InputCurrencyModule,
    NotificationsModule
  ],
  providers: [provideNgxMask()]
})
export class DealListModule { }
