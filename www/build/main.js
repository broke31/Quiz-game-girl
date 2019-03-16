webpackJsonp([4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_view_list_view__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParam) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
    }
    HomePage.prototype.generalInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_view_list_view__["a" /* ListViewPage */], this.navParam.data);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button color="primary" block>Nuova Partita</button>\n    <button ion-button color="primary" (click)="generalInfo()"block>Ottieni Informazioni</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__specific_info_specific_info__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListViewPage = /** @class */ (function () {
    function ListViewPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {
            username: "",
        };
        this.generalInfo = new Array();
        this.user.username = this.navParams.get('username');
        this.getGirlDetails();
    }
    ListViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DmPage');
    };
    ListViewPage.prototype.getGirlDetails = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('GeneralInfo').orderByChild('name').on('child_added', function (res) {
            for (var _i = 0, _a = res.val(); _i < _a.length; _i++) {
                var girl = _a[_i];
                _this.generalInfo.push({ name: girl.name, info: girl.info, src: girl.src });
            }
        });
    };
    ListViewPage.prototype.onInput = function (ev) {
        /*const val = ev.target.value;
        let temp = this.dealerList;
        if (val && val.trim() != '' && this.dealerList.length == 0) {
          this.dealerList = temp.filter((item) => {
            return ((item.nome + " " + item.cognome).toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        } else if (val && val.trim() != '') {
          this.dealerList = this.dealerList.filter((item) => {
            return ((item.nome + " " + item.cognome).toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        } else {
          this.dealerList = this.dLTemp;
        }*/
    };
    ListViewPage.prototype.showInfo = function (girl) {
        //alert(girl.info);  
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__specific_info_specific_info__["a" /* SpecificInfoPage */], girl.info);
    };
    ListViewPage.prototype.seeListEvent = function (dealer) {
        /*this.getAllEvents(dealer).then(res => {
          this.presentModal();
        })*/
    };
    ListViewPage.prototype.getAllEvents = function (dealer) {
        /* return new Promise((resolve, reject) => {
           firebase.database().ref("Users/" + dealer + "/EventiIscritto").on("child_added", res => {
             firebase.database().ref("Evento/" + res.val()).once("value", ev => {
               //alert(ev.val().data + " " + ev.val().locandina + " " + ev.val().luogo + " " + ev.val().nome + " " + ev.val().scadenza + " " + ev.val().speaker)
               firebase.database().ref("Evento/" + res.val() + "/trainer").once("value", tr => {
                 let element = {
                   data: ev.val().data, locandina: ev.val().locandina, luogo: ev.val().luogo, nome: ev.val().nome,
                   scadenza: ev.val().scadenza, speaker: ev.val().speaker, trainer: { email: tr.val().email, lavoraPer: tr.val().lavoraPer, username: tr.val().username }
                 };
                 firebase.storage().ref(element.locandina).getDownloadURL().then(res => {
                   element.locandina = res;
                   this.listEventOfDealer.push(element);
                   resolve(this.listEventOfDealer);
                 })
               });
             })
           })
         })*/
    };
    ListViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-view',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/list-view/list-view.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Dealer List</ion-title>\n  </ion-navbar>\n\n  <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)">\n  </ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor ="let girl of generalInfo" (click)="showInfo(girl)">\n      <ion-row>\n        <div item-start>\n          <ion-icon style="font-size: 30px; margin-top: 50%" name="contact"></ion-icon>\n        </div>\n        <div  >\n         <h1 >{{girl.name}}</h1>\n          \n        </div>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/list-view/list-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListViewPage);
    return ListViewPage;
}());

//# sourceMappingURL=list-view.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SpecificInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpecificInfoPage = /** @class */ (function () {
    function SpecificInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.infoText = this.navParams.data;
    }
    SpecificInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecificInfoPage');
    };
    SpecificInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-specific-info',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/specific-info/specific-info.html"*/'<!--\n  Generated template for the SpecificInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>SpecificInfo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <p>{{infoText}}</p>\n</ion-content>\n'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/specific-info/specific-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SpecificInfoPage);
    return SpecificInfoPage;
}());

//# sourceMappingURL=specific-info.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(events, navCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/');
        this.user = {
            email: "",
            pin: "",
            username: ""
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var toSend = {
            email: this.user.email,
            pin: this.user.pin,
            username: this.user.username,
        };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(toSend.email, toSend.pin)
            .then(function (res) { return __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('Users').orderByChild('email').equalTo(toSend.email).once('child_added', function (snapshot) {
            toSend.email = snapshot.val().email;
            toSend.pin = snapshot.val().pin;
            toSend.username = snapshot.val().username;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], toSend);
            //alert("loggato");
        }); })
            .catch(function (err) { return alert("Mail o password errate"); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form>\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="user.email" name="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>PIN</ion-label>\n        <ion-input type="password" [(ngModel)]="user.pin" name="pin" pattern="[0-9]*"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block (click)="doLogin()">Login</button>\n        <h4 style="text-align: center">or</h4> \n        <button ion-button color="secondary" block (click)="goSignup()">Signup</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/');
        this.user = {
            email: "",
            username: "",
            pin: "",
        };
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        var toSend = {
            email: this.user.email,
            username: this.user.username,
            pin: this.user.pin,
        };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(toSend.email, toSend.pin)
            .then(function (user) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Users").push(toSend);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], toSend);
        })
            .catch(function (err) { alert("Compila i campi correttamente"); });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Singup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form (submit)="doSignup()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>Email</ion-label>-->\n        <ion-input type="email" [(ngModel)]="user.email" name="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Username</ion-label>-->\n        <ion-input type="text" [(ngModel)]="user.username" name="username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>PIN</ion-label>-->\n        <ion-input type="password" [(ngModel)]="user.pin" name="pin"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>SIGNUP</button>\n      </div>\n\n      </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/list-view/list-view.module": [
		374,
		3
	],
	"../pages/login/login.module": [
		375,
		2
	],
	"../pages/signup/signup.module": [
		376,
		1
	],
	"../pages/specific-info/specific-info.module": [
		377,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(269);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_view_list_view__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_specific_info_specific_info__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__credential_json__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__credential_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__credential_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













alert(__WEBPACK_IMPORTED_MODULE_12__credential_json__["apiKey"]);
var config = {
    apiKey: __WEBPACK_IMPORTED_MODULE_12__credential_json__["apiKey"],
    authDomain: __WEBPACK_IMPORTED_MODULE_12__credential_json__["authDomain"],
    databaseURL: __WEBPACK_IMPORTED_MODULE_12__credential_json__["databaseURL"],
    projectId: __WEBPACK_IMPORTED_MODULE_12__credential_json__["projectId"],
    storageBucket: __WEBPACK_IMPORTED_MODULE_12__credential_json__["storageBucket"],
    messagingSenderId: __WEBPACK_IMPORTED_MODULE_12__credential_json__["messagingSenderId"]
};
__WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp(config);
__WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database.enableLogging(true);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_view_list_view__["a" /* ListViewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_specific_info_specific_info__["a" /* SpecificInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/list-view/list-view.module#DmPageModule', name: 'ListViewPage', segment: 'list-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specific-info/specific-info.module#SpecificInfoPageModule', name: 'SpecificInfoPage', segment: 'specific-info', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_view_list_view__["a" /* ListViewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_specific_info_specific_info__["a" /* SpecificInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, sothe platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports = {"apiKey":"AIzaSyDwu-STjJLemthvONG68cmtRoY3hh8_RjM","authDomain":"quizgamegirl-e0d99.firebaseapp.com","databaseURL":"https://quizgamegirl-e0d99.firebaseio.com","projectId":"quizgamegirl-e0d99","storageBucket":"quizgamegirl-e0d99.appspot.com","messagingSenderId":"748143241095"}

/***/ })

},[246]);
//# sourceMappingURL=main.js.map