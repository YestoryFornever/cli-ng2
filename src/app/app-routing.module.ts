import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path:'heroes',
    component:HeroListComponent
  },
  {
    path:'dashboard',
    component:DashBoardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
