import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from '../componets/country/country.component';
import { AddComponent } from '../componets/add/add.component';
import { ListComponent } from '../componets/list/list.component';
import { ViewComponent } from '../componets/view/view.component';
import { EditComponent } from '../componets/edit/edit.component';

const countryRoutes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
    children: [
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'list',
        component: ListComponent,
        children: [
          {
            path: 'view/:country-id',
            component: ViewComponent
          },
          {
            path: 'edit/:country-id',
            component: EditComponent
          },
        ]
      },
      {
        path: 'item/create',
        redirectTo: 'add'
      }

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(countryRoutes) ],
  exports: [ RouterModule ]
})
export class CountryRoutingModule { }
