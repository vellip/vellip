import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: 'projects/:slug', component: ProjectDetailComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
