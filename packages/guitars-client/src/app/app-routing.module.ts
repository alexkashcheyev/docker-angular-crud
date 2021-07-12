import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitarDetailsComponent } from './guitar-details/guitar-details.component';
import { GuitarListComponent } from './guitar-list/guitar-list.component';

const routes: Routes = [
  { path: 'guitar/:id', component: GuitarDetailsComponent },
  { path: '', component: GuitarListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
