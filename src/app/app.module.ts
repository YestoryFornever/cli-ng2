import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

import { HeroService } from './hero.service';
@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
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
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

