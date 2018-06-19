import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormTestComponent } from './form-test/form-test.component';
import { HttpTestComponent } from './http-test/http-test.component';

const routes: Routes = [
	{path:'home',		component:HomeComponent},
	{path:'form',		component:FormTestComponent},
	{path:'http',		component:HttpTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
