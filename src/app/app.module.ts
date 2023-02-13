import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { LogynavComponent } from './components/logynav/logynav.component';
import { HeadertextComponent } from './components/headertext/headertext.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
/* CIRCULAR PROGRESS */
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    NavComponent,
    NavegacionComponent,
    LogynavComponent,
    HeadertextComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
        // Specify ng-circle-progress as an import
        NgCircleProgressModule.forRoot({
          // set defaults here
          radius: 100,
          outerStrokeWidth: 16,
          innerStrokeWidth: 8,
          outerStrokeColor: "#fc094e",
          innerStrokeColor: "#C7E596",
          animationDuration: 300,
          titleColor: "white",
          unitsColor: "white",
          unitsFontSize:"30",
          titleFontSize:"30",
          subtitleFontSize: "30",
          subtitleColor:"white",
          
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
