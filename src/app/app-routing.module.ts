import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';

const routes: Routes = [
  { path: 'projects/:name', component: ProjectDetailComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
