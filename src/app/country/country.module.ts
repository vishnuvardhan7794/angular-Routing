import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './componets/country/country.component';
import { ListComponent } from './componets/list/list.component';
import { AddComponent } from './componets/add/add.component';
import { ViewComponent } from './componets/view/view.component';
import { EditComponent } from './componets/edit/edit.component';
import { CountryRoutingModule } from './country-routing/country-routing.module';



@NgModule({
  declarations: [
    CountryComponent,
    ListComponent,
    AddComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
