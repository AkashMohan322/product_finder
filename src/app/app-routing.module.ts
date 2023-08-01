import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',redirectTo:'mainPage',pathMatch:'full'
  },
  {
    path:'mainPage',component:MainPageComponent
  },
  {
    path:'mainPage/view/:id',component:ViewPageComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
