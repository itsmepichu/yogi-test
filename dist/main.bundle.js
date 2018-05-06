webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<body>\n<div id=\"page\">\n  <router-outlet></router-outlet>\n</div>\n</body>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ************ CORE MODULES ***************


// ************ APP SERVICES ***************

var AppComponent = /** @class */ (function () {
    function AppComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("Path Name: " + window.location.pathname);
        //checking for user login info in local storage. If present load homepage or else login
        var userData = JSON.parse(localStorage.getItem('user_data'));
        console.log(userData);
        if (userData || window.location.pathname == '/home') {
            // loading user data to app service. so that it can be used anywhere we want in this app
            this.appService.USER_DATA = userData;
            this.router.navigate(['/home']).then(function () {
                console.log('cookie found! loading homepage directly...skipping login...');
            });
        }
        else {
            this.router.navigate(['/login']).then(function () {
                console.log('cookie not found! loading login...');
            });
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes___ = __webpack_require__("./src/app/app.routes..ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_homepage_homepage_component__ = __webpack_require__("./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_notfound_notfound_component__ = __webpack_require__("./src/app/components/notfound/notfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//************ CORE MODULES ***************


// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";



//************ APP ROUTES ***************



//************ APP SERVICES ***************

//************ APP COMPONENTS ***************







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_notfound_notfound_component__["a" /* NotfoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // NgbModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes___["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
                __WEBPACK_IMPORTED_MODULE_8__services_app_service__["a" /* AppService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes..ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_homepage_homepage_component__ = __webpack_require__("./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_notfound_notfound_component__ = __webpack_require__("./src/app/components/notfound/notfound.component.ts");
//************ APP COMPONENTS ***************




//Assigning paths to the respective components
var AppRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__components_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_3__components_notfound_notfound_component__["a" /* NotfoundComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>\n  <script src=\"js/style.js\"></script>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>{{title}}</title>\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n</head>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'TestApp';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\n  <div class=\"login-form\" *ngIf=\"userData; else invalidContent\">\n    <h3>Welcome {{userData.name}}!</h3>\n\n    <form form [formGroup]=\"userForm\" class=\"form-ele\" id=\"user-login\">\n\n      <div class=\"form-group\">\n        <input formControlName=\"name\" value=\"{{userData.name}}\" class=\"form-control\" type=\"text\" readonly=\"readonly\">\n      </div>\n\n      <div class=\"form-group\">\n        <input formControlName=\"age\" value=\"{{userData.age}}\" class=\"form-control\" type=\"text\" readonly=\"readonly\">\n      </div>\n\n      <div class=\"form-group\">\n        <input formControlName=\"email\" value=\"{{userData.email}}\" class=\"form-control\" type=\"text\" readonly=\"readonly\">\n      </div>\n\n      <div class=\"form-group\">\n        <input formControlName=\"username\" value=\"{{userData.username}}\" class=\"form-control\" type=\"text\" readonly=\"readonly\">\n      </div>\n\n      <div class=\"form-group\">\n        <input formControlName=\"password\" value=\"{{userData.password}}\" class=\"form-control\" type=\"password\" autocomplete=\"new-password\" readonly=\"readonly\">\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\" btn btn-primary\" type=\"button\" (click)=\"logoutUser(userForm.value)\">Sign Out</button>\n      </div>\n    </form>\n  </div>\n\n  <ng-template #invalidContent>\n    <div class=\"login-form\">\n      <h4>Invalid User! Please SignIn <a routerLink=\"/login\">here</a> to continue as a user</h4>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ************ CORE MODULES ***************



// ************ APP SERVICES ***************

var HomepageComponent = /** @class */ (function () {
    // shouldRenderUserData: boolean = false;
    function HomepageComponent(formBuilder, router, appService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.appService = appService;
        this.userData = null;
        this.userForm = formBuilder.group({
            name: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ],
            age: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ],
            email: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(80),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)
                ])
            ],
            username: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ],
            password: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ]
        });
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.userData = this.appService.USER_DATA;
        // this.shouldRenderUserData = true;
        console.log(this.userData);
    };
    HomepageComponent.prototype.logoutUser = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* AppService */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\r\n  <div class=\"login-form\">\r\n\r\n    <h3>User Login</h3>\r\n\r\n    <form form [formGroup]=\"loginForm\" class=\"form-ele\" id=\"user-login\">\r\n\r\n      <div class=\"form-group\">\r\n        <input formControlName=\"username\" placeholder=\"Username\" class=\"form-control\" type=\"text\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input formControlName=\"password\" placeholder=\"Password\" class=\"form-control\" type=\"password\" autocomplete=\"new-password\">\r\n      </div>\r\n\r\n      <div class=\"checkbox\">\r\n        <label>\r\n          <input formControlName=\"remember\"  type=\"checkbox\" value=\"\"> Remember Me\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button class=\" btn btn-primary\" type=\"button\" (click)=\"postLoginForm(loginForm.value)\">Sign In</button>\r\n      </div>\r\n    </form>\r\n    <p *ngIf=\"showLoginErrorMsg\" class=\"err-msg\">Invalid Username/Password</p>\r\n    <p>Not registered? <a routerLink=\"/register\">Create an account</a></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ************ CORE MODULES ***************



// ************ APP SERVICES ***************


var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, appService, router) {
        this.formBuilder = formBuilder;
        this.appService = appService;
        this.router = router;
        this.showLoginErrorMsg = false;
        this.loginForm = formBuilder.group({
            username: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ],
            password: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ],
            remember: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.postLoginForm = function (formData) {
        var _this = this;
        console.log(formData);
        this.appService.userLogin(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].loginUser, formData).subscribe(function (res) {
            console.log(res);
            if (res.status === 1) {
                _this.loginForm.reset();
                if (formData.remember) {
                    localStorage.setItem('user_data', JSON.stringify(res.user_data));
                }
                _this.appService.USER_DATA = res.user_data;
                _this.showLoginErrorMsg = false;
                _this.router.navigate(['/home']);
            }
            else {
                console.log(res.message);
                _this.showLoginErrorMsg = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\n  <h4>Oops! Sorry the page you looking for is not found! Please visit us <a routerLink=\"/login\">here</a></h4>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notfound',
            template: __webpack_require__("./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__("./src/app/components/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\r\n  <div class=\"login-form\">\r\n\r\n    <h3>User Registration </h3>\r\n\r\n    <form form [formGroup]=\"registerForm\" class=\"form-ele\" id=\"user-login\">\r\n\r\n      <div class=\"form-group\">\r\n        <input formControlName=\"name\" placeholder=\"Full Name\" class=\"form-control\" type=\"text\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input formControlName=\"age\" placeholder=\"Age\" class=\"form-control\" type=\"text\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input formControlName=\"email\" placeholder=\"email\" class=\"form-control\" type=\"text\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input formControlName=\"username\" placeholder=\"Username\" class=\"form-control\" type=\"text\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input formControlName=\"password\" placeholder=\"Password\" class=\"form-control\" type=\"password\" autocomplete=\"new-password\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button class=\" btn btn-primary\" type=\"button\" (click)=\"postRegisterForm(registerForm.value)\">Sign Up</button>\r\n      </div>\r\n    </form>\r\n    <p>Already registered? <a routerLink=\"/login\">Sign In</a></p>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ************ CORE MODULES ***************



// ************ APP SERVICES ***************


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, appService, router) {
        this.formBuilder = formBuilder;
        this.appService = appService;
        this.router = router;
        this.registerForm = formBuilder.group({
            name: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ],
            age: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ],
            email: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(80),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)
                ])
            ],
            username: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ],
            password: [null,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                ])
            ]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.postRegisterForm = function (formData) {
        var _this = this;
        console.log(formData);
        this.appService.userRegister(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].registerUser, formData).subscribe(function (res) {
            console.log(res);
            if (res.status === 1) {
                _this.registerForm.reset();
                _this.router.navigate(['/login']);
            }
            else {
                console.log(res.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ************ CORE MODULES ***************


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.USER_DATA = null;
    }
    /******************************** Web Services *******************************************/
    // #API - User Login
    AppService.prototype.userLogin = function (path, params) {
        return this.http.post(path, params);
    };
    // #API - Register New User
    AppService.prototype.userRegister = function (path, params) {
        return this.http.post(path, params);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    loginUser: 'http://localhost:3000/api/login',
    registerUser: 'http://localhost:3000/api/register'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map