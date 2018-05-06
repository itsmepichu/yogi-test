// ************ CORE MODULES ***************
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// ************ APP SERVICES ***************
import { environment } from "../../../environments/environment";
import { AppService } from "../../services/app.service";

// ************ API RESPONSE MODELS ***************
import { RegisterResponseModel } from "../../services/responseModels";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public appService: AppService,
    public router: Router
  ) {
    this.registerForm = formBuilder.group({
      name: [ null,
        Validators.compose([
          Validators.required,
        ])
      ],
      age: [ null,
        Validators.compose([
          Validators.required,
        ])
      ],
      email: [ null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(80),
          Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)
        ])
      ],
      username: [ null,
        Validators.compose([
          Validators.required,
        ])
      ],
      password: [ null,
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }

  ngOnInit() {

  }

  postRegisterForm(formData) {
    console.log(formData);
    this.appService.userRegister(environment.registerUser, formData).subscribe((res: RegisterResponseModel)=> {
      console.log(res);
      if(res.status === 1) {
        this.registerForm.reset();
        this.router.navigate(['/login']);
      } else {
        console.log(res.message);
      }
    }, (err)=>{
      console.log(err);
    });
  }

}
