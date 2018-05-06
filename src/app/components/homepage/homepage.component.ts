// ************ CORE MODULES ***************
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// ************ APP SERVICES ***************
import { AppService } from "../../services/app.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  userForm: FormGroup;
  userData:any = null;
  // shouldRenderUserData: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public appService: AppService
  ) {
    this.userForm = formBuilder.group({
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
    this.userData = this.appService.USER_DATA;
    // this.shouldRenderUserData = true;
    console.log(this.userData);
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
