// ************ CORE MODULES ***************
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// ************ APP SERVICES ***************
import { environment } from "../../../environments/environment";
import { AppService } from "../../services/app.service";

// ************ API RESPONSE MODELS ***************
import { LoginResponseModel } from "../../services/responseModels";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showLoginErrorMsg: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public appService: AppService,
    public router: Router
  ) {
    this.loginForm = formBuilder.group({
      username: [ null,
        Validators.compose([
          Validators.required,
        ])
      ],
      password: [ null,
        Validators.compose([
          Validators.required,
        ])
      ],
      remember: [ null,
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }

  ngOnInit() {

  }

  postLoginForm(formData) {
    console.log(formData);
    this.appService.userLogin(environment.loginUser, formData).subscribe((res: LoginResponseModel)=> {
      console.log(res);
      if(res.status === 1) {
        this.loginForm.reset();
        if(formData.remember) {
          localStorage.setItem('user_data',JSON.stringify(res.user_data));
        }
        this.appService.USER_DATA = res.user_data;
        this.showLoginErrorMsg = false;
        this.router.navigate(['/home']);
      } else {
        console.log(res.message);
        this.showLoginErrorMsg = true;
      }
    }, (err)=>{
      console.log(err);
    });
  }
}
