//************ CORE MODULES ***************
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AlertModule } from "ngx-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//************ APP ROUTES ***************
import { AppRoutes } from "./app.routes.";
import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";

//************ APP SERVICES ***************
import { AppService } from "./services/app.service";

//************ APP COMPONENTS ***************

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
