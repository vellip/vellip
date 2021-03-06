import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectTeaserComponent } from './project-teaser/project-teaser.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ShapeComponent } from './shape/shape.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FactListComponent } from './fact-list/fact-list.component';
import { ProjectImagesComponent } from './project-images/project-images.component';
import { ShapesWrapperComponent } from './shape/shapes-wrapper/shapes-wrapper.component';
import { ParallaxDirective } from './shared/parallax.directive';
import { AboutComponent } from './about/about.component';
import { TextPageComponent } from './text-page/text-page.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IntroComponent,
    ProjectTeaserComponent,
    FooterComponent,
    ProjectsComponent,
    ShapeComponent,
    ProjectDetailComponent,
    FactListComponent,
    ProjectImagesComponent,
    ShapesWrapperComponent,
    ParallaxDirective,
    AboutComponent,
    TextPageComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
