import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './shared/error404/error-404.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [{
  path: 'home', component: HomeComponent
},
{
  path: 'projects', component: ProjectsComponent
},
{
  path: 'portfolio', component: PortfolioComponent
},
{
  path: 'contato', component: ContactComponent
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
  path: '**', component: Error404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
