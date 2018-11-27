import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HeroDeteilsComponent} from './hero-deteils/hero-deteils.component';


const routes: Routes =
  [  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    {path: 'heroes', component: AppComponent},
    {path: 'detail/:id', component: HeroDeteilsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
