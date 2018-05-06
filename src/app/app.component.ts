// ************ CORE MODULES ***************
import { Component } from '@angular/core';
import { Router } from "@angular/router";

// ************ APP SERVICES ***************
import { AppService } from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public appService: AppService,
    public router: Router
  ) { }

  ngOnInit() {
    console.log("Path Name: "+window.location.pathname);

    //checking for user login info in local storage. If present load homepage or else login
    let userData = JSON.parse(localStorage.getItem('user_data'));
    console.log(userData);

    if(userData || window.location.pathname=='/home') {

      // loading user data to app service. so that it can be used anywhere we want in this app
      this.appService.USER_DATA = userData;
      this.router.navigate(['/home']).then(()=> {
        console.log('cookie found! loading homepage directly...skipping login...');
      });
    } else {
      this.router.navigate(['/login']).then(()=>{
        console.log('cookie not found! loading login...');
      });
    }
  }

}
