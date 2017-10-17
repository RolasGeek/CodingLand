webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<app-menu-bar></app-menu-bar>\n\n<ng-progress [showSpinner]=\"false\"></ng-progress>\n\n<div style=\"text-align: center\">\n\n\t<router-outlet></router-outlet>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_category_category_module__ = __webpack_require__("../../../../../src/app/components/category/category.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_menu_bar_menu_bar_component__ = __webpack_require__("../../../../../src/app/components/menu-bar/menu-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/components/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_topic_topic_modal_topic_modal_component__ = __webpack_require__("../../../../../src/app/components/topic/topic-modal/topic-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_topic_post_modal_post_modal_component__ = __webpack_require__("../../../../../src/app/components/topic/post-modal/post-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_token_interceptor__ = __webpack_require__("../../../../../src/app/utils/token.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular stuff









//Custom Module

//Components 







//Service


// Http interceptor

var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_main_page_main_page_component__["a" /* MainPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_menu_bar_menu_bar_component__["a" /* MenuBarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_topic_topic_modal_topic_modal_component__["a" /* TopicModalComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_topic_post_modal_post_modal_component__["a" /* PostModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["b" /* NgProgressModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_category_category_module__["a" /* CategoryModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_17__utils_token_interceptor__["a" /* TokenInterceptor */],
                multi: true
            },
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["a" /* NgProgressInterceptor */],
                multi: true },
            __WEBPACK_IMPORTED_MODULE_16__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__services_category_category_service__["a" /* CategoryService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/topic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topic; });
var Topic = (function () {
    function Topic() {
        this.id = 0;
        this.user = null;
        this.name = '';
        this.description = '';
        this.isAnswered = false;
    }
    return Topic;
}());

//# sourceMappingURL=topic.js.map

/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.userName = '';
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/components/category/category-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_topic_component__ = __webpack_require__("../../../../../src/app/components/topic/topic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CATEGORY_PATH = 'category/:category_id';
var TOPIC_PATH = '/topic/:topic_id';
var EDIT = '/edit';
var categoryRoutes = [
    {
        path: CATEGORY_PATH,
        component: __WEBPACK_IMPORTED_MODULE_2__category_category_component__["a" /* CategoryComponent */]
    },
    {
        path: CATEGORY_PATH + TOPIC_PATH,
        component: __WEBPACK_IMPORTED_MODULE_3__topic_topic_component__["a" /* TopicComponent */]
    }
];
var CategoryRoutingModule = (function () {
    function CategoryRoutingModule() {
    }
    return CategoryRoutingModule;
}());
CategoryRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(categoryRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], CategoryRoutingModule);

//# sourceMappingURL=category-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n\t<button class=\"btn btn-lg btn-outline-primary float-right\"\r\n\t\t(click)=\"open(undefined)\">Create</button>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"topic\" *ngFor=\"let topic of topics\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-3 user-data\">\r\n\t\t\t\t\t<p>Inserted By: {{topic.user.userName}}\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t<p>Insert Date : {{topic.insertDate | date:\r\n\t\t\t\t\t\t'dd/MM/yyyy-hh:mm'}}\r\n\t\t\t\t\t<p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-9 post-data\">\r\n\t\t\t\t\t<a [routerLink]=\"['topic/', topic.id]\" routerLinkActive=\"active\">\r\n\t\t\t\t\t\t<p>Name: {{topic.name}}</p>\r\n\t\t\t\t\t\t<p>Description: {{topic.description}}</p>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn\" (click)=\"delete(topic.id)\">Delete</button>\r\n\t\t\t<button class=\"btn btn-md btn-outline-primary float-left\"\r\n\t\t\t\t(click)=\"open(topic)\">Update</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_topic_topic_service__ = __webpack_require__("../../../../../src/app/services/topic/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_topic_modal_topic_modal_component__ = __webpack_require__("../../../../../src/app/components/topic/topic-modal/topic-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryComponent = (function () {
    function CategoryComponent(topicService, route, modalService) {
        this.topicService = topicService;
        this.route = route;
        this.modalService = modalService;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.categoryId = +params['category_id'];
        });
        this.topicService.getAll(this.categoryId).subscribe(function (data) { _this.topics = data; console.log(_this.topics); });
    };
    CategoryComponent.prototype.delete = function (id) {
        var _this = this;
        this.topicService.delete(id).subscribe(function (suc) { _this.deleted = true; }, function (err) {
            _this.deleted = false;
        });
        this.ngOnInit();
    };
    CategoryComponent.prototype.open = function (topic) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__topic_topic_modal_topic_modal_component__["a" /* TopicModalComponent */], { size: 'lg' });
        modalRef.componentInstance.topic = topic;
        modalRef.componentInstance.categoryId = this.categoryId;
        modalRef.result.then(function (data) {
            _this.ngOnInit();
        }, function (reason) {
            // on dismiss
        });
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/components/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/category/category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_topic_topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_topic_topic_service__["a" /* TopicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object])
], CategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/category/category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_topic_topic_service__ = __webpack_require__("../../../../../src/app/services/topic/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_post_post_service__ = __webpack_require__("../../../../../src/app/services/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topic_topic_component__ = __webpack_require__("../../../../../src/app/components/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__topic_post_modal_post_modal_component__ = __webpack_require__("../../../../../src/app/components/topic/post-modal/post-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topic_topic_modal_topic_modal_component__ = __webpack_require__("../../../../../src/app/components/topic/topic-modal/topic-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__category_routing_module__ = __webpack_require__("../../../../../src/app/components/category/category-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Service


//Component


//Modal



var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__category_routing_module__["a" /* CategoryRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_6__topic_topic_component__["a" /* TopicComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_topic_topic_service__["a" /* TopicService */], __WEBPACK_IMPORTED_MODULE_4__services_post_post_service__["a" /* PostService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_7__topic_post_modal_post_modal_component__["a" /* PostModalComponent */], __WEBPACK_IMPORTED_MODULE_8__topic_topic_modal_topic_modal_component__["a" /* TopicModalComponent */]]
    })
], CategoryModule);

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div ><p *ngIf=\"auth.error\" >Nepaejo\r\n</p>\r\n</div>\r\n\t<h2>Login</h2>\r\n\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n\t\t<!-- username -->\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"i_username\">Username</label> \r\n\t\t\t<input type=\"text\" id=\"i_username\" placeholder=\"Username\" formControlName=\"username\" class=\"form-control\">\r\n\t\t\t<div *ngIf=\"username.invalid && (username.dirty || username.touched)\"\r\n\t\t\t\tclass=\"alert alert-danger\">\r\n\t\t\t\t<div *ngIf=\"username.errors.required\">Username is required.</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- password -->\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"i_username\">Password</label> \r\n\t\t\t<input type=\"text\" id=\"i_password\" placeholder=\"Password\" formControlName=\"password\" class=\"form-control\">\r\n\t\t\t<div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n\t\t\t\tclass=\"alert alert-danger\">\r\n\t\t\t\t<div *ngIf=\"password.errors.required\">Password is required.</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(auth, fb) {
        this.auth = auth;
        this.fb = fb;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () { return this.loginForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (data) {
        if (this.loginForm.valid) {
            this.auth.login(data.username, data.password);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-sq-lg {\r\n  width: 150px !important;\r\n  height: 150px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div *ngFor=\"let category of categories\" class=\"col-lg-4\">\n\t\t\t <a [routerLink]=\"['category/', category.id]\" routerLinkActive=\"active\" class=\"btn btn-sq-lg btn-primary\">\n               <p  class=\"text-center\">{{category.name}}</p><br>\n            </a>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPageComponent = (function () {
    function MainPageComponent(service) {
        this.service = service;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (categories) { _this.categories = categories; });
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-page',
        template: __webpack_require__("../../../../../src/app/components/main-page/main-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main-page/main-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], MainPageComponent);

var _a;
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu-bar/menu-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu-bar/menu-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg sticky-top navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"\">CodingLand</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"auth.isLoggedIn()\" routerLinkActive=\"active\" >\n        <a class=\"nav-link\" routerLink=\"/profile\">Welcome {{auth.user.userName}}</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!auth.isLoggedIn()\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/register\"> Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!auth.isLoggedIn()\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/login\" >Login</a>\n      </li>\n      <li class=\"nav-item\"  *ngIf=\"auth.isLoggedIn()\"  routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"\" (click)=\"auth.logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/menu-bar/menu-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuBarComponent = (function () {
    function MenuBarComponent(auth) {
        this.auth = auth;
    }
    MenuBarComponent.prototype.ngOnInit = function () {
        this.auth.refnesh(); //Load user data after f5
    };
    return MenuBarComponent;
}());
MenuBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-bar',
        template: __webpack_require__("../../../../../src/app/components/menu-bar/menu-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu-bar/menu-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], MenuBarComponent);

var _a;
//# sourceMappingURL=menu-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<div ><p *ngIf=\"auth.error\" >Nepaejo\n</p>\n</div>\n<div ><p *ngIf=\"auth.success\" >Paejo\n</p>\n</div>\n\t<h2>Login</h2>\n\t<form [formGroup]=\"registerForm\" (ngSubmit)=\"register(registerForm.value)\">\n\t\t<!-- username -->\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"i_username\">Username</label> \n\t\t\t<input type=\"text\" id=\"i_username\" placeholder=\"Username\" formControlName=\"userName\" class=\"form-control\">\n\t\t\t<div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"userName.errors.required\">Username is required.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t\n\t\t<!-- email -->\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"i_email\">Email</label> \n\t\t\t<input type=\"text\" id=\"i_email\" placeholder=\"Email\" formControlName=\"email\" class=\"form-control\">\n\t\t\t<div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"email.errors.required\">Email is required.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- password -->\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"i_password\">Password</label> \n\t\t\t<input type=\"text\" id=\"i_password\" placeholder=\"Password\" formControlName=\"password\" class=\"form-control\">\n\t\t\t<div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"password.errors.required\">Password is required.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- password -->\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"i_password\">Repeat Password</label> \n\t\t\t<input type=\"text\" id=\"i_rpassword\" placeholder=\"Repeat password\" formControlName=\"rpassword\" class=\"form-control\">\n\t\t\t<div *ngIf=\"rpassword.invalid && (rpassword.dirty || rpassword.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"rpassword.errors.required\">Repeat password is required.</div>\n\t\t\t\t <div [hidden]=\"!rpassword.hasError('mismatchedPassword')\">The passwords must match</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<!-- password -->\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"i_firstName\">FirstName</label> \n\t\t\t<input type=\"text\" id=\"i_firstName\" placeholder=\"First Name\" formControlName=\"firstName\" class=\"form-control\">\n\t\t</div>\n\t\t\n\t\t<!-- password -->\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"i_lastName\">Last Name</label> \n\t\t\t<input type=\"text\" id=\"i_lastName\" placeholder=\"Last Name\" formControlName=\"lastName\" class=\"form-control\">\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"btn btn-default\">Submit</button>\n\t</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(auth, fb) {
        this.auth = auth;
        this.fb = fb;
        this.createForm();
    }
    RegisterComponent.prototype.duplicatePassword = function (input) {
        if (!input.root || !input.root.controls) {
            return null;
        }
        var exactMatch = input.root.controls.password.value === input.value;
        return exactMatch ? null : { mismatchedPassword: true };
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rpassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.duplicatePassword]],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            firstName: [''],
            lastName: ['']
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "userName", {
        get: function () { return this.registerForm.get('userName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "rpassword", {
        get: function () { return this.registerForm.get('rpassword'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "firstName", {
        get: function () { return this.registerForm.get('firstName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "lastName", {
        get: function () { return this.registerForm.get('lastName'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (data) {
        delete data.rpassword;
        if (this.registerForm.valid) {
            this.auth.register(data);
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/topic/post-modal/post-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\r\n\theight:300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/topic/post-modal/post-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\t<h4 class=\"modal-title\">{{!post? 'Create new post' : 'Update\n\t\tpost'}}!</h4>\n\n\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t(click)=\"activeModal.dismiss('Cross click')\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\">\n\n\t<form [formGroup]=\"postForm\" (ngSubmit)=\"save(postForm.value)\">\n\t\t<!-- username -->\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"i_comment\">Comment</label> <input type=\"text\"\n\t\t\t\tid=\"i_comment\" placeholder=\"Comment\" formControlName=\"comment\"\n\t\t\t\tclass=\"form-control\">\n\t\t\t<div *ngIf=\"comment.invalid && (comment.dirty || comment.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"comment.errors.required\">Comment is required.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- password -->\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"i_solution\">Solution</label>\n\t\t\t<textarea type=\"text\" id=\"i_solution\" placeholder=\"Solution\"\n\t\t\t\tformControlName=\"solution\" class=\"form-control\"></textarea>\n\t\t\t<div *ngIf=\"solution.invalid && (solution.dirty || solution.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"solution.errors.required\">Solution is required.</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"btn btn-outline-dark\">Submit</button>\n\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t(click)=\"activeModal.close('Close click')\">Close</button>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/topic/post-modal/post-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_post_service__ = __webpack_require__("../../../../../src/app/services/post/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostModalComponent = (function () {
    function PostModalComponent(activeModal, fb, postService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.postService = postService;
        this.createForm();
    }
    PostModalComponent.prototype.ngOnInit = function () {
        if (this.post) {
            console.log(this.post);
            this.postForm.patchValue({ id: this.post.id, comment: this.post.comment, solution: this.post.solution });
        }
        this.postForm.patchValue({ topicId: this.topicId, userId: this.userId });
    };
    PostModalComponent.prototype.createForm = function () {
        this.postForm = this.fb.group({
            id: 0,
            comment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            solution: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            userId: [''],
            topicId: ['']
        });
    };
    Object.defineProperty(PostModalComponent.prototype, "comment", {
        get: function () { return this.postForm.get('comment'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostModalComponent.prototype, "solution", {
        get: function () { return this.postForm.get('solution'); },
        enumerable: true,
        configurable: true
    });
    PostModalComponent.prototype.save1 = function () {
        this.activeModal.close('Save');
    };
    PostModalComponent.prototype.save = function (values) {
        var _this = this;
        console.log(values);
        if (this.postForm.valid) {
            if (values.id === 0) {
                this.postService.post(values).subscribe(function (suc) { _this.activeModal.close('Insert'); }, function (err) { _this.error = true; });
            }
            else {
                this.postService.update(values).subscribe(function (suc) { _this.activeModal.close('Update'), function (err) { _this.error = true; }; });
            }
        }
    };
    return PostModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PostModalComponent.prototype, "post", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PostModalComponent.prototype, "topicId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PostModalComponent.prototype, "userId", void 0);
PostModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-modal',
        template: __webpack_require__("../../../../../src/app/components/topic/post-modal/post-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/topic/post-modal/post-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_post_service__["a" /* PostService */]) === "function" && _c || Object])
], PostModalComponent);

var _a, _b, _c;
//# sourceMappingURL=post-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/topic/topic-modal/topic-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/topic/topic-modal/topic-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\t<h4 class=\"modal-title\">{{!topic? 'Create new topic' : 'Update\n\t\ttopic'}}!</h4>\n\n\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t(click)=\"activeModal.dismiss('Cross click')\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\">\n\t<form [formGroup]=\"topicForm\" (ngSubmit)=\"save(topicForm.value)\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"i_name\">Name</label> <input type=\"text\" id=\"i_name\"\n\t\t\t\tplaceholder=\"Name\" formControlName=\"name\" class=\"form-control\">\n\t\t\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"name.errors.required\">Name is required.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"i_description\">Description</label> <input type=\"text\"\n\t\t\t\tid=\"i_description\" placeholder=\"Description\"\n\t\t\t\tformControlName=\"description\" class=\"form-control\">\n\t\t\t<div\n\t\t\t\t*ngIf=\"description.invalid && (description.dirty || description.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"description.errors.required\">Description is\n\t\t\t\t\trequired.</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"btn btn-outline-dark\">Submit</button>\n\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t(click)=\"activeModal.close('Close click')\">Close</button>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/topic/topic-modal/topic-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_topic_topic_service__ = __webpack_require__("../../../../../src/app/services/topic/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_topic__ = __webpack_require__("../../../../../src/app/classes/topic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicModalComponent = (function () {
    function TopicModalComponent(activeModal, topicService, auth, fb) {
        this.activeModal = activeModal;
        this.topicService = topicService;
        this.auth = auth;
        this.fb = fb;
        this.createForm();
    }
    TopicModalComponent.prototype.createForm = function () {
        this.topicForm = this.fb.group({
            id: 0,
            categoryId: '',
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            createdBy: this.auth.user.id
        });
    };
    TopicModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.topic) {
            this.topicService.get(this.topic.id).subscribe(function (data) {
                _this.topic = data;
                _this.topicForm.patchValue({ id: data.id, name: data.name, description: data.description });
            });
        }
        this.topicForm.patchValue({ categoryId: this.categoryId });
    };
    Object.defineProperty(TopicModalComponent.prototype, "name", {
        get: function () { return this.topicForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopicModalComponent.prototype, "description", {
        get: function () { return this.topicForm.get('description'); },
        enumerable: true,
        configurable: true
    });
    TopicModalComponent.prototype.save = function (values) {
        var _this = this;
        if (values.id == 0) {
            this.topicService.post(values).subscribe(function (suc) { _this.activeModal.close('Insert'); }, function (err) { _this.error = true; });
        }
        else {
            this.topicService.update(values).subscribe(function (suc) { _this.activeModal.close('Insert'); }, function (err) { _this.error = true; });
        }
    };
    return TopicModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TopicModalComponent.prototype, "categoryId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__classes_topic__["a" /* Topic */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__classes_topic__["a" /* Topic */]) === "function" && _a || Object)
], TopicModalComponent.prototype, "topic", void 0);
TopicModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-topic-modal',
        template: __webpack_require__("../../../../../src/app/components/topic/topic-modal/topic-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/topic/topic-modal/topic-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_topic_topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_topic_topic_service__["a" /* TopicService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
], TopicModalComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=topic-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/topic/topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-topic {\r\n\tposition : relative;\r\n\ttext-align: left;\r\n\theight: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div *ngIf=\"!topic\">Loading</div>\r\n\t<div *ngIf=\"topic\">\r\n\t\t<div class=\"post-topic post-data\">\r\n\t\t\t<p>Name:{{topic.name}}</p>\r\n\t\t\t<p>Description: {{topic.description}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<button class=\"btn btn-md btn-outline-primary float-right\"\r\n\t\t(click)=\"open(undefined)\">Post a reply!!</button>\r\n\t<h2>Answers</h2>\r\n\r\n\t<div *ngIf=\"posts?.length > 0\">\r\n\t\t<div class=\"post\" *ngFor=\"let post of posts\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-3 user-data\">\r\n\t\t\t\t\t<p>Inserted By: {{post.user.userName}}\r\n\t\t\t\t\t<p>Insert Date : {{post.insertDate | date: 'dd/MM/yyyy-hh:mm'}}\r\n\t\t\t\t\t<p *ngIf=\"post.updateDate\">Update Date : {{post.updateDate | date: 'dd/MM/yyyy-hh:mm'}}\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-9 post-data\">\r\n\t\t\t\t\t<a [routerLink]=\"['topic/', topic.id]\" routerLinkActive=\"active\">\r\n\t\t\t\t\t\t<p>Comment: {{post.comment}}</p>\r\n\t\t\t\t\t\t<p>Solution: {{post.solution}}</p>\r\n\t\t\t\t\t\t<p>Is correct: {{post.isCorrect ? 'Yes' : 'No'}}</p>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<button class=\"btn btn-md btn-outline-primary float-right\"\r\n\t\t\t\t\t\t(click)=\"open(post)\">Update</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<br>\r\n\t\t</div>\r\n\r\n\t\t<button></button>\r\n\r\n\r\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/topic/topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_topic_topic_service__ = __webpack_require__("../../../../../src/app/services/topic/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_post_post_service__ = __webpack_require__("../../../../../src/app/services/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_modal_post_modal_component__ = __webpack_require__("../../../../../src/app/components/topic/post-modal/post-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TopicComponent = (function () {
    function TopicComponent(topicService, auth, postService, route, modalService) {
        var _this = this;
        this.topicService = topicService;
        this.auth = auth;
        this.postService = postService;
        this.route = route;
        this.modalService = modalService;
        this.route.params.subscribe(function (params) { _this.topicId = params['topic_id']; });
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.topicService.get(this.topicId).subscribe(function (data) { _this.topic = data; });
        this.postService.getAll(this.topicId).subscribe(function (data) { _this.posts = data; console.log(_this.posts); });
    };
    TopicComponent.prototype.open = function (post) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__post_modal_post_modal_component__["a" /* PostModalComponent */], { size: 'lg' });
        modalRef.componentInstance.post = post;
        modalRef.componentInstance.topicId = this.topicId;
        modalRef.componentInstance.userId = this.auth.user.id;
        modalRef.result.then(function (data) {
            _this.ngOnInit();
        }, function (reason) {
            // on dismiss
        });
    };
    return TopicComponent;
}());
TopicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-topic',
        template: __webpack_require__("../../../../../src/app/components/topic/topic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/topic/topic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_topic_topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_topic_topic_service__["a" /* TopicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_post_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_post_post_service__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _e || Object])
], TopicComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=topic.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user__["a" /* User */]();
    }
    AuthService.prototype.refnesh = function () {
        var _this = this;
        if (this.isLoggedIn()) {
            console.log(localStorage.getItem('username'));
            return this.get(localStorage.getItem('username')).subscribe(function (data) { return _this.user = data; });
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') ? true : false;
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.get('api/auth/login', { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('username', username).set('password', password) })
            .subscribe(function (data) {
            if (data !== null) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                _this.router.navigate(['/']);
                _this.refnesh();
            }
            else {
                _this.error = true;
            }
        });
    };
    ;
    AuthService.prototype.register = function (user) {
        var _this = this;
        return this.http.post('api/auth', user).subscribe(function (data) { _this.success = data == 1; _this.error = data == 2; });
    };
    AuthService.prototype.get = function (username) {
        return this.http.get('api/auth', { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('username', username) });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/category/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var url = 'api/category';
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getAll = function () {
        return this.http.get(url).map(function (data) { return data; });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/post/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var url = 'api/post';
var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getAll = function (topicId) {
        return this.http.get(url, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('topicId', topicId) }).map(function (data) { return data; });
    };
    PostService.prototype.getOne = function (id) {
        return this.http.get(url, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('id', id) }).map(function (data) { return data; });
    };
    PostService.prototype.post = function (data) {
        return this.http.post(url, data);
    };
    PostService.prototype.update = function (data) {
        return this.http.put(url, data);
    };
    PostService.prototype.dalete = function (id) {
        return this.http.delete(url, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('id', id) });
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/topic/topic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var url = 'api/topic';
var TopicService = (function () {
    function TopicService(http) {
        this.http = http;
    }
    TopicService.prototype.getAll = function (number) {
        return this.http.get(url, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('categoryId', number) }).map(function (data) { return data; });
    };
    TopicService.prototype.get = function (id) {
        return this.http.get(url, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('id', id) }).map(function (data) { return data; });
    };
    TopicService.prototype.delete = function (id) {
        return this.http.delete(url, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('id', id) });
    };
    TopicService.prototype.update = function (values) {
        return this.http.put(url, values);
    };
    TopicService.prototype.post = function (values) {
        return this.http.post(url, values);
    };
    return TopicService;
}());
TopicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], TopicService);

var _a;
//# sourceMappingURL=topic.service.js.map

/***/ }),

/***/ "../../../../../src/app/utils/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TokenInterceptor = (function () {
    function TokenInterceptor(router) {
        this.router = router;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    _this.router.navigate(['/']);
                }
            }
        });
    };
    return TokenInterceptor;
}());
TokenInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object])
], TokenInterceptor);

var _a;
//# sourceMappingURL=token.interceptor.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map