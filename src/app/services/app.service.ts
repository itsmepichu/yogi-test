// ************ CORE MODULES ***************
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

// ************ APP RESPONSE MODELS ***************
import {
  LoginResponseModel,
  RegisterResponseModel
} from "./responseModels";

@Injectable()
export class AppService {
  USER_DATA: any = null;

  constructor(
    public http: HttpClient
  ) {}

  /******************************** Web Services *******************************************/

  // #API - User Login
  userLogin(path: string, params: any): Observable<LoginResponseModel> {
    path = "http://"+window.location.host+path;
    console.log(path);
    return this.http.post<LoginResponseModel>(path, params);
  }

  // #API - Register New User
  userRegister(path: string, params: any): Observable<RegisterResponseModel> {
    path = "http://"+window.location.host+path;
    console.log(path);
    return this.http.post<RegisterResponseModel>(path, params);
  }
}
