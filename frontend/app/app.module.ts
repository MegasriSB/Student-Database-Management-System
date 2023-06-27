import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResultpageComponent } from './resultpage/resultpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import{ AuthService } from './services/auth.service';
import { ContactComponent } from './contact/contact.component';
import { ProgressComponent } from './progress/progress.component';
import { DepartmentProgressComponent } from './department-progress/department-progress.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { IndidepproComponent } from './indideppro/indideppro.component';
import { StuoverallproComponent } from './stuoverallpro/stuoverallpro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ResultpageComponent,
    SignupComponent,
    ContactComponent,
    ProgressComponent,
    DepartmentProgressComponent,
    ProfileComponent,
    AboutpageComponent,
    IndidepproComponent,
    StuoverallproComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
      path:'login',
      component: LoginComponent
    },
    {
      path:'result',
      component: ResultpageComponent
    },
    {
      path:'signup',
      component: SignupComponent
    },
    {
      path:'contact',
      component: ContactComponent
    },
    {
      path:'progress',
      component: ProgressComponent
    },
    {
      path:'depprog',
      component: DepartmentProgressComponent
    },
    {
      path:'indivdep',
      component: IndidepproComponent
    },
    {
      path:'profile',
      component: ProfileComponent
    },
    {
      path:'about',
      component:AboutpageComponent
    },
    {
      path:'sopro',
      component:StuoverallproComponent
    },
    {
      path:'',
      component: HomeComponent
    }])

  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
