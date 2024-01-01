import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealListComponent } from './deal.component';
import { DealFormComponent } from './components/deal-form/deal-form.component';
import { DealViewComponent } from './components/deal-view/deal-view.component';
import { DealTableComponent } from './components/deal-table/deal-table.component';

const routes: Routes = [
  {
    path: '',
    component: DealListComponent,
    children: [
      {
        path: "",
        component: DealTableComponent
      },
      {
        path: "new",
        component: DealFormComponent
      },
      {
        path: "edit/:id",
        component: DealFormComponent
      },
      {
        path: "view/:id",
        component: DealViewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealRoutingModule { }
