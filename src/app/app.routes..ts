// ************ CORE MODULES ***************
import { Routes } from "@angular/router";

//************ APP COMPONENTS ***************
import { HomepageComponent } from "./components/homepage/homepage.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";


//Assigning paths to the respective components
export const AppRoutes: Routes = [
  { path: 'home',       component: HomepageComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'register',   component: RegisterComponent },
  { path: 'not-found',  component: NotfoundComponent },
  { path: '',     redirectTo: '/login',      pathMatch: 'full' },
  { path: '**',   redirectTo: '/not-found',  pathMatch: 'full' },
]
