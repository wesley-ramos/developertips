import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './articles/list/list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
	{path: 'articles', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
