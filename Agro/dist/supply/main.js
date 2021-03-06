(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule, routerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerComponent", function() { return routerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../supplier/supplier.component */ "./src/app/supplier/supplier.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _former_former_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../former/former.component */ "./src/app/former/former.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _supplier_reg_supplier_reg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../supplier-reg/supplier-reg.component */ "./src/app/supplier-reg/supplier-reg.component.ts");
/* harmony import */ var _shop_reg_shop_reg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shop-reg/shop-reg.component */ "./src/app/shop-reg/shop-reg.component.ts");
/* harmony import */ var _cus_reg_cus_reg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cus-reg/cus-reg.component */ "./src/app/cus-reg/cus-reg.component.ts");
/* harmony import */ var _former_reg_former_reg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../former-reg/former-reg.component */ "./src/app/former-reg/former-reg.component.ts");
/* harmony import */ var _gaurd_farmer_check_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../gaurd/farmer-check.guard */ "./src/app/gaurd/farmer-check.guard.ts");
/* harmony import */ var _gaurd_supplier_check_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../gaurd/supplier-check.guard */ "./src/app/gaurd/supplier-check.guard.ts");
/* harmony import */ var _gaurd_shop_check_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../gaurd/shop-check.guard */ "./src/app/gaurd/shop-check.guard.ts");
/* harmony import */ var _gaurd_consumer_check_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../gaurd/consumer-check.guard */ "./src/app/gaurd/consumer-check.guard.ts");
/* harmony import */ var _gaurd_admin_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../gaurd/admin.guard */ "./src/app/gaurd/admin.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _persons_persons_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../persons/persons.component */ "./src/app/persons/persons.component.ts");
/* harmony import */ var _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../stock-list/stock-list.component */ "./src/app/stock-list/stock-list.component.ts");
/* harmony import */ var _shop_crops_shop_crops_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shop-crops/shop-crops.component */ "./src/app/shop-crops/shop-crops.component.ts");
/* harmony import */ var _consumer_crops_consumer_crops_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../consumer-crops/consumer-crops.component */ "./src/app/consumer-crops/consumer-crops.component.ts");
/* harmony import */ var _farmerwithdraw_farmerwithdraw_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../farmerwithdraw/farmerwithdraw.component */ "./src/app/farmerwithdraw/farmerwithdraw.component.ts");
/* harmony import */ var _supplierwithdraw_supplierwithdraw_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../supplierwithdraw/supplierwithdraw.component */ "./src/app/supplierwithdraw/supplierwithdraw.component.ts");
/* harmony import */ var _shopwithdraw_shopwithdraw_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shopwithdraw/shopwithdraw.component */ "./src/app/shopwithdraw/shopwithdraw.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../sign/sign.component */ "./src/app/sign/sign.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    {
        path: 'Former',
        component: _former_former_component__WEBPACK_IMPORTED_MODULE_4__["FormerComponent"],
        canActivate: [_gaurd_farmer_check_guard__WEBPACK_IMPORTED_MODULE_10__["FarmerCheckGuard"]]
    },
    {
        path: 'Farmerwithdraw',
        component: _farmerwithdraw_farmerwithdraw_component__WEBPACK_IMPORTED_MODULE_22__["FarmerwithdrawComponent"],
        canActivate: [_gaurd_farmer_check_guard__WEBPACK_IMPORTED_MODULE_10__["FarmerCheckGuard"]]
    },
    {
        path: 'Supplier',
        component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_2__["SupplierComponent"],
        canActivate: [_gaurd_supplier_check_guard__WEBPACK_IMPORTED_MODULE_11__["SupplierCheckGuard"]]
    },
    {
        path: 'Supplierwithdraw',
        component: _supplierwithdraw_supplierwithdraw_component__WEBPACK_IMPORTED_MODULE_23__["SupplierwithdrawComponent"],
        canActivate: [_gaurd_supplier_check_guard__WEBPACK_IMPORTED_MODULE_11__["SupplierCheckGuard"]]
    },
    {
        path: 'Customer',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"],
        canActivate: [_gaurd_consumer_check_guard__WEBPACK_IMPORTED_MODULE_13__["ConsumerCheckGuard"]]
    },
    {
        path: 'Shop',
        component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"],
        canActivate: [_gaurd_shop_check_guard__WEBPACK_IMPORTED_MODULE_12__["ShopCheckGuard"]]
    },
    {
        path: 'Shopwithdraw',
        component: _shopwithdraw_shopwithdraw_component__WEBPACK_IMPORTED_MODULE_24__["ShopwithdrawComponent"],
        canActivate: [_gaurd_shop_check_guard__WEBPACK_IMPORTED_MODULE_12__["ShopCheckGuard"]]
    },
    {
        path: 'addsupplier',
        component: _supplier_reg_supplier_reg_component__WEBPACK_IMPORTED_MODULE_6__["SupplierRegComponent"],
    },
    {
        path: 'addshop',
        component: _shop_reg_shop_reg_component__WEBPACK_IMPORTED_MODULE_7__["ShopRegComponent"],
    },
    {
        path: 'addconsumer',
        component: _cus_reg_cus_reg_component__WEBPACK_IMPORTED_MODULE_8__["CusRegComponent"],
    },
    {
        path: 'addfarmer',
        component: _former_reg_former_reg_component__WEBPACK_IMPORTED_MODULE_9__["FormerRegComponent"],
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        canActivate: [_gaurd_admin_guard__WEBPACK_IMPORTED_MODULE_14__["AdminGuard"]]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"],
    },
    {
        path: 'dashboard',
        component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_17__["OverviewComponent"],
    },
    {
        path: 'persons',
        component: _persons_persons_component__WEBPACK_IMPORTED_MODULE_18__["PersonsComponent"],
    },
    {
        path: 'suppliercrops',
        component: _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_19__["StockListComponent"],
    },
    {
        path: 'shopcrops',
        component: _shop_crops_shop_crops_component__WEBPACK_IMPORTED_MODULE_20__["ShopCropsComponent"],
    },
    {
        path: 'consumercrops',
        component: _consumer_crops_consumer_crops_component__WEBPACK_IMPORTED_MODULE_21__["ConsumerCropsComponent"],
    },
    {
        path: 'sign',
        component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_25__["SignComponent"],
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routerComponent = [];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/supplier/supplier.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _former_former_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./former/former.component */ "./src/app/former/former.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _former_reg_former_reg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./former-reg/former-reg.component */ "./src/app/former-reg/former-reg.component.ts");
/* harmony import */ var _cus_reg_cus_reg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cus-reg/cus-reg.component */ "./src/app/cus-reg/cus-reg.component.ts");
/* harmony import */ var _shop_reg_shop_reg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shop-reg/shop-reg.component */ "./src/app/shop-reg/shop-reg.component.ts");
/* harmony import */ var _supplier_reg_supplier_reg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./supplier-reg/supplier-reg.component */ "./src/app/supplier-reg/supplier-reg.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _farmerwithdraw_farmerwithdraw_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./farmerwithdraw/farmerwithdraw.component */ "./src/app/farmerwithdraw/farmerwithdraw.component.ts");
/* harmony import */ var _supplierwithdraw_supplierwithdraw_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./supplierwithdraw/supplierwithdraw.component */ "./src/app/supplierwithdraw/supplierwithdraw.component.ts");
/* harmony import */ var _shopwithdraw_shopwithdraw_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shopwithdraw/shopwithdraw.component */ "./src/app/shopwithdraw/shopwithdraw.component.ts");
/* harmony import */ var _persons_persons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./persons/persons.component */ "./src/app/persons/persons.component.ts");
/* harmony import */ var _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./stock-list/stock-list.component */ "./src/app/stock-list/stock-list.component.ts");
/* harmony import */ var _shop_crops_shop_crops_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shop-crops/shop-crops.component */ "./src/app/shop-crops/shop-crops.component.ts");
/* harmony import */ var _consumer_crops_consumer_crops_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./consumer-crops/consumer-crops.component */ "./src/app/consumer-crops/consumer-crops.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_4__["SupplierComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_5__["ShopComponent"],
                _former_former_component__WEBPACK_IMPORTED_MODULE_6__["FormerComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__["CustomerComponent"],
                _former_reg_former_reg_component__WEBPACK_IMPORTED_MODULE_11__["FormerRegComponent"],
                _cus_reg_cus_reg_component__WEBPACK_IMPORTED_MODULE_12__["CusRegComponent"],
                _shop_reg_shop_reg_component__WEBPACK_IMPORTED_MODULE_13__["ShopRegComponent"],
                _supplier_reg_supplier_reg_component__WEBPACK_IMPORTED_MODULE_14__["SupplierRegComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_16__["OverviewComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _persons_persons_component__WEBPACK_IMPORTED_MODULE_21__["PersonsComponent"],
                _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_22__["StockListComponent"],
                _shop_crops_shop_crops_component__WEBPACK_IMPORTED_MODULE_23__["ShopCropsComponent"],
                _consumer_crops_consumer_crops_component__WEBPACK_IMPORTED_MODULE_24__["ConsumerCropsComponent"],
                _sign_sign_component__WEBPACK_IMPORTED_MODULE_25__["SignComponent"],
                _farmerwithdraw_farmerwithdraw_component__WEBPACK_IMPORTED_MODULE_18__["FarmerwithdrawComponent"],
                _supplierwithdraw_supplierwithdraw_component__WEBPACK_IMPORTED_MODULE_19__["SupplierwithdrawComponent"],
                _shopwithdraw_shopwithdraw_component__WEBPACK_IMPORTED_MODULE_20__["ShopwithdrawComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/consumer-crops/consumer-crops.component.css":
/*!*************************************************************!*\
  !*** ./src/app/consumer-crops/consumer-crops.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablecolor{\r\n    background-color: #682382 ;\r\n    color:white;\r\n    \r\n    }\r\n    .btn {\r\n        background-color: #682382 ;\r\n        border-radius: 8px;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n        color: #fff;\r\n        font-family: inherit;\r\n        font-weight: bold;\r\n        /* margin: 1 20px; */\r\n        /* font-family: Helvetica-Bold; */\r\n        width: 150px;\r\n        height: 30px;\r\n        /* padding: 15px; */\r\n        font-size: 15px;\r\n    }"

/***/ }),

/***/ "./src/app/consumer-crops/consumer-crops.component.html":
/*!**************************************************************!*\
  !*** ./src/app/consumer-crops/consumer-crops.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <app-home></app-home>\n    </div>\n    <div class=\"col-sm-9\">\n        <h2><b>Retailer</b></h2>\n        <hr>\n      <br><br><br>\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n      \n                <h4><b>List of Retailer</b></h4><br>\n            \n                <table class=\"table table-striped\" style=\"display:block;height:500px;\">\n                    <thead class=\"tablecolor\">\n                      <tr>\n                        <th>Retailer Id</th>\n                        <th>Retailer Name</th>\n                        <th>Retailer Address</th>\n                        <th></th>\n                      </tr>\n                    </thead>\n                    <tbody >\n                        <tr *ngFor=\"let consumer of consumers\" >\n                            <td>{{ consumer.consumer_id }}</td> \n                            <td>{{ consumer.consumer_name }}</td>\n                            <td>{{ consumer.consumer_address }}</td>\n                            <td><input type=\"button\"  class=\"btn\" value=\"View Crop details\" (click)=\"crop_details(consumer.consumer_id)\"></td>\n                        </tr>\n                </tbody>\n                  </table>  \n            </div>\n            <div class=\"col-sm-4\">\n\n                <h4><b>Available Crop's Details</b></h4><br>\n            \n                <table class=\"table table-striped\" style=\"overflow-y:auto;display:block;height:500px;\">\n                    <thead class=\"tablecolor\">\n                      <tr>\n                        <th>Crop Id</th>\n                        <th>Crop Name</th>\n                        <th>Quantity</th>\n                        <!-- <th>Price</th> -->\n  \n                      </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let crop of cropdetails\" >\n                            <td>{{ crop.crop_id }}</td> \n                            <td>{{ crop.crop_name }}</td>\n                            <td>{{ crop.crop_quantity}}</td>\n                            <!-- <td>{{ crop.crop_price}}</td> -->\n                        </tr>\n                </tbody>\n                  </table>  \n            </div>\n          </div>\n            \n          \n\n\n    </div>\n  </div>\n  \n\n"

/***/ }),

/***/ "./src/app/consumer-crops/consumer-crops.component.ts":
/*!************************************************************!*\
  !*** ./src/app/consumer-crops/consumer-crops.component.ts ***!
  \************************************************************/
/*! exports provided: ConsumerCropsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerCropsComponent", function() { return ConsumerCropsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsumerCropsComponent = /** @class */ (function () {
    function ConsumerCropsComponent(cs) {
        this.cs = cs;
        this.consumers = [];
        this.cropdetails = [];
    }
    ConsumerCropsComponent.prototype.list_of_consumer = function () {
        var _this = this;
        this.consumers.length = 0;
        this.cs.consumer_ids().then(function (ids) {
            ids.forEach(function (consumer_id) {
                _this.cs.consumer_name(consumer_id).then(function (consumer_name) {
                    _this.cs.consumer_by_id(consumer_id).then(function (consumer_address) {
                        // alert(supplier_name+''+supplier_address)
                        var obj = {};
                        obj['consumer_id'] = consumer_id;
                        obj['consumer_name'] = consumer_name;
                        obj['consumer_address'] = consumer_address;
                        _this.consumers.push(obj);
                    });
                });
            });
        });
    };
    ConsumerCropsComponent.prototype.crop_details = function (consumer_id) {
        var _this = this;
        this.cropdetails.length = 0;
        this.cs.order_id(consumer_id).then(function (order_ids) {
            order_ids.forEach(function (or_id) {
                _this.cs.consumer_map(consumer_id, or_id).then(function (result) {
                    var obj = {};
                    obj['crop_id'] = result[0];
                    _this.cs.product_detail_map(result[0]).then(function (res) { return obj['crop_name'] = res[0]; });
                    obj['crop_quantity'] = result[1];
                    // obj['crop_price']=result[2];
                    _this.cropdetails.push(obj);
                });
            });
        });
    };
    // this.cs.consumer_ids().then(cons_ids=>{
    //   cons_ids.forEach(id=>{
    //     this.cs.order_id(id).then(order_ids=>{
    //       order_ids.forEach(or_id=>{
    //     this.cs.consumer_map(id,or_id).then(result=>{
    //       if(result[0]==text_id)
    //       {
    //       this.cs.shop_name(result[2]).then(shop_name=>{
    //               this.cs.consumer_by_id(id).then(address=>{
    //       this.cs.consumer_name(id).then(name=>{
    //         let obj3={};
    //         obj3['consumer_id']=id;
    //         obj3['consumer_name']=name;
    //         obj3['consumer_address']=address;
    //         obj3['crop_price']=result[3];
    //         obj3['crop_quantity']=result[1];
    //         obj3['shop_id']=result[2];
    //         obj3['shop_name']=shop_name;
    //         //  alert(name+''+address+''+result[0]+''+result[1]+''+result[2])
    //          console.log(obj3);
    //          this.consumers_list.push(obj3)
    //       })
    //     })
    //   })
    //   }
    //  })
    // })
    // })
    // })
    // })
    ConsumerCropsComponent.prototype.ngOnInit = function () {
        this.list_of_consumer();
    };
    ConsumerCropsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumer-crops',
            template: __webpack_require__(/*! ./consumer-crops.component.html */ "./src/app/consumer-crops/consumer-crops.component.html"),
            styles: [__webpack_require__(/*! ./consumer-crops.component.css */ "./src/app/consumer-crops/consumer-crops.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"]])
    ], ConsumerCropsComponent);
    return ConsumerCropsComponent;
}());



/***/ }),

/***/ "./src/app/cus-reg/cus-reg.component.css":
/*!***********************************************!*\
  !*** ./src/app/cus-reg/cus-reg.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 120px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/cus-reg/cus-reg.component.html":
/*!************************************************!*\
  !*** ./src/app/cus-reg/cus-reg.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-3\">\r\n      <app-header></app-header>\r\n  </div>\r\n  <div class=\"col-sm-9\">\r\n    \r\n    <div class=\"jumbotron text-center\">\r\n      <h3>CONSUMER REGISTRATION</h3>\r\n      \r\n    </div>\r\n      <BR><br><br><br>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n         \r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" class=\"form-control\" id = \"id1\" #name placeholder=\"Enter Name\" name=\"Name\">\r\n          <br><br>\r\n          <button type=\"submit\" class=\"btn\"(click)=\"consumer_registeration(name.value)\">Register</button>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    \r\n   \r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<ngx-spinner></ngx-spinner>\r\n\r\n"

/***/ }),

/***/ "./src/app/cus-reg/cus-reg.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cus-reg/cus-reg.component.ts ***!
  \**********************************************/
/*! exports provided: CusRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusRegComponent", function() { return CusRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CusRegComponent = /** @class */ (function () {
    function CusRegComponent(cs, spinner) {
        this.cs = cs;
        this.spinner = spinner;
    }
    CusRegComponent.prototype.ngOnInit = function () {
    };
    CusRegComponent.prototype.consumer_registeration = function (name) {
        var _this = this;
        this.spinner.show();
        this.cs.getAccount().then(function (address) {
            _this.cs.consumer_registeration(name, address).then(function (res) {
                _this.spinner.hide();
                if (res == 1) {
                    document.getElementById("id1").value = "";
                    alert("Successfully Registered...!");
                }
                else if (res == 0) {
                    document.getElementById("id1").value = "";
                    alert("You Rejected this transaction...!");
                }
                else if (res == 2) {
                    document.getElementById("id1").value = "";
                    alert("Transaction Failed...!");
                }
            });
        });
    };
    CusRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cus-reg',
            template: __webpack_require__(/*! ./cus-reg.component.html */ "./src/app/cus-reg/cus-reg.component.html"),
            styles: [__webpack_require__(/*! ./cus-reg.component.css */ "./src/app/cus-reg/cus-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], CusRegComponent);
    return CusRegComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablecolor{\r\n    background-color: #682382 ;\r\ncolor:white;\r\n\r\n}\r\n.btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 140px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <app-header></app-header>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      \r\n        \r\n        <div class=\"container-fluid\">\r\n <h2><b>Retailer</b></h2>\r\n <hr>\r\n            <br><br>\r\n               <div class=\"row\">\r\n                   <div class=\"col-sm-3\">\r\n                     <!-- <div class=\"row\"> -->\r\n                    \r\n                       <!-- <div class=\"col-sm-6\"> -->\r\n                               <h3><b>Retailer Purchase Crop</b></h3>\r\n                               <br>\r\n                               \r\n                           <div class=\"col-sm-12\">\r\n                               <div class=\"form-group\">\r\n                                   <label for=\"usr\">Crop id:</label>\r\n                                   <input type=\"text\" class=\"form-control\" id=\"id1\" #productid  placeholder=\"Enter Crop Id\">\r\n                                 </div>\r\n                           </div>\r\n                     <div class=\"col-sm-12\">\r\n                         <div class=\"form-group\">\r\n                             <label for=\"usr\">Crop Quantity:</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"id2\" #productquantity   placeholder=\"Enter the Quantity\">\r\n                           </div>\r\n                     </div>\r\n                     <div class=\"col-sm-12\">\r\n                           <div class=\"form-group\">\r\n                               <label for=\"usr\">Distributor ID:</label>\r\n                               <input type=\"text\" class=\"form-control\" id=\"id3\" #shopid  placeholder=\"Enter Distributor Id\">\r\n                             </div>\r\n                             </div>\r\n                     <br>\r\n                     <div class=\"col-sm-12\">\r\n                     <button type=\"button\" class=\"btn\" (click)=\"Customer_purchase_product(productid.value,productquantity.value,shopid.value)\">Purchase Crop</button>&nbsp;&nbsp;\r\n                    \r\n                     \r\n                       </div>\r\n                   </div>\r\n           \r\n                   <div class=\"col-sm-3\">\r\n           \r\n                   </div>\r\n           \r\n                     <!-- </div> -->\r\n                      \r\n                   <!-- </div> -->\r\n           \r\n           \r\n                   <div class=\"col-sm-6\">\r\n                           <h3><b>Available Crop Details</b></h3><br>\r\n                           <table class=\"table\" style=\"overflow-y:auto;display:block;height:300px;\">\r\n                     \r\n                               <!--Table head-->\r\n                               <thead class=\"tablecolor\">\r\n                                   <tr class=\"text-black\">\r\n                                        <th>Crop Name</th>  \r\n                                       <th>Crop ID</th>    \r\n                                       <th>Distributor ID</th>                  \r\n                                       <th>Price Per Quantity <small>(in ether)</small></th>\r\n                                       <th>Quantity</th>\r\n                                       <!-- <th>Seller ID</th> -->\r\n                                   </tr>\r\n                               </thead>\r\n                               <!--Table head-->\r\n                           \r\n                               <!--Table body-->\r\n                               <tbody >\r\n                                       <tr *ngFor=\"let s of available_crop_details\" >\r\n                                            <td>{{ s. product_name}}</td> \r\n                                           <td>{{ s.productid }}</td> \r\n                                           <td>{{s.shopid}}</td>\r\n                                           <td>{{ s.price }}</td>\r\n                                           <td>{{s.quantity}}</td>\r\n                                           <!-- <td>{{s.sellerid}}</td> -->\r\n                                       </tr>\r\n                               </tbody>\r\n                               <!--Table body-->\r\n                           </table>\r\n                     </div>\r\n                     \r\n                 </div>\r\n           \r\n                 <br>\r\n                 <br>\r\n                 \r\n                 <div class=\"row\">\r\n                     <!-- <div class=\"col-sm-2\"></div> -->\r\n                   <div class=\"col-sm-12\">\r\n           \r\n                           <h3><b>Purchased Crop Details</b></h3><br>\r\n                           <table class=\"table\"  style=\"overflow-y:auto;display:block;height:300px;\">\r\n                     \r\n                               <!--Table head-->\r\n                               <thead class=\"tablecolor\">\r\n                                   <tr class=\"text-black\">\r\n                                        <th>Crop name</th>   \r\n                                       <th>Crop ID</th>                        \r\n                                       <th>Quantity</th>\r\n                                       <th>Distributor ID</th>\r\n                                   </tr>\r\n                               </thead>\r\n                               <!--Table head-->\r\n                           \r\n                               <!--Table body-->\r\n                               <tbody >\r\n                                       <tr *ngFor=\"let s of customer_details\" >\r\n                                         <td>{{s.product_name}}</td>\r\n                                        <td>{{s.product_id}}</td>\r\n                                           <td>{{s.quantity}}</td>\r\n                                           <td>{{ s.shop_id }}</td> \r\n                                       </tr>\r\n                               </tbody>\r\n                               <!--Table body-->\r\n                           </table>\r\n           \r\n           \r\n                    \r\n              \r\n                  \r\n                 </div>\r\n               </div>\r\n           </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n  \r\n  <ngx-spinner></ngx-spinner>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!-- <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script> -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(cs, spinner) {
        this.cs = cs;
        this.spinner = spinner;
        this.customer_details = [];
        this.available_crop_details = [];
    }
    CustomerComponent.prototype.Customer_purchase_product = function (product_id, product_quantity, shop_id) {
        var _this = this;
        this.spinner.show();
        this.cs.getAccount().then(function (address) {
            _this.cs.product_detail_map_shop(product_id, shop_id).then(function (p_d_m) {
                console.log(typeof (product_id), typeof (product_quantity), typeof (shop_id), address, p_d_m[0] * product_quantity);
                _this.cs.consumer_buy_product(parseInt(product_id), parseInt(product_quantity), parseInt(shop_id), address, (p_d_m[0].toNumber() / 1000000000000000000) * product_quantity).then(function (res) {
                    document.getElementById("id1").value = "";
                    document.getElementById("id2").value = "";
                    document.getElementById("id3").value = "";
                    _this.spinner.hide();
                    if (res == 1) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("You Bought Crop Successfully");
                    }
                    else if (res == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("You Rejected this Transaction");
                    }
                    else if (res == 2) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Transaction Failed");
                    }
                });
            });
        });
    };
    CustomerComponent.prototype.available_crops = function () {
        var _this = this;
        this.cs.getAccount().then(function (address) {
            _this.cs.shop_ids().then(function (ids) {
                _this.cs.product_ids().then(function (pids) {
                    ids.forEach(function (shop_id) {
                        pids.forEach(function (pid) {
                            _this.cs.product_detail_map_shop(pid, shop_id).then(function (result) {
                                _this.cs.shop_name(shop_id).then(function (shop_name) {
                                    _this.cs.product_detail_map(pid).then(function (pro_d) {
                                        if (result[1].toNumber() != 0) {
                                            var obj = {};
                                            obj['product_name'] = pro_d[0];
                                            obj['shopid'] = shop_id;
                                            obj['shopname'] = shop_name;
                                            obj['productid'] = pid;
                                            obj['price'] = result[0].toNumber() / 1000000000000000000;
                                            console.log(result[0].toNumber() / 1000000000000000000);
                                            obj['quantity'] = result[1];
                                            // obj['sellerid']=result[2];
                                            _this.available_crop_details.push(obj);
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    CustomerComponent.prototype.consumers_crops = function () {
        var _this = this;
        this.cs.getAccount().then(function (address) {
            return _this.cs.consumer_id_by_address(address).then(function (cus_id) {
                _this.cs.order_id(cus_id).then(function (order_ids) {
                    order_ids.forEach(function (order_id) {
                        _this.cs.consumer_map(cus_id, order_id).then(function (res) {
                            _this.cs.product_detail_map(res[0]).then(function (pro_d) {
                                var obj = {};
                                obj['product_name'] = pro_d[0];
                                obj['product_id'] = res[0];
                                obj['quantity'] = res[1];
                                obj['shop_id'] = res[2];
                                _this.customer_details.push(obj);
                            });
                        });
                    });
                });
            });
        });
    };
    CustomerComponent.prototype.ngOnInit = function () {
        this.available_crops();
        this.consumers_crops();
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/farmerwithdraw/farmerwithdraw.component.css":
/*!*************************************************************!*\
  !*** ./src/app/farmerwithdraw/farmerwithdraw.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 120px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/farmerwithdraw/farmerwithdraw.component.html":
/*!**************************************************************!*\
  !*** ./src/app/farmerwithdraw/farmerwithdraw.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"row\">\n     \n       \n      <div class=\"col-sm-6\">\n          <app-header></app-header>\n      </div>\n\n      \n      <div class=\"col-sm-2\">\n          <br><br><br><br><br><br>\n            <h3 style=\"text-align:center\"><b>Balance in Ether</b></h3><br>\n          <h2 style=\"text-align:center\"><b>{{farmer_bal}}</b></h2>\n\n\n         &nbsp; &nbsp; <h3 style=\"text-align:center\"><b>Withdraw</b></h3><br><br>\n          <input class=\"form-control\" type=\"text\" id=\"id1\" placeholder=\"Enter withdraw amount\" #withdrawamt ><br>\n          \n          <button   class=\"btn center-block\" (click)=\"withdraw_func(withdrawamt.value)\">withdraw</button>\n\n      </div> \n\n          <div class=\"col-sm-4\">\n\n          </div>\n\n  </div> \n  <ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/farmerwithdraw/farmerwithdraw.component.ts":
/*!************************************************************!*\
  !*** ./src/app/farmerwithdraw/farmerwithdraw.component.ts ***!
  \************************************************************/
/*! exports provided: FarmerwithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerwithdrawComponent", function() { return FarmerwithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FarmerwithdrawComponent = /** @class */ (function () {
    function FarmerwithdrawComponent(cs, spinner) {
        this.cs = cs;
        this.spinner = spinner;
    }
    FarmerwithdrawComponent.prototype.farmer_balance = function () {
        var _this = this;
        this.farmer_bal = 0;
        this.cs.getAccount().then(function (address) {
            _this.cs.farmer_id_by_address(address).then(function (farmer_id) {
                _this.cs.farmer_balance(farmer_id).then(function (res) {
                    _this.farmer_bal = res / 1000000000000000000;
                });
            });
        });
    };
    FarmerwithdrawComponent.prototype.withdraw_func = function (withdrawamt) {
        var _this = this;
        this.spinner.show();
        if (document.getElementById('id1').value == '' || withdrawamt <= 0) {
            alert("Please Enter a Valid amount...!");
            document.getElementById("id1").value = "";
            return;
        }
        this.cs.getAccount().then(function (address) {
            _this.cs.farmer_id_by_address(address).then(function (farmer_id) {
                _this.cs.farmer_balance(farmer_id).then(function (res) {
                    _this.farmer_bal = res / 1000000000000000000;
                    if (_this.farmer_bal >= withdrawamt) {
                        _this.cs.former_withdraw(withdrawamt * 1000000000000000000, address).then(function (res) {
                            document.getElementById("id1").value = "";
                            _this.spinner.hide();
                            if (res == 1) {
                                alert(" Amount Successfully Added to your Accounty");
                                _this.farmer_balance();
                            }
                            else if (res == 0) {
                                alert("You Rejected this Transaction");
                            }
                            else if (res == 2) {
                                alert("Transaction Failed");
                            }
                        });
                    }
                    else {
                        alert("You Can Withdraw Upto" + _this.farmer_bal);
                        document.getElementById("id1").value = "";
                    }
                });
            });
        });
    };
    FarmerwithdrawComponent.prototype.ngOnInit = function () {
        this.farmer_balance();
    };
    FarmerwithdrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-farmerwithdraw',
            template: __webpack_require__(/*! ./farmerwithdraw.component.html */ "./src/app/farmerwithdraw/farmerwithdraw.component.html"),
            styles: [__webpack_require__(/*! ./farmerwithdraw.component.css */ "./src/app/farmerwithdraw/farmerwithdraw.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], FarmerwithdrawComponent);
    return FarmerwithdrawComponent;
}());



/***/ }),

/***/ "./src/app/former-reg/former-reg.component.css":
/*!*****************************************************!*\
  !*** ./src/app/former-reg/former-reg.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 120px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/former-reg/former-reg.component.html":
/*!******************************************************!*\
  !*** ./src/app/former-reg/former-reg.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <app-header></app-header>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n        <div class=\"jumbotron text-center\">\r\n            <h3>FARMER REGISTRATION</h3>\r\n            \r\n          </div>\r\n          <br><br><br>\r\n          <div class=\"container\"> \r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n               \r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <label for=\"name\">Name:</label>\r\n                <input type=\"text\" class=\"form-control\" id = \"id1\"  #name placeholder=\"Enter Name\" name=\"Name\">\r\n                <br><br>\r\n                <button type=\"submit\" class=\"btn\" (click)=\"farmer_registeration(name.value)\">Register</button>\r\n              </div>\r\n           \r\n            </div>\r\n          </div>\r\n          \r\n          <ngx-spinner></ngx-spinner>                     \r\n        </div>\r\n        </div>\r\n      \r\n\r\n  \r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/former-reg/former-reg.component.ts":
/*!****************************************************!*\
  !*** ./src/app/former-reg/former-reg.component.ts ***!
  \****************************************************/
/*! exports provided: FormerRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormerRegComponent", function() { return FormerRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormerRegComponent = /** @class */ (function () {
    function FormerRegComponent(cs, router, spinner) {
        this.cs = cs;
        this.router = router;
        this.spinner = spinner;
    }
    FormerRegComponent.prototype.ngOnInit = function () {
    };
    FormerRegComponent.prototype.farmer_registeration = function (name) {
        var _this = this;
        this.spinner.show();
        this.cs.getAccount().then(function (address) {
            _this.cs.farmer_registeration(name, address).then(function (res) {
                _this.spinner.hide();
                if (res == 1) {
                    document.getElementById("id1").value = "";
                    alert("Successfully Registered...!");
                }
                else if (res == 0) {
                    document.getElementById("id1").value = "";
                    alert("You Rejected this transaction...!");
                }
                else if (res == 2) {
                    document.getElementById("id1").value = "";
                    alert("Transaction Failed...!");
                }
            });
        });
    };
    FormerRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-former-reg',
            template: __webpack_require__(/*! ./former-reg.component.html */ "./src/app/former-reg/former-reg.component.html"),
            styles: [__webpack_require__(/*! ./former-reg.component.css */ "./src/app/former-reg/former-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], FormerRegComponent);
    return FormerRegComponent;
}());



/***/ }),

/***/ "./src/app/former/former.component.css":
/*!*********************************************!*\
  !*** ./src/app/former/former.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablecolor{\r\n    background-color: #682382 ;\r\ncolor:white;\r\n\r\n}\r\n\r\n.btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 120px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/former/former.component.html":
/*!**********************************************!*\
  !*** ./src/app/former/former.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <app-header></app-header>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      \r\n\r\n\r\n        <div class=\"container-fluid\">\r\n                <h2><b>Farmer</b></h2>\r\n                <hr>\r\n           <br><br>\r\n            <div class=\"row\">\r\n                \r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"col-sm-8\">\r\n                        <form [formGroup]=\"angForm\" novalidate>\r\n                                <div class=\"col-sm-12\">\r\n                                     <h3><b> Add a New Crop</b></h3>\r\n                                    <br>\r\n                                    <div class=\"form-group\">\r\n                                        <label>Crop Name</label>\r\n                                        <input class=\"form-control\" formControlName=\"cname\" type=\"text\" id = \"id1\" placeholder=\"Enter the Crop Name\" #name id=\"usr\">\r\n                                    </div>\r\n                                    <div *ngIf=\"angForm.controls['cname'].invalid && (angForm.controls['cname'].dirty || angForm.controls['cname'].touched)\"  >\r\n                                        <div *ngIf=\"angForm.controls['cname'].errors.required\">\r\n                                          <p style=\"color:rgb(240, 48, 48)\"><small>Crop Name is required.</small></p>\r\n                                        </div>\r\n                          </div>\r\n                                </div>\r\n                          <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <label> Price</label>\r\n                                <input class=\"form-control\" formControlName=\"pprice\" type=\"text\" id = \"id2\" placeholder=\"Enter the Price\" #price id=\"usr\">\r\n                            </div>\r\n                            <div *ngIf=\"angForm.controls['pprice'].invalid && (angForm.controls['pprice'].dirty || angForm.controls['pprice'].touched)\" >\r\n                                <div *ngIf=\"angForm.controls['pprice'].errors.required\">\r\n                                    <p style=\"color:rgb(240, 48, 48)\"><small>Price is required.</small></p>\r\n                                </div>\r\n                          </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <label>Quantity</label>\r\n                                <input class=\"form-control\" formControlName=\"qty\" type=\"text\" id = \"id3\" placeholder=\"Enter the Quantity\" #quantity id=\"usr\">\r\n                            </div>\r\n                            <div *ngIf=\"angForm.controls['qty'].invalid && (angForm.controls['qty'].dirty || angForm.controls['qty'].touched)\"  >\r\n                                <div *ngIf=\"angForm.controls['qty'].errors.required\">\r\n                                    <p style=\"color:rgb(240, 48, 48)\"><small>Quantity is required.</small></p>\r\n                                </div>\r\n                          </div>\r\n                          </div>\r\n                          <br>&nbsp;&nbsp;\r\n                           <button type=\"button\"\r\n                    [disabled]=\"angForm.pristine || angForm.invalid\" #b2 class=\"btn\" (click)=\"farmer_add_product(name.value,price.value,quantity.value)\">Create Crop\r\n                  </button>&nbsp;\r\n              \r\n                <!-- <button type=\"button\" class=\"btn btn-danger\" #b1 (click)=\"cancel()\">Cancel</button> -->\r\n                        </form>\r\n                      </div>    \r\n                  </div>\r\n                    <div class=\"col-sm-8\">\r\n                            <h3><b>Available Crop Details</b></h3><br>\r\n                            <table class= \"table\" style=\"overflow-y:auto;display:block;height:250px;\">\r\n                                                    <!--Table head-->\r\n                                      <thead class=\"tablecolor\"  >\r\n                                          <tr class=\"text-black\">\r\n                                                <th>Crop name</th>\r\n                                              <th>Crop ID</th>                                            \r\n                                              <th>Added Date</th>\r\n                                              <th>Price Per Quantity <small>(in ether)</small></th>\r\n                                              <th>Quantity</th>\r\n                                          </tr>\r\n                                      </thead>\r\n                                      <!--Table head-->\r\n                                  \r\n                                      <!--Table body-->\r\n                                      <tbody id=\"body_bank\">\r\n                                              <tr *ngFor=\"let s of product_details\" >                                                \r\n                                                  <td>{{s.product_name}}</td>\r\n                                                  <td>{{s.product_id}}</td>\r\n                                                  <td>{{ s.add_time }}</td> \r\n                                                  <td>{{ s.product_price }}</td>\r\n                                                  <td>{{s.product_quantity}}</td>\r\n                                              </tr>\r\n                                      </tbody>\r\n                                      <!--Table body-->\r\n                                  </table> \r\n                            \r\n                     \r\n                        \r\n                    </div>\r\n                  \r\n                  <!-- </div> -->\r\n                   \r\n               \r\n                </div>\r\n              \r\n                  \r\n              \r\n              <br>\r\n              <br>\r\n      \r\n        </div>\r\n        <ngx-spinner></ngx-spinner>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/former/former.component.ts":
/*!********************************************!*\
  !*** ./src/app/former/former.component.ts ***!
  \********************************************/
/*! exports provided: FormerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormerComponent", function() { return FormerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormerComponent = /** @class */ (function () {
    function FormerComponent(cs, fb, spinner) {
        this.cs = cs;
        this.fb = fb;
        this.spinner = spinner;
        this.product_details = [];
        this.createForm();
    }
    FormerComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            cname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            // Updaters:['',Validators.required]
        });
    };
    FormerComponent.prototype.farmer_add_product = function (product_name, product_price, product_quantity) {
        var _this = this;
        console.log(product_name, product_price, product_quantity);
        this.spinner.show();
        this.cs.getAccount().then(function (address) {
            _this.cs.farmer_add_product(product_name, product_price, product_quantity, address).then(function (res) {
                _this.farmer_crop_table();
                document.getElementById("id1").value = "";
                document.getElementById("id2").value = "";
                document.getElementById("id3").value = "";
                _this.farmer_crop_table();
                _this.spinner.hide();
                if (res == 1) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Crop Added Successfully");
                }
                else if (res == 0) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                }
                else if (res == 2) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed");
                }
            });
        });
    };
    FormerComponent.prototype.farmer_crop_table = function () {
        var _this = this;
        this.product_details.length = 0;
        this.cs.getAccount().then(function (address) {
            _this.cs.farmer_id_by_address(address).then(function (farmer_id) {
                _this.cs.product_ids().then(function (produt_ids) {
                    produt_ids.forEach(function (produt_id) {
                        _this.cs.product_detail_map(produt_id).then(function (p_d) {
                            if (p_d[3] == farmer_id) {
                                var arr = {};
                                arr['product_id'] = produt_id;
                                arr['product_name'] = p_d[0];
                                arr['product_price'] = p_d[1] / 1000000000000000000;
                                arr['product_quantity'] = p_d[2];
                                var tm = new Date(p_d[4].toNumber() * 1000);
                                var time = tm.toString();
                                arr['add_time'] = time;
                                _this.product_details.push(arr);
                            }
                        });
                    });
                });
            });
        });
    };
    FormerComponent.prototype.farmer_balance = function () {
        var _this = this;
        this.farmer_bal = 0;
        this.cs.getAccount().then(function (address) {
            _this.cs.supplier_id_by_address(address).then(function (farmer_id) {
                _this.cs.farmer_balance(farmer_id).then(function (res) {
                    _this.farmer_bal = res / 1000000000000000000;
                });
            });
        });
    };
    FormerComponent.prototype.withdraw_func = function (withdrawamt) {
        var _this = this;
        this.cs.getAccount().then(function (address) {
            _this.cs.former_withdraw(withdrawamt * 1000000000000000000, address).then(function (res) {
                if (res == 1) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Crop Added Successfully");
                    _this.farmer_balance();
                }
                else if (res == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                }
                else if (res == 2) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed");
                }
            });
        });
    };
    FormerComponent.prototype.ngOnInit = function () {
        this.farmer_crop_table();
        this.farmer_balance();
    };
    FormerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-former',
            template: __webpack_require__(/*! ./former.component.html */ "./src/app/former/former.component.html"),
            styles: [__webpack_require__(/*! ./former.component.css */ "./src/app/former/former.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__["ChainServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], FormerComponent);
    return FormerComponent;
}());



/***/ }),

/***/ "./src/app/gaurd/admin.guard.ts":
/*!**************************************!*\
  !*** ./src/app/gaurd/admin.guard.ts ***!
  \**************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(cs, route) {
        var _this = this;
        this.cs = cs;
        this.route = route;
        this.cs.getAccount().then(function (address) { return _this.address = address; });
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.cs.check_admin().then(function (result) {
            if (_this.address === result) {
                // alert("admin")
                return true;
            }
            else {
                // alert('You dont have admin access')
                _this.route.navigate(["user"]);
                return false;
            }
        });
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__["ChainServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/gaurd/consumer-check.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/gaurd/consumer-check.guard.ts ***!
  \***********************************************/
/*! exports provided: ConsumerCheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerCheckGuard", function() { return ConsumerCheckGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsumerCheckGuard = /** @class */ (function () {
    function ConsumerCheckGuard(cs, route) {
        this.cs = cs;
        this.route = route;
        // this.cs.getAccount().then(address=>this.address=address)
    }
    ConsumerCheckGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.cs.check_consumer().then(function (result) {
            if (result != 0) {
                return true;
            }
            else if (result == 0) {
                alert('consumer not registered');
                _this.route.navigate(["addconsumer"]);
                return false;
            }
        });
    };
    ConsumerCheckGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__["ChainServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConsumerCheckGuard);
    return ConsumerCheckGuard;
}());



/***/ }),

/***/ "./src/app/gaurd/farmer-check.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/gaurd/farmer-check.guard.ts ***!
  \*********************************************/
/*! exports provided: FarmerCheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerCheckGuard", function() { return FarmerCheckGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FarmerCheckGuard = /** @class */ (function () {
    function FarmerCheckGuard(cs, route) {
        var _this = this;
        this.cs = cs;
        this.route = route;
        this.cs.getAccount().then(function (address) { return _this.address = address; });
    }
    FarmerCheckGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.cs.check_farmer().then(function (result) {
            if (result != 0) {
                return true;
            }
            else if (result == 0) {
                alert('Farmer not registered');
                _this.route.navigate(["addfarmer"]);
                return false;
            }
        });
    };
    FarmerCheckGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__["ChainServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FarmerCheckGuard);
    return FarmerCheckGuard;
}());



/***/ }),

/***/ "./src/app/gaurd/shop-check.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/gaurd/shop-check.guard.ts ***!
  \*******************************************/
/*! exports provided: ShopCheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCheckGuard", function() { return ShopCheckGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopCheckGuard = /** @class */ (function () {
    function ShopCheckGuard(cs, route) {
        var _this = this;
        this.cs = cs;
        this.route = route;
        this.cs.getAccount().then(function (address) { return _this.address = address; });
    }
    ShopCheckGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.cs.check_shop().then(function (result) {
            if (result != 0) {
                return true;
            }
            else if (result == 0) {
                alert('shop not registered');
                _this.route.navigate(["addshop"]);
                return false;
            }
        });
    };
    ShopCheckGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__["ChainServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShopCheckGuard);
    return ShopCheckGuard;
}());



/***/ }),

/***/ "./src/app/gaurd/supplier-check.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/gaurd/supplier-check.guard.ts ***!
  \***********************************************/
/*! exports provided: SupplierCheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierCheckGuard", function() { return SupplierCheckGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupplierCheckGuard = /** @class */ (function () {
    function SupplierCheckGuard(cs, route) {
        var _this = this;
        this.cs = cs;
        this.route = route;
        this.cs.getAccount().then(function (address) { return _this.address = address; });
    }
    SupplierCheckGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.cs.check_supplier().then(function (result) {
            if (result != 0) {
                return true;
            }
            else if (result == 0) {
                alert('Supplier Not Registered');
                _this.route.navigate(["addsupplier"]);
                return false;
            }
        });
    };
    SupplierCheckGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SupplierCheckGuard);
    return SupplierCheckGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,html{\r\n    height: 100%;\r\n}\r\n\r\n/* remove outer padding */\r\n\r\n.container-main .row{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n/*Remove rounded coners*/\r\n\r\nnav.sidebar.navbar {\r\n    border-radius: 0px;\r\n}\r\n\r\nnav.sidebar, .container-main{\r\n    transition: margin 200ms ease-out;\r\n}\r\n\r\n/* Icons */\r\n\r\n.menu-icon {\r\n    font-size: 20px;\r\n}\r\n\r\n/* Add gap to nav and right windows.*/\r\n\r\n/*.container-main{\r\n    padding: 10px 10px 0 10px;\r\n}*/\r\n\r\n/* Colors */\r\n\r\n.navbar-m2p {\r\n    background-image: linear-gradient(45deg, #2E266F 0%, #7C2289 100%);\r\n    border-color: #7C2289;\r\n    height: 2000%;\r\n}\r\n\r\n.navbar-m2p span, .navbar-m2p a {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.active .dropdown-toggle {\r\n    background-color: #245682;\r\n    border-color: #245682;\r\n}\r\n\r\n.nav .open > a {\r\n    background-color: gray;\r\n    border-color: #245682;\r\n}\r\n\r\n.nav li > a:hover, .nav .open > a:hover{\r\n    background-color: gray;\r\n}\r\n\r\n.nav li > a:focus, .nav .open > a:focus,\r\n.nav li > a:active, .nav .open > a:active {\r\n    background-color: gray;\r\n    /* color:black */\r\n}\r\n\r\n.nav .open ul > li {\r\n    background-color: black;\r\n}\r\n\r\n.navbar-m2p .navbar-nav .open .dropdown-menu>li>a {\r\n    color: #FFFFFF;\r\n    padding: 10px;\r\n}\r\n\r\n/* borda menu active */\r\n\r\n/* .navbar-m2p .navbar-nav .active a {\r\n    margin-left: -1px;\r\n    border-left: 5px solid #428bca;\r\n} */\r\n\r\n/* Hamburger */\r\n\r\n.navbar-toggle {\r\n    background-color: white;\r\n    border: 1px solid black;\r\n}\r\n\r\n.navbar-toggle .icon-bar,\r\n.navbar-toggle .icon-bar + .icon-bar {\r\n    background-color: #428bca;\r\n}\r\n\r\nnav:hover .forAnimate{\r\n    opacity: 1;\r\n}\r\n\r\n.navbar-m2p .dropdown-menu {\r\n    padding: 0px;\r\n}\r\n\r\n.nav li.separator {\r\n    padding: 10px 15px;\r\n    text-transform: uppercase;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.navbar-header\r\n{\r\n    background-color: black;\r\n}\r\n\r\n/* .....NavBar: Icon only with coloring/layout.....*/\r\n\r\n/*small/medium side display*/\r\n\r\n@media (min-width: 768px) {\r\n\r\n    /*Allow main to be next to Nav*/\r\n    .container-main{\r\n        position: absolute;\r\n        width: calc(100% - 40px); /*keeps 100% minus nav size*/\r\n        margin-left: 40px;\r\n        float: right;\r\n    }\r\n\r\n    /*lets nav bar to be showed on mouseover*/\r\n    nav.sidebar:hover + .container-main{\r\n        margin-left: 300px;\r\n    }\r\n\r\n    /*Center Brand*/\r\n    nav.sidebar.navbar.sidebar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\r\n        margin-left: 0px;\r\n    }\r\n    /*Center Brand*/\r\n    nav.sidebar .navbar-brand, nav.sidebar .navbar-header{\r\n        text-align: center;\r\n        width: 100%;\r\n        margin-left: 0px;\r\n        font-size: 25px;\r\n        line-height: 27px;\r\n    }\r\n\r\n    /*Center Icons*/\r\n    nav.sidebar a{\r\n        padding-right: 13px;\r\n    }\r\n\r\n    /* Colors/style dropdown box*/\r\n    nav.sidebar .navbar-nav .open .dropdown-menu {\r\n        position: static;\r\n        float: none;\r\n        width: auto;\r\n        margin-top: 0;\r\n        background-color: transparent;\r\n        border: 0;\r\n        box-shadow: none;\r\n    }\r\n\r\n    /*allows nav box to use 100% width*/\r\n    nav.sidebar .navbar-collapse, nav.sidebar .container-fluid{\r\n        padding: 0 1px 0 1px;\r\n    }\r\n\r\n    /*gives sidebar width/height*/\r\n    nav.sidebar{\r\n        width: 310px;\r\n        height: 100%;\r\n        position:fixed;\r\n        margin-left: -260px;\r\n        float: left;\r\n        z-index: 8000;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    /*give sidebar 100% width;*/\r\n    nav.sidebar li {\r\n        width: 100%;\r\n    }\r\n\r\n    /* Move nav to full on mouse over*/\r\n    nav.sidebar:hover{\r\n        margin-left: 0px;\r\n    }\r\n    /*for hiden things when navbar hidden*/\r\n    .forAnimate{\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n/* .....NavBar: Fully showing nav bar..... */\r\n\r\n@media (min-width: 1330px) {\r\n\r\n    /*Allow main to be next to Nav*/\r\n    .container-main{\r\n        width: calc(100% - 300px); /*keeps 100% minus nav size*/\r\n        margin-left: 300px;\r\n    }\r\n\r\n    /*Show all nav*/\r\n    nav.sidebar{\r\n        margin-left: 0px;\r\n        float: left;\r\n    }\r\n    /*Show hidden items on nav*/\r\n    nav.sidebar .forAnimate{\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.previous {\r\n    background-color:black ;\r\n    color: #f1f1f1;\r\n    border-color: black;\r\n}\r\n\r\n.round {\r\n    border-radius: 50%;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-m2p sidebar\" role=\"navigation\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <!-- <a class=\"navbar-brand\" href=\"#\">\r\n               <font size=\"5\"style=\"color: #6aa3d5\">SupplyChain</font><font size=\"4\">Management</font>\r\n            </a> -->\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\r\n                <!-- <button routerLink=\"/home\" class=\"previous\">&laquo; Home</button> -->\r\n                <a routerLink=\"/home\"><i class=\"fa fa-home\" style=\"font-size:30px\" aria-hidden=\"true\"></i></a>\r\n            <ul class=\"nav navbar-nav\"><br>\r\n                <li class=\"separator\">Account Details</li><br>\r\n                <a><br><br>Account:</a><input type=\"text\" class=\"form-control\" value={{address}} placeholder=\"Address\"readonly/><br>\r\n                 <a>Balance in Eth:</a><input type=\"text\" class=\"form-control\" value={{balance}} placeholder=\"Balance\"readonly/><br>\r\n            <!-- <li class=\"separator\">Account Details</li><br>\r\n            <a><br><br>Account:</a><input type=\"text\" class=\"form-control\" value={{address}} placeholder=\"Address\"readonly/><br>\r\n             <a>Balance in Eth:</a><input type=\"text\" class=\"form-control\" value={{balance}} placeholder=\"Balance\"readonly/><br> -->\r\n             <!-- <li class=\"separator\">Content</li><br> -->\r\n               <!-- <li><a href=\"#\"  routerLink=\"/Former\">Farmer</a></li> -->\r\n               <li class=\"\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                   \r\n                    Farmer <span class=\"caret\"></span>\r\n                </a>\r\n                <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                        <li><a href=\"#\" routerLink=\"/Former\" >Add Crop</a></li>\r\n                        <li><a href=\"#\" routerLink=\"/Farmerwithdraw\" >Withdraw</a></li>                       \r\n                </ul>\r\n            </li>\r\n            <li class=\"\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                   \r\n                    Supplier <span class=\"caret\"></span>\r\n                </a>\r\n                <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                        <li><a href=\"#\" routerLink=\"/Supplier\" >Purchase Crop</a></li>\r\n                        <li><a href=\"#\" routerLink=\"/Supplierwithdraw\" >Withdraw</a></li>                       \r\n                </ul>\r\n            </li>\r\n            <li class=\"\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                   \r\n                        Distributor <span class=\"caret\"></span>\r\n                </a>\r\n                <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                        <li><a href=\"#\" routerLink=\"/Shop\" >Purchase Crop</a></li>\r\n                        <li><a href=\"#\" routerLink=\"/Shopwithdraw\" >Withdraw</a></li>                       \r\n                </ul>\r\n            </li>\r\n              <!-- <li><a href=\"#\"  routerLink=\"/Supplier\">Distributor</a></li>\r\n              <li><a href=\"#\"  routerLink=\"/Shop\">Retailer</a></li> -->\r\n              <li><a href=\"#\" routerLink=\"/Customer\">Retailer</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <ngx-spinner></ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cs) {
        var _this = this;
        this.cs = cs;
        this.cs.getAccount().then(function (add) {
            _this.address = add;
            _this.cs.getUserBalance(add).then(function (balance) { return _this.balance = balance; });
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,html{\r\n    height: 100%;\r\n}\r\n\r\n/* remove outer padding */\r\n\r\n.container-main .row{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n/*Remove rounded coners*/\r\n\r\nnav.sidebar.navbar {\r\n    border-radius: 0px;\r\n}\r\n\r\nnav.sidebar, .container-main{\r\n    transition: margin 200ms ease-out;\r\n}\r\n\r\n/* Icons */\r\n\r\n.menu-icon {\r\n    font-size: 20px;\r\n}\r\n\r\n/* Add gap to nav and right windows.*/\r\n\r\n/*.container-main{\r\n    padding: 10px 10px 0 10px;\r\n}*/\r\n\r\n/* Colors */\r\n\r\n.navbar-m2p {\r\n    background-image: linear-gradient(45deg, #2E266F 0%, #7C2289 100%);\r\n    /* background-color: #2E266f; */\r\n    border-color: #7C2289;\r\n    height: 2000%;\r\n}\r\n\r\n.navbar-m2p span, .navbar-m2p a {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.active .dropdown-toggle {\r\n    background-color: #245682;\r\n    border-color: #245682;\r\n}\r\n\r\n.nav .open > a {\r\n    background-color: gray;\r\n    border-color: #245682;\r\n}\r\n\r\n.nav li > a:hover, .nav .open > a:hover{\r\n    background-color: gray;\r\n}\r\n\r\n.nav li > a:focus, .nav .open > a:focus,\r\n.nav li > a:active, .nav .open > a:active {\r\n    background-color: gray;\r\n    /* color:black */\r\n}\r\n\r\n.nav .open ul > li {\r\n    background-color: black\r\n}\r\n\r\n.navbar-m2p .navbar-nav .open .dropdown-menu>li>a {\r\n    color: #FFFFFF;\r\n    padding: 10px;\r\n}\r\n\r\n/* borda menu active */\r\n\r\n/* .navbar-m2p .navbar-nav .active a {\r\n    margin-left: -1px;\r\n    border-left: 5px solid #428bca;\r\n} */\r\n\r\n/* Hamburger */\r\n\r\n.navbar-toggle {\r\n    background-color: white;\r\n    border: 1px solid black;\r\n}\r\n\r\n.navbar-toggle .icon-bar,\r\n.navbar-toggle .icon-bar + .icon-bar {\r\n    background-color: #428bca;\r\n}\r\n\r\nnav:hover .forAnimate{\r\n    opacity: 1;\r\n}\r\n\r\n.navbar-m2p .dropdown-menu {\r\n    padding: 0px;\r\n}\r\n\r\n.nav li.separator {\r\n    padding: 10px 15px;\r\n    text-transform: uppercase;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.navbar-header\r\n{\r\n    background-color: black;\r\n}\r\n\r\n/* .....NavBar: Icon only with coloring/layout.....*/\r\n\r\n/*small/medium side display*/\r\n\r\n@media (min-width: 768px) {\r\n\r\n    /*Allow main to be next to Nav*/\r\n    .container-main{\r\n        position: absolute;\r\n        width: calc(100% - 40px); /*keeps 100% minus nav size*/\r\n        margin-left: 40px;\r\n        float: right;\r\n    }\r\n\r\n    /*lets nav bar to be showed on mouseover*/\r\n    nav.sidebar:hover + .container-main{\r\n        margin-left: 300px;\r\n    }\r\n\r\n    /*Center Brand*/\r\n    nav.sidebar.navbar.sidebar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\r\n        margin-left: 0px;\r\n    }\r\n    /*Center Brand*/\r\n    nav.sidebar .navbar-brand, nav.sidebar .navbar-header{\r\n        text-align: center;\r\n        width: 100%;\r\n        margin-left: 0px;\r\n        font-size: 25px;\r\n        line-height: 27px;\r\n    }\r\n\r\n    /*Center Icons*/\r\n    nav.sidebar a{\r\n        padding-right: 13px;\r\n    }\r\n\r\n    /* Colors/style dropdown box*/\r\n    nav.sidebar .navbar-nav .open .dropdown-menu {\r\n        position: static;\r\n        float: none;\r\n        width: auto;\r\n        margin-top: 0;\r\n        background-color: transparent;\r\n        border: 0;\r\n        box-shadow: none;\r\n    }\r\n\r\n    /*allows nav box to use 100% width*/\r\n    nav.sidebar .navbar-collapse, nav.sidebar .container-fluid{\r\n        padding: 0 1px 0 1px;\r\n    }\r\n\r\n    /*gives sidebar width/height*/\r\n    nav.sidebar{\r\n        width: 310px;\r\n        height: 100%;\r\n        position:fixed;\r\n        margin-left: -260px;\r\n        float: left;\r\n        z-index: 8000;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    /*give sidebar 100% width;*/\r\n    nav.sidebar li {\r\n        width: 300px;\r\n    }\r\n\r\n    /* Move nav to full on mouse over*/\r\n    nav.sidebar:hover{\r\n        margin-left: 0px;\r\n    }\r\n    /*for hiden things when navbar hidden*/\r\n    .forAnimate{\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n/* .....NavBar: Fully showing nav bar..... */\r\n\r\n@media (min-width: 1330px) {\r\n\r\n    /*Allow main to be next to Nav*/\r\n    .container-main{\r\n        width: calc(100% - 300px); /*keeps 100% minus nav size*/\r\n        margin-left: 300px;\r\n    }\r\n\r\n    /*Show all nav*/\r\n    nav.sidebar{\r\n        margin-left: 0px;\r\n        float: left;\r\n    }\r\n    /*Show hidden items on nav*/\r\n    nav.sidebar .forAnimate{\r\n        opacity: 1;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <html>\n<body style=\"background-color: blueviolet\">\n    <nav class=\"navbar navbar\">\n      \n        <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\"  routerLink=\"/dashboard\">ADMIN</a></li>\n            <li><a href=\"#\"  routerLink=\"/user\">USER</a></li>    \n        </ul>\n      \n    </nav>\n      \n    <div class=\"container\">\n      <p></p>\n    </div>\n\n\n\n</body>  \n</html> -->\n\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <nav class=\"navbar navbar-m2p sidebar\" role=\"navigation\">\n            <div class=\"container-fluid\">\n                <!-- Brand and toggle get grouped for better mobile display -->\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <!-- <a class=\"navbar-brand\" href=\"#\">\n                       <font size=\"5\"style=\"color: #6aa3d5\">SupplyChain</font><font size=\"4\">Management</font>\n                    </a> -->\n                </div>\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\n                       \n                    <ul class=\"nav navbar-nav\"><br>\n                        <li class=\"separator\">Account Details</li><br>\n                        <a><br><br>Account:</a><input type=\"text\" class=\"form-control\" value={{address}} placeholder=\"Address\"readonly/><br>\n                         <a>Balance in Eth:</a><input type=\"text\" class=\"form-control\" value={{balance}} placeholder=\"Balance\"readonly/><br>\n                         <li class=\"\">\n                                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                   \n                                    ADMIN <span class=\"caret\"></span>\n                                </a>\n                                <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\n                                        <li><a href=\"#\" routerLink=\"/dashboard\" >Overview</a></li>\n                                        <li><a href=\"#\" routerLink=\"/persons\" >Overall Details</a></li>\n                                        <li><a href=\"#\" routerLink=\"/suppliercrops\" >Supplier Details</a></li>\n                                        <li><a href=\"#\" routerLink=\"/shopcrops\" >Distributor Details</a></li>\n                                        <li><a href=\"#\" routerLink=\"/consumercrops\" >Retailer Details</a></li>\n                                </ul>\n                            </li>\n                   \n                         <!-- <li class=\"separator\">Account Details</li><br>\n                    <a><br><br>Account:</a><input type=\"text\" class=\"form-control\" value={{address}} placeholder=\"Address\"readonly/><br>\n                     <a>Balance in Eth:</a><input type=\"text\" class=\"form-control\" value={{balance}} placeholder=\"Balance\"readonly/><br> -->\n                     <!-- <li class=\"separator\">Content</li><br> -->\n                       <!-- <li><a href=\"#\"  routerLink=\"/dashboard\">ADMIN</a></li>\n                       <li><a href=\"#\"  routerLink=\"/persons\">OVERALL DETAILS</a></li> -->\n                      <li><a href=\"#\"  routerLink=\"/user\">USER</a></li>\n                    \n                    </ul>\n                </div>\n            </div>\n        </nav>\n            <ngx-spinner></ngx-spinner>\n    </div>\n    <div class=\"col-sm-9\">\n      \n        \n    \n\n\n    </div>\n  </div>\n  \n   \n\n  \n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(cs) {
        var _this = this;
        this.cs = cs;
        this.cs.getAccount().then(function (add) {
            _this.address = add;
            _this.cs.getUserBalance(add).then(function (balance) { return _this.balance = balance; });
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.css":
/*!*************************************************!*\
  !*** ./src/app/overview/overview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablecolor{\r\n    background-color: #682382 ;\r\n    color:white;\r\n    \r\n    }\r\n    .btn {\r\n        background-color: #682382 ;\r\n        border-radius: 8px;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n        color: #fff;\r\n        font-family: inherit;\r\n        font-weight: bold;\r\n        /* margin: 1 20px; */\r\n        /* font-family: Helvetica-Bold; */\r\n        width: 100px;\r\n        height: 30px;\r\n        /* padding: 15px; */\r\n        font-size: 15px;\r\n    }"

/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-sm-3\">\n            <app-home></app-home>\n        </div>\n        <div class=\"col-sm-9\">\n           \n           \n                \n                <div class=\"container-fluid\">\n                        <h2><b>Overview</b></h2>\n                        <hr><br><br><br> \n                    <div class=\"row\">\n                        <div class=\"col-sm-2\">\n                            <h4><b>View Crop details</b></h4><br>\n                                <label for=\"name\">Enter Crop Id:</label>\n                                <input type=\"text\" class=\"form-control\"  #cid placeholder=\"Enter Crop id\" name=\"Name\">\n                                <br><br>\n                                <button type=\"submit\" class=\"btn\" (click)=\"display(cid.value)\">search</button>\n                                <br> <br><h4>Total Crops:&nbsp;{{Total_products}}</h4>\n                        </div>\n                        <div class=\"col-sm-10\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-2\"></div>\n                                <div class=\"col-sm-10\">\n                                        <h4><b>Crop Details</b></h4><br>\n                    \n                                        <table class=\"table table-striped\" style=\"overflow-y:auto;display:block;height:250px;\">\n                                            <thead class=\"tablecolor\">\n                                              <tr>\n                                                <th>Crop Name</th>\n                                                <th>Crop ID</th>                                                \n                                                <th>Crop Price</th>\n                                                <th>Available Crop Quantity</th>\n                                                <th>Farmer ID</th>\n                                                <th>Farmer Name</th>\n                                                <th>Crop Added On</th>                           \n                                              </tr>\n                                            </thead>\n                                            <tbody id=\"body_bank\">\n                                                <tr *ngFor=\"let p of product_details\" >\n                                                    <td>{{ p.productname }}</td> \n                                                    <td>{{ p.productid }}</td> \n                                                     <td>{{ p.productprice }}</td>\n                                                    <td>{{ p.productquantity }}</td> \n                                                    <td>{{ p.farmerid }}</td>\n                                                    <td>{{ p.farmername }}</td> \n                                                    <td>{{ p.date }}</td>\n                                                </tr>\n                                        </tbody>\n                                          </table>\n        \n                                </div>\n                            </div>\n                               \n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                                <h4>Crop Holder-<b>Supplier</b></h4>\n                                <table class= \"table\" style=\"overflow-y:auto;display:block;height:250px;\">                                                                                                              \n                                          <thead class=\"tablecolor\"  >\n                                              <tr class=\"text-black\">\n                                                  <th>Supplier Id</th>\n                                                  <th>Supplier Name</th>\n                                                  <th>Supplier Address</th>\n                                                  <th>Crop Price</th>\n                                                  <th>Crop Quantity</th>\n                                                  <th>Farmer Id</th>\n                                                  <th>Farmer Name</th>\n                                              </tr>\n                                          </thead>\n                                         \n                                          <tbody id=\"body_bank\">                                       \n                                                  <tr *ngFor=\"let i of suppliers_list\" >\n                                                      <td>{{i.supplier_id}}</td>\n                                                      <td>{{i.supplier_name}}</td>\n                                                      <td>{{i.supplier_address }}</td> \n                                                      <td>{{i.crop_price }}</td>\n                                                      <td>{{i.crop_quantity}}</td>\n                                                      <td>{{i.seller_id}}</td>\n                                                      <td>{{i.seller_name}}</td>\n                                                  </tr>\n                                          </tbody>\n                                          \n                                      </table> \n\n                        </div>\n                      \n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                                <h4>Crop Holder-<b>Distributor</b></h4>\n                                <table class= \"table\" style=\"overflow-y:auto;display:block;height:250px;\">                                                                             \n                          <thead class=\"tablecolor\"  >\n                              <tr class=\"text-black\">\n                                  <th>Distributor Id</th>\n                                  <th>Distributor Name</th>\n                                  <th>Distributor Address</th>\n                                  <th>Crop Price</th>\n                                  <th>Crop Quantity</th>\n                                  <th>Supplier Id</th>\n                                  <th>Supplier Name</th>\n                              </tr>\n                          </thead>\n                        \n                          <tbody id=\"body_bank\">\n                                  <tr *ngFor=\"let i of shops_list\" >\n                                      <td>{{i.shop_id}}</td>\n                                      <td>{{i.shop_name}}</td>\n                                      <td>{{i.shop_address }}</td> \n                                      <td>{{i.crop_price }}</td>\n                                      <td>{{i.crop_quantity}}</td>\n                                      <td>{{i.seller_id}}</td>\n                                      <td>{{i.seller_name}}</td>\n                                  </tr>\n                          </tbody>\n                        \n                      </table> \n                        </div>\n                    </div>\n                    <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                    <h4>Crop Holder-<b>Retailer</b></h4>\n                                    <table class= \"table\" style=\"overflow-y:auto;display:block;height:250px;\">                     \n                                <thead class=\"tablecolor\"  >\n                                  <tr class=\"text-black\">\n                                      <th>Retailer Id</th>\n                                      <th>Retailer Name</th>\n                                      <th>Retailer Address</th>\n                                      <th>Crop Price</th>\n                                      <th>Crop Quantity</th>\n                                      <th>Distributor Id</th>\n                                      <th>Distributor Name</th>\n                                  </tr>\n                                </thead>\n                            \n                                <tbody id=\"body_bank\">\n                                      <tr *ngFor=\"let i of consumers_list\" >\n                                          <td>{{i.consumer_id}}</td>\n                                          <td>{{i.consumer_name}}</td>\n                                          <td>{{i.consumer_address }}</td> \n                                          <td>{{i.crop_price }}</td>\n                                          <td>{{i.crop_quantity}}</td>\n                                          <td>{{i.shop_id}}</td>\n                                          <td>{{i.shop_name}}</td>\n                                      </tr>\n                                </tbody>\n                            \n                                </table> \n                            </div>\n                        </div>                      \n                </div>\n                <ngx-spinner></ngx-spinner>\n\n              \n\n        </div>\n      </div>\n      \n\n"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(cs) {
        var _this = this;
        this.cs = cs;
        this.dashboard = [];
        this.suppliers_list = [];
        this.shops_list = [];
        this.consumers_list = [];
        this.product_details = [];
        cs.product_ids().then(function (result) { return _this.Total_products = result.length; });
    }
    OverviewComponent.prototype.display = function (text_id) {
        var _this = this;
        this.suppliers_list.length = 0;
        this.shops_list.length = 0;
        this.consumers_list.length = 0;
        this.cs.supplier_ids().then(function (s_ids) {
            s_ids.forEach(function (id) {
                _this.cs.product_detail_map_supplier(text_id, id).then(function (result) {
                    if (result[1].toNumber() != 0) {
                        _this.cs.farmer_name(result[2]).then(function (farmer_name) {
                            _this.cs.supplier_by_id(id).then(function (address) {
                                _this.cs.supplier_name(id).then(function (name) {
                                    var obj1 = {};
                                    obj1['supplier_id'] = id;
                                    obj1['supplier_name'] = name;
                                    obj1['supplier_address'] = address;
                                    obj1['crop_price'] = result[0] / 1000000000000000000;
                                    obj1['crop_quantity'] = result[1];
                                    obj1['seller_id'] = result[2];
                                    obj1['seller_name'] = farmer_name;
                                    ;
                                    _this.suppliers_list.push(obj1);
                                });
                            });
                        });
                    }
                    else {
                        // alert('NO Holders')
                    }
                });
            });
        });
        this.cs.shop_ids().then(function (shp_ids) {
            shp_ids.forEach(function (id) {
                _this.cs.product_detail_map_shop(text_id, id).then(function (result) {
                    if (result[1].toNumber() != 0) {
                        _this.cs.supplier_name(result[2]).then(function (supplier_name) {
                            _this.cs.shop_by_id(id).then(function (address) {
                                _this.cs.shop_name(id).then(function (name) {
                                    var obj2 = {};
                                    obj2['shop_id'] = id;
                                    obj2['shop_name'] = name;
                                    obj2['shop_address'] = address;
                                    obj2['crop_price'] = result[0] / 1000000000000000000;
                                    obj2['crop_quantity'] = result[1];
                                    obj2['seller_id'] = result[2];
                                    obj2['seller_name'] = supplier_name;
                                    _this.shops_list.push(obj2);
                                });
                            });
                        });
                    }
                });
            });
        });
        this.cs.consumer_ids().then(function (cons_ids) {
            cons_ids.forEach(function (id) {
                _this.cs.order_id(id).then(function (order_ids) {
                    order_ids.forEach(function (or_id) {
                        _this.cs.consumer_map(id, or_id).then(function (result) {
                            if (result[2] == text_id) {
                                _this.cs.shop_name(result[2]).then(function (shop_name) {
                                    _this.cs.consumer_by_id(id).then(function (address) {
                                        _this.cs.consumer_name(id).then(function (name) {
                                            var obj3 = {};
                                            obj3['consumer_id'] = id;
                                            obj3['consumer_name'] = name;
                                            obj3['consumer_address'] = address;
                                            obj3['crop_price'] = result[3] / 1000000000000000000;
                                            obj3['crop_quantity'] = result[1];
                                            obj3['shop_id'] = result[2];
                                            obj3['shop_name'] = shop_name;
                                            //  alert(name+''+address+''+result[0]+''+result[1]+''+result[2])
                                            console.log(obj3);
                                            _this.consumers_list.push(obj3);
                                        });
                                    });
                                });
                            }
                        });
                    });
                });
            });
        });
    };
    OverviewComponent.prototype.available_product_details = function () {
        var _this = this;
        console.log("in");
        this.product_details.length = 0;
        this.cs.product_ids().then(function (productid) {
            productid.forEach(function (productids) {
                _this.cs.product_detail_map(productids).then(function (res) {
                    _this.cs.farmer_name(res[3]).then(function (farmername) {
                        var obj = {};
                        obj['productid'] = productids;
                        obj['productname'] = res[0];
                        obj['productprice'] = res[1] / 1000000000000000000;
                        obj['productquantity'] = res[2];
                        obj['farmerid'] = res[3];
                        obj['farmername'] = farmername;
                        var tm = new Date(res[4].toNumber() * 1000);
                        var time = tm.toString();
                        obj['date'] = time;
                        _this.product_details.push(obj);
                    });
                });
            });
        });
    };
    OverviewComponent.prototype.ngOnInit = function () {
        this.available_product_details();
    };
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/persons/persons.component.css":
/*!***********************************************!*\
  !*** ./src/app/persons/persons.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablecolor{\r\n    background-color: #682382 ;\r\n    color:white;\r\n    \r\n    }"

/***/ }),

/***/ "./src/app/persons/persons.component.html":
/*!************************************************!*\
  !*** ./src/app/persons/persons.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <app-home></app-home>\n    </div>\n    <div class=\"col-sm-9\">\n      \n        <div class=\"container-fluid\">\n            <h2><b>Overall Details</b></h2>\n            <hr><br><br><br><br>\n            <div class=\"row\">\n              <div class=\"col-sm-4\">\n                  <h4><b>Available Farmer Details</b></h4><br>\n            \n                  <table class=\"table table-striped\" style=\"overflow-y:auto;display:block;height:250px;\">\n                      <thead class=\"tablecolor\">\n                        <tr>\n                          <th>Farmer ID</th>\n                          <th>Farmer Name</th>\n                        </tr>\n                      </thead>\n                      <tbody id=\"body_bank\">\n                          <tr *ngFor=\"let f of farmer_names\" >\n                              <td>{{ f.farmerid }}</td> \n                              <td>{{ f.farmername }}</td>\n                          </tr>\n                  </tbody>\n                    </table>\n              </div>\n              <div class=\"col-sm-4\">\n                  <h4><b>Available Supplier Details</b></h4><br>\n            \n                  <table class=\"table table-striped\" style=\"overflow-y:auto;display:block;height:250px;\">\n                      <thead class=\"tablecolor\">\n                        <tr>\n                          <th>Supplier ID</th>\n                          <th>Supplier Name</th>\n                        </tr>\n                      </thead>\n                      <tbody id=\"body_bank\">\n                          <tr *ngFor=\"let s of supplier_names\" >\n                              <td>{{ s.supplierid }}</td> \n                              <td>{{ s.suppliername }}</td>\n                          </tr>\n                  </tbody>\n                    </table>\n              </div>\n              <div class=\"col-sm-4\">\n                    <h4><b>Available Distributor Details</b></h4><br>\n            \n                    <table class=\"table table-striped\" style=\"overflow-y:auto;display:block;height:250px;\">\n                        <thead class=\"tablecolor\">\n                          <tr>\n                            <th>Distributor ID</th>\n                            <th>Distributor Name</th>\n                          </tr>\n                        </thead>\n                        <tbody id=\"body_bank\">\n                            <tr *ngFor=\"let sh of shop_names\" >\n                                <td>{{ sh.shopid }}</td> \n                                <td>{{ sh.shopname }}</td>\n                            </tr>\n                    </tbody>\n                      </table>\n                </div>\n               \n            </div>\n          <br><br><br>\n            <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                            <h4><b>Available Retailer Details</b></h4><br>\n                    \n                            <table class=\"table table-striped\" style=\"overflow-y:auto;display:block;height:250px;\">\n                                <thead class=\"tablecolor\">\n                                  <tr>\n                                    <th>Retailer ID</th>\n                                    <th>Retailer Name</th>\n                                  </tr>\n                                </thead>\n                                <tbody id=\"body_bank\">\n                                    <tr *ngFor=\"let c of consumer_names\" >\n                                        <td>{{ c.customerid }}</td> \n                                        <td>{{ c.customername }}</td>\n                                    </tr>\n                            </tbody>\n                              </table>\n                        </div>\n                        <div class=\"col-sm-8\">\n                                <h4><b>Available Crop Details</b></h4><br>\n                    \n                                <table class=\"table table-striped\" style=\"overflow-y:auto;display:block;height:250px;\">\n                                    <thead class=\"tablecolor\">\n                                      <tr>\n                                        <th>Crop ID</th>\n                                        <th>Crop Name</th>\n                                        <th>Crop Price</th>\n                                        <th>Crop Quantity</th>\n                                        <th>Farmer ID</th>\n                                        <th>Farmer Name</th>\n                                        <th>Crop Added On</th>                           \n                                      </tr>\n                                    </thead>\n                                    <tbody id=\"body_bank\">\n                                        <tr *ngFor=\"let p of product_details\" >\n                                            <td>{{ p.productid }}</td> \n                                            <td>{{ p.productname }}</td>  \n                                            <td>{{ p.productprice }}</td>\n                                            <td>{{ p.productquantity }}</td> \n                                            <td>{{ p.farmerid }}</td>\n                                            <td>{{ p.farmername }}</td> \n                                            <td>{{ p.date }}</td>\n                                        </tr>\n                                </tbody>\n                                  </table>\n                        </div>\n              </div>\n          \n          </div>\n\n\n    </div>\n  </div>\n  \n\n"

/***/ }),

/***/ "./src/app/persons/persons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/persons/persons.component.ts ***!
  \**********************************************/
/*! exports provided: PersonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsComponent", function() { return PersonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonsComponent = /** @class */ (function () {
    function PersonsComponent(cs) {
        this.cs = cs;
        this.farmer_names = [];
        this.supplier_names = [];
        this.shop_names = [];
        this.consumer_names = [];
        this.product_details = [];
    }
    PersonsComponent.prototype.available_farmers_table = function () {
        var _this = this;
        this.farmer_names.length = 0;
        this.cs.farmer_ids().then(function (farmer_ids) {
            farmer_ids.forEach(function (farmer_id) {
                _this.cs.farmer_name(farmer_id).then(function (farmer_name) {
                    var obj = {};
                    obj['farmerid'] = farmer_id;
                    obj['farmername'] = farmer_name;
                    _this.farmer_names.push(obj);
                });
            });
        });
    };
    PersonsComponent.prototype.available_suppliers_table = function () {
        var _this = this;
        this.supplier_names.length = 0;
        this.cs.supplier_ids().then(function (supplier_ids) {
            supplier_ids.forEach(function (supplier_id) {
                _this.cs.supplier_name(supplier_id).then(function (supplier_name) {
                    var obj = {};
                    obj['supplierid'] = supplier_id;
                    obj['suppliername'] = supplier_name;
                    _this.supplier_names.push(obj);
                });
            });
        });
    };
    PersonsComponent.prototype.available_shop_table = function () {
        var _this = this;
        this.shop_names.length = 0;
        this.cs.shop_ids().then(function (shop_ids) {
            shop_ids.forEach(function (shop_id) {
                _this.cs.farmer_name(shop_id).then(function (shop_name) {
                    var obj = {};
                    obj['shopid'] = shop_id;
                    obj['shopname'] = shop_name;
                    _this.shop_names.push(obj);
                });
            });
        });
    };
    PersonsComponent.prototype.available_customer_table = function () {
        var _this = this;
        this.consumer_names.length = 0;
        this.cs.consumer_ids().then(function (customer_ids) {
            customer_ids.forEach(function (customer_id) {
                _this.cs.consumer_name(customer_id).then(function (customer_name) {
                    var obj = {};
                    obj['customerid'] = customer_id;
                    obj['customername'] = customer_name;
                    _this.consumer_names.push(obj);
                });
            });
        });
    };
    PersonsComponent.prototype.available_product_details = function () {
        var _this = this;
        console.log("in");
        this.product_details.length = 0;
        this.cs.product_ids().then(function (productid) {
            productid.forEach(function (productids) {
                _this.cs.product_detail_map(productids).then(function (res) {
                    _this.cs.farmer_name(res[3]).then(function (farmername) {
                        if (res[2] != 0) {
                            var obj = {};
                            obj['productid'] = productids;
                            obj['productname'] = res[0];
                            obj['productprice'] = res[1] / 1000000000000000000;
                            obj['productquantity'] = res[2];
                            obj['farmerid'] = res[3];
                            obj['farmername'] = farmername;
                            var tm = new Date(res[4].toNumber() * 1000);
                            var time = tm.toString();
                            obj['date'] = time;
                            _this.product_details.push(obj);
                        }
                    });
                });
            });
        });
    };
    PersonsComponent.prototype.ngOnInit = function () {
        this.available_farmers_table();
        this.available_suppliers_table();
        this.available_shop_table();
        this.available_customer_table();
        this.available_product_details();
    };
    PersonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-persons',
            template: __webpack_require__(/*! ./persons.component.html */ "./src/app/persons/persons.component.html"),
            styles: [__webpack_require__(/*! ./persons.component.css */ "./src/app/persons/persons.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"]])
    ], PersonsComponent);
    return PersonsComponent;
}());



/***/ }),

/***/ "./src/app/service/chain-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/chain-service.service.ts ***!
  \**************************************************/
/*! exports provided: ChainServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainServiceService", function() { return ChainServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var contractAbi = __webpack_require__(/*! ./contract.json */ "./src/app/service/contract.json");
var ChainServiceService = /** @class */ (function () {
    function ChainServiceService() {
        this.account = null;
        this.acc = null;
        this.supply_contract_address = "0xb3d66bee3476ef150f73390807b78ebd6f294c5b";
        if (typeof window.web3 !== 'undefined') {
            this._web3 = new web3__WEBPACK_IMPORTED_MODULE_1__(window.web3.currentProvider);
            this.supply_contract = this._web3.eth.contract(contractAbi).at(this.supply_contract_address);
        }
    }
    ChainServiceService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.account == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    console.log(accs);
                                    if (err != null) {
                                        // this.router.navigate(['metamask']);
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        // this.router.navigate(['metamask']);
                                        return;
                                    }
                                    resolve(accs[0]);
                                });
                            })];
                    case 1:
                        _a.account = (_b.sent());
                        this._web3.eth.defaultAccount = this.account;
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this.account)];
                }
            });
        });
    };
    ChainServiceService.prototype.getUserBalance = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _web3 = _this._web3;
                        _this._web3.eth.getBalance(account, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            resolve(_web3.fromWei(result));
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.hash = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accountInterval = setInterval(function () {
                            meta._web3.eth.getTransactionReceipt(a, function (err, result) {
                                if (err != null) {
                                    reject(err);
                                }
                                if (result !== null) {
                                    clearInterval(accountInterval);
                                    if (result.status == 0x1) {
                                        resolve(true);
                                    }
                                    else {
                                        resolve(false);
                                    }
                                }
                            });
                        }, 100);
                    })];
            });
        });
    };
    ChainServiceService.prototype.check_admin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.admin.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.product_detail_map = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.product_detail_map.call(id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.produt_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.produt_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.farmer_id_by_address = function (farmer_address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.farmer_id_by_address.call(farmer_address, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result.toNumber());
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.farmer_name = function (farmer_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.farmer_name.call(farmer_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.farmer_by_id = function (farmer_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.farmer_by_id.call(farmer_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.farmer_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.farmer_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.farmer_registeration = function (farmer_name, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.farmer_registeration.sendTransaction(farmer_name, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.farmer_add_product = function (product_name, product_price, product_quantity, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.farmer_add_product.sendTransaction(product_name, instance._web3.toWei(product_price, 'ether'), product_quantity, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.farmer_balance = function (farmer_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.farmer_balance.call(farmer_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.former_withdraw = function (ether, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.farmer_widthdraw.sendTransaction(ether, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.product_detail_map_supplier = function (id1, id2) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.product_detail_map_supplier.call(id1, id2, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.supplier_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.supplier_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.supplier_id_by_address = function (supplier_address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.supplier_id_by_address.call(supplier_address, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.supplier_by_id = function (supplier_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.supplier_by_id.call(supplier_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.supplier_registeration = function (supplier_name, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.supplier_registeration.sendTransaction(supplier_name, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.supplier_name = function (supplier_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.supplier_name.call(supplier_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    // product_id,product_quantity,new_price*1000000000000000000,address,(p_d[1].toNumber() *product_quantity)
    ChainServiceService.prototype.supplier_buy_product = function (product_id, product_quantity, new_price, address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.supplier_buy_product.sendTransaction(product_id, product_quantity, new_price, { from: address, value: amount, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.supplier_balance = function (supplier_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.supplier_balance.call(supplier_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.product_detail_map_shop = function (id1, id2) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.product_detail_map_shop.call(id1, id2, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.shop_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.shop_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.shop_balance = function (shop_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.shop_balance.call(shop_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.supplier_widthdraw = function (amount, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.supplier_widthdraw.sendTransaction(amount, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.shop_widthdraw = function (amount, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.shop_widthdraw.sendTransaction(amount, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.product_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.produt_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.shop_id_by_address = function (supplier_address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.shop_id_by_address.call(supplier_address, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.shop_by_id = function (supplier_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.shop_by_id.call(supplier_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.shop_name = function (shop_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.shop_name.call(shop_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.shop_registeration = function (shop_name, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.shop_registeration.sendTransaction(shop_name, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.shop_buy_product = function (product_id, product_quantity, new_price, su_i, address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.shop_buy_product.sendTransaction(product_id, product_quantity, instance._web3.toWei(new_price, 'ether'), su_i, { from: address, value: amount, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.consumer_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.consumer_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.check_farmer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                // let account_adddress:string;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.getAccount().then(function (account_adddress) {
                            instance.supply_contract.farmer_id_by_address.call(account_adddress, function (err, result) {
                                if (err != null) {
                                    reject(err);
                                }
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.check_supplier = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                // let account_adddress:string;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.getAccount().then(function (account_adddress) {
                            instance.supply_contract.supplier_id_by_address.call(account_adddress, function (err, result) {
                                if (err != null) {
                                    reject(err);
                                }
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.check_shop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                // let account_adddress:string;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.getAccount().then(function (account_adddress) {
                            instance.supply_contract.shop_id_by_address.call(account_adddress, function (err, result) {
                                if (err != null) {
                                    reject(err);
                                }
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.check_consumer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                // let account_adddress:string;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.getAccount().then(function (account_adddress) {
                            instance.supply_contract.consumer_id_by_address.call(account_adddress, function (err, result) {
                                if (err != null) {
                                    reject(err);
                                }
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.consumer_id_by_address = function (consumer_adderss) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.consumer_id_by_address.call(consumer_adderss, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.consumer_by_id = function (consumer_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.consumer_by_id.call(consumer_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.order_id = function (consumer_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.order_id.call(consumer_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.consumer_map = function (consumer_id, order_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.consumer_map.call(consumer_id, order_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.consumer_name = function (consumer_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.consumer_name.call(consumer_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.consumer_registeration = function (name, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.consumer_registeration.sendTransaction(name, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService.prototype.consumer_buy_product = function (product_id, product_quantity, shop_id, address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.supply_contract.consumer_buy_product.sendTransaction(product_id, product_quantity, shop_id, { from: address, value: instance._web3.toWei(amount, 'ether'), gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    ChainServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ChainServiceService);
    return ChainServiceService;
}());



/***/ }),

/***/ "./src/app/service/contract.json":
/*!***************************************!*\
  !*** ./src/app/service/contract.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, default */
/***/ (function(module) {

module.exports = [{"anonymous":false,"inputs":[{"indexed":false,"name":"farmer_id","type":"uint256"},{"indexed":false,"name":"product_id","type":"uint256"},{"indexed":false,"name":"time_added","type":"uint256"}],"name":"add_product","type":"event"},{"constant":false,"inputs":[{"name":"_product_id","type":"uint256"},{"name":"_product_quantity","type":"uint256"},{"name":"_shop_id","type":"uint256"}],"name":"consumer_buy_product","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_consumer_name","type":"string"}],"name":"consumer_registeration","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_product_name","type":"string"},{"name":"_product_price","type":"uint256"},{"name":"_product_quantity","type":"uint256"}],"name":"farmer_add_product","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_farmer_name","type":"string"}],"name":"farmer_registeration","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_how_much","type":"uint256"}],"name":"farmer_widthdraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_product_id","type":"uint256"},{"name":"_product_quantity","type":"uint256"},{"name":"_new_price","type":"uint256"},{"name":"_su_id","type":"uint256"}],"name":"shop_buy_product","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from_id","type":"uint256"},{"indexed":false,"name":"to_id","type":"uint256"},{"indexed":false,"name":"quantity","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"transfer","type":"event"},{"constant":false,"inputs":[{"name":"_shop_name","type":"string"}],"name":"shop_registeration","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_how_much","type":"uint256"}],"name":"shop_widthdraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_product_id","type":"uint256"},{"name":"_product_quantity","type":"uint256"},{"name":"_new_price","type":"uint256"}],"name":"supplier_buy_product","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_supplier_name","type":"string"}],"name":"supplier_registeration","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_how_much","type":"uint256"}],"name":"supplier_widthdraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"consumer_by_id","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"consumer_id_by_address","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"consumer_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"consumer_map","outputs":[{"name":"product_id","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"shop_id","type":"uint256"},{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"consumer_name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"farmer_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"farmer_by_id","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"farmer_id_by_address","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"farmer_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"farmer_name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"order_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"product_detail_map","outputs":[{"name":"product_name","type":"string"},{"name":"product_price","type":"uint256"},{"name":"product_quantity","type":"uint256"},{"name":"farmer_id","type":"uint256"},{"name":"add_time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"product_detail_map_shop","outputs":[{"name":"product_price","type":"uint256"},{"name":"product_quantity","type":"uint256"},{"name":"seller_id","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"product_detail_map_supplier","outputs":[{"name":"product_price","type":"uint256"},{"name":"product_quantity","type":"uint256"},{"name":"seller_id","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"produt_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"shop_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"shop_by_id","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"shop_id_by_address","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"shop_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"shop_name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"supplier_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"supplier_by_id","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"supplier_id_by_address","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplier_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"supplier_name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/shop-crops/shop-crops.component.css":
/*!*****************************************************!*\
  !*** ./src/app/shop-crops/shop-crops.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablecolor{\r\n    background-color: #682382 ;\r\n    color:white;\r\n    \r\n    }\r\n    .btn {\r\n        background-color: #682382 ;\r\n        border-radius: 8px;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n        color: #fff;\r\n        font-family: inherit;\r\n        font-weight: bold;\r\n        /* margin: 1 20px; */\r\n        /* font-family: Helvetica-Bold; */\r\n        width: 150px;\r\n        height: 30px;\r\n        /* padding: 15px; */\r\n        font-size: 15px;\r\n    }"

/***/ }),

/***/ "./src/app/shop-crops/shop-crops.component.html":
/*!******************************************************!*\
  !*** ./src/app/shop-crops/shop-crops.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <app-home></app-home>\n    </div>\n    <div class=\"col-sm-9\">\n            <h2><b>Distributor</b></h2>\n            <hr>\n        <br><br><br>\n<div class=\"row\">\n  <div class=\"col-sm-8\">\n      <h4><b>List of Distributor</b></h4><br>\n            \n      <table class=\"table table-striped\" style=\"display:block;height:500px;\">\n          <thead class=\"tablecolor\">\n            <tr>\n              <th>Distributor Id</th>\n              <th>Distributor Name</th>\n              <th>Distributor Address</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody >\n              <tr *ngFor=\"let shop of shops\" >\n                  <td>{{ shop.shop_id }}</td> \n                  <td>{{ shop.shop_name }}</td>\n                  <td>{{ shop.shop_address }}</td>\n                  <td><input type=\"button\"  class=\"btn\" value=\"View Crop details\" (click)=\"crop_details(shop.shop_id)\"></td>\n              </tr>\n      </tbody>\n        </table>  \n  </div>\n  <div class=\"col-sm-4\">\n      <h4><b>Available Crop's Detail</b></h4><br>\n            \n      <table class=\"table table-striped\" style=\"overflow-y:auto;display:block;height:500px;\">\n          <thead class=\"tablecolor\">\n            <tr>\n              <th>Crop Id</th>\n              <th>Crop Name</th>\n              <th>Quantity</th>\n              <th>Price</th>\n\n            </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor=\"let crop of cropdetails\" >\n                  <td>{{ crop.crop_id }}</td> \n                  <td>{{ crop.crop_name }}</td>\n                  <td>{{ crop.crop_quantity}}</td>\n                  <td>{{ crop.crop_price}}</td>\n              </tr>\n      </tbody>\n        </table>  \n  </div>\n</div>                \n    </div>\n  </div>\n  \n\n"

/***/ }),

/***/ "./src/app/shop-crops/shop-crops.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shop-crops/shop-crops.component.ts ***!
  \****************************************************/
/*! exports provided: ShopCropsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCropsComponent", function() { return ShopCropsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopCropsComponent = /** @class */ (function () {
    function ShopCropsComponent(cs) {
        this.cs = cs;
        this.shops = [];
        this.cropdetails = [];
    }
    ShopCropsComponent.prototype.list_of_shops = function () {
        var _this = this;
        this.shops.length = 0;
        this.cs.shop_ids().then(function (ids) {
            ids.forEach(function (shop_id) {
                _this.cs.shop_name(shop_id).then(function (shop_name) {
                    _this.cs.shop_by_id(shop_id).then(function (shop_address) {
                        // alert(supplier_name+''+supplier_address)
                        var obj = {};
                        obj['shop_id'] = shop_id;
                        obj['shop_name'] = shop_name;
                        obj['shop_address'] = shop_address;
                        _this.shops.push(obj);
                    });
                });
            });
        });
    };
    ShopCropsComponent.prototype.crop_details = function (shop_id) {
        var _this = this;
        this.cropdetails.length = 0;
        this.cs.product_ids().then(function (ids) {
            ids.forEach(function (crop_id) {
                _this.cs.product_detail_map_shop(crop_id, shop_id).then(function (result) {
                    if (result[1] != 0) {
                        var obj_1 = {};
                        obj_1['crop_id'] = crop_id;
                        _this.cs.product_detail_map(crop_id).then(function (res) { return obj_1['crop_name'] = res[0]; });
                        obj_1['crop_quantity'] = result[1];
                        obj_1['crop_price'] = result[2];
                        _this.cropdetails.push(obj_1);
                    }
                });
            });
        });
    };
    ShopCropsComponent.prototype.ngOnInit = function () {
        this.list_of_shops();
    };
    ShopCropsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop-crops',
            template: __webpack_require__(/*! ./shop-crops.component.html */ "./src/app/shop-crops/shop-crops.component.html"),
            styles: [__webpack_require__(/*! ./shop-crops.component.css */ "./src/app/shop-crops/shop-crops.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"]])
    ], ShopCropsComponent);
    return ShopCropsComponent;
}());



/***/ }),

/***/ "./src/app/shop-reg/shop-reg.component.css":
/*!*************************************************!*\
  !*** ./src/app/shop-reg/shop-reg.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 120px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/shop-reg/shop-reg.component.html":
/*!**************************************************!*\
  !*** ./src/app/shop-reg/shop-reg.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-3\">\r\n      <app-header></app-header>\r\n  </div>\r\n  <div class=\"col-sm-9\">\r\n   \r\n\r\n    <div class=\"jumbotron text-center\">\r\n      <h3>RETAILER REGISTRATION</h3>\r\n      \r\n    </div>\r\n      <BR><br><br><br>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n         \r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"name\">Shop Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"id1\" #name placeholder=\"Enter Shop Name\" name=\"sname\">\r\n          <br><br>\r\n          <button type=\"submit\" class=\"btn\"(click)=\"shop_registeration(name.value)\">Register</button>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    \r\n    <ngx-spinner></ngx-spinner>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/shop-reg/shop-reg.component.ts":
/*!************************************************!*\
  !*** ./src/app/shop-reg/shop-reg.component.ts ***!
  \************************************************/
/*! exports provided: ShopRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRegComponent", function() { return ShopRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopRegComponent = /** @class */ (function () {
    function ShopRegComponent(cs, spinner) {
        this.cs = cs;
        this.spinner = spinner;
    }
    ShopRegComponent.prototype.ngOnInit = function () {
    };
    ShopRegComponent.prototype.shop_registeration = function (name) {
        var _this = this;
        this.spinner.show();
        this.cs.getAccount().then(function (address) {
            _this.cs.shop_registeration(name, address).then(function (res) {
                _this.spinner.hide();
                if (res == 1) {
                    document.getElementById("id1").value = "";
                    alert("Successfully Registered...!");
                }
                else if (res == 0) {
                    document.getElementById("id1").value = "";
                    alert("You Rejected this transaction...!");
                }
                else if (res == 2) {
                    document.getElementById("id1").value = "";
                    alert("Transaction Failed...!");
                }
            });
        });
    };
    ShopRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop-reg',
            template: __webpack_require__(/*! ./shop-reg.component.html */ "./src/app/shop-reg/shop-reg.component.html"),
            styles: [__webpack_require__(/*! ./shop-reg.component.css */ "./src/app/shop-reg/shop-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], ShopRegComponent);
    return ShopRegComponent;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablecolor{\r\n    background-color: #682382 ;\r\ncolor:white;\r\n\r\n}\r\n\r\n.table-wrapper-2 {\r\n    /* display: block; */\r\n    max-height: 240px;\r\n    overflow-y: auto;\r\n    /* -ms-overflow-style: -ms-autohiding-scrollbar; */\r\n}\r\n\r\n.btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 140px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-3\">\r\n      <app-header></app-header>\r\n  </div>\r\n  <div class=\"col-sm-9\">\r\n\r\n\r\n\t\t<div class=\"Container-fluid\">\r\n\t\t\t\t<h2><b>Distributor</b></h2>\r\n\t\t\t\t<hr>\r\n\r\n\t\t\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-4\">\r\n\t\t\t<form [formGroup]=\"angForm\" novalidate>\r\n\t\t\t\t\t<br><br>\r\n\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<h3><b>Distributor Add Crop</b></h3>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<label>Crop ID</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"pid\" id=\"id1\" type=\"text\" placeholder=\"Enter the Crop ID\" #productid>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['pid'].invalid && (angForm.controls['pid'].dirty || angForm.controls['pid'].touched)\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['pid'].errors.required\">\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color:rgb(240, 48, 48)\"><small>Crop ID is required.</small></p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Quantity</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"qty\" id=\"id2\" type=\"text\" placeholder=\"Enter the Quantiy\" #productquantity>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['qty'].invalid && (angForm.controls['qty'].dirty || angForm.controls['qty'].touched)\" >\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['qty'].errors.required\">\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color:rgb(240, 48, 48)\"><small>Quantity is required.</small></p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t<!-- <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Price</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"price\" type=\"text\"  #newprice readonly/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Supplier ID</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"supid\" id=\"id3\" type=\"text\" placeholder=\"Enter Supplier id\" #suid>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['supid'].invalid && (angForm.controls['supid'].dirty || angForm.controls['supid'].touched)\"  >\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['supid'].errors.required\">\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color:rgb(240, 48, 48)\"><small>Supplier ID is required.</small></p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Update Price</label>\r\n\t\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"price\" id=\"id4\" type=\"text\" placeholder=\"Enter New Price\" #newprice>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['price'].invalid && (angForm.controls['price'].dirty || angForm.controls['price'].touched)\"  >\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['price'].errors.required\">\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color:rgb(240, 48, 48)\"><small>Update price is required.</small></p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t<button type=\"submit\"  #b2 class=\"btn\" (click)=\"buy(productid.value,productquantity.value,newprice.value,suid.value)\">Purchase Crop\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t</div>\r\n\t<div class=\"col-sm-8\">\r\n\t\t\t<br>\r\n\t\t\t<br>\r\n\t\t\t<h3><b> Available Crop Details</b></h3><br>\r\n\t\t\t<div class=\"table-wrapper-2\" > \r\n\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t<thead class=\"tablecolor\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Crop Name</th>\r\n\t\t\t\t\t\t\t<th>Crop ID</th>\r\n\t\t\t\t\t\t\t<th>Crop Quantity</th>\r\n\t\t\t\t\t\t\t<th>Price Per Quantity <small>(in ether)</small></th>\r\n\t\t\t\t\t\t\t<th>Supplier ID</th>\r\n\t\t\t\t\t\t\t<th>Supplier Name</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id=\"body_bank\">\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let os of available_supplierproducts\" >\r\n\t\t\t\t\t\t\t\t\t<td>{{ os.productname }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{ os.productid }}</td> \t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<td>{{ os.productquantity }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{ os.productprice }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{ os.supplierid }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{ os.suppliername }}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\r\n\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t\t\r\n\r\n\t\t</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t</div>\r\n\t\r\n\t\t\t\t\t\r\n\t\r\n\t\t\t\t<!-- <div class=\"row\"> -->\r\n\t\t\t\t\t<!-- <div class=\"col-sm-1\">\t\r\n\t\t\t\t\t</div>\t\t -->\r\n\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t\t<h3><b>Purchased Crop Details</b></h3><br>\r\n\t\t\t\t\t\t<div class=\"table-wrapper-2\" > \r\n\t\t\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t\t\t\t<thead class=\"tablecolor\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Crop Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Crop ID</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Seller ID</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Quantity</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Price Per Quantity <small>(in ether)</small></th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody id=\"body_bank\">\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let s of shops_available_products\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ s.product_name }}</td> \r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{s.product_id }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ s.seller_id }}</td> \r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{s.product_quantity }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{s.product_price}}</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t                 </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-1\"></div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t<ngx-spinner></ngx-spinner>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopComponent = /** @class */ (function () {
    function ShopComponent(fb, cs, spinner) {
        this.fb = fb;
        this.cs = cs;
        this.spinner = spinner;
        this.available_supplierproducts = [];
        this.shops_available_products = [];
        this.createForm();
    }
    ShopComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            pid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            supid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            //  Updaters:['',Validators.required]
        });
    };
    ShopComponent.prototype.buy = function (product_id, product_quantity, new_price, su_id) {
        var _this = this;
        if (document.getElementById('id1').value == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Please Enter the Crop Id");
            return;
        }
        if (document.getElementById('id2').value == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Please Enter the Quantity");
            return;
        }
        if (document.getElementById('id3').value == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Please Enter the Distributor Id");
            return;
        }
        if (document.getElementById('id4').value == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Please Enter the Update Price");
            return;
        }
        this.spinner.show();
        this.cs.getAccount().then(function (address) {
            _this.cs.product_detail_map_supplier(product_id, su_id).then(function (result) {
                console.log(result);
                _this.cs.shop_buy_product(product_id, product_quantity, new_price, su_id, address, result[0].toNumber() * product_quantity).then(function (res) {
                    document.getElementById("id1").value = "";
                    document.getElementById("id2").value = "";
                    document.getElementById("id3").value = "";
                    document.getElementById("id4").value = "";
                    _this.spinner.hide();
                    if (res == 1) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Bought Crop Successfully");
                        _this.shop_product_details();
                    }
                    else if (res == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                    }
                    else if (res == 2) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed");
                    }
                });
            });
        });
    };
    ShopComponent.prototype.shop_balance = function () {
        var _this = this;
        this.shop_bal = 0;
        this.cs.getAccount().then(function (address) {
            _this.cs.shop_id_by_address(address).then(function (shop_id) {
                _this.cs.shop_balance(shop_id).then(function (res) {
                    _this.shop_bal = res / 1000000000000000000;
                });
            });
        });
    };
    ShopComponent.prototype.shop_widthdraw = function (amount_to_widthdraw) {
        var _this = this;
        this.cs.getAccount().then(function (address) {
            _this.cs.shop_widthdraw(amount_to_widthdraw * 1000000000000000000, address).then(function (res) {
                if (res == 1) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Amount Successfully Added to your Account");
                    _this.shop_balance();
                }
                else if (res == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                }
                else if (res == 2) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed");
                }
            });
        });
    };
    ShopComponent.prototype.shop_product_details = function () {
        var _this = this;
        this.cs.getAccount().then(function (shop_address) {
            _this.cs.shop_id_by_address(shop_address).then(function (shop_id) {
                _this.cs.produt_ids().then(function (product_ids) {
                    product_ids.forEach(function (p_id) {
                        _this.cs.product_detail_map_shop(p_id, shop_id).then(function (res) {
                            _this.cs.product_detail_map(p_id).then(function (pro_d) {
                                if (res[2].toNumber() != 0) {
                                    var obj = {};
                                    obj['product_name'] = pro_d[0];
                                    obj['product_id'] = p_id;
                                    obj['product_price'] = res[0].toNumber() / 1000000000000000000;
                                    obj['product_quantity'] = res[1].toNumber();
                                    obj['seller_id'] = res[2].toNumber();
                                    // obj['product_quantity']=res[3];
                                    _this.shops_available_products.push(obj);
                                }
                            });
                        });
                    });
                });
            });
        });
        // )
    };
    ShopComponent.prototype.available_supplier_products = function () {
        var meta = this;
        meta.cs.supplier_ids().then(function (ids) {
            meta.cs.product_ids().then(function (pids) {
                ids.forEach(function (v1) {
                    pids.forEach(function (v2) {
                        meta.cs.supplier_name(v1).then(function (supplier_name) {
                            meta.cs.product_detail_map_supplier(v2, v1).then(function (result) {
                                if (result[1].toNumber() != 0) {
                                    meta.cs.product_detail_map(v2).then(function (v3) {
                                        var obj = {};
                                        obj['supplierid'] = v1;
                                        obj['suppliername'] = supplier_name;
                                        obj['productid'] = v2;
                                        obj['productname'] = v3[0];
                                        obj['productquantity'] = result[1].toNumber();
                                        obj['productprice'] = result[0].toNumber() / 1000000000000000000;
                                        meta.available_supplierproducts.push(obj);
                                    });
                                }
                            });
                        });
                    });
                });
            });
        });
    };
    ShopComponent.prototype.ngOnInit = function () {
        this.shop_balance();
        this.shop_product_details();
        this.available_supplier_products();
    };
    ShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__["ChainServiceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/shopwithdraw/shopwithdraw.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shopwithdraw/shopwithdraw.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 120px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/shopwithdraw/shopwithdraw.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shopwithdraw/shopwithdraw.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n     \n       \n    <div class=\"col-sm-6\">\n        <app-header></app-header>\n    </div>\n\n    \n    <div class=\"col-sm-2\">\n        <br><br><br><br><br><br>\n          <h3 style=\"text-align:center\"><b>Balance in Ether</b></h3><br>\n        <h2 style=\"text-align:center\"><b>{{shop_bal}}</b></h2>\n\n\n       &nbsp; &nbsp; <h3 style=\"text-align:center\"><b>Withdraw</b></h3><br><br>\n        <input class=\"form-control\" type=\"text\" id=\"id1\" placeholder=\"Enter withdraw amount\" #withdrawamt ><br>\n        \n        <button   class=\"btn center-block\" (click)=\"shop_widthdraw(withdrawamt.value)\">withdraw</button>\n\n    </div> \n\n        <div class=\"col-sm-4\">\n\n        </div>\n\n</div>\n<ngx-spinner></ngx-spinner> "

/***/ }),

/***/ "./src/app/shopwithdraw/shopwithdraw.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shopwithdraw/shopwithdraw.component.ts ***!
  \********************************************************/
/*! exports provided: ShopwithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopwithdrawComponent", function() { return ShopwithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopwithdrawComponent = /** @class */ (function () {
    function ShopwithdrawComponent(cs, spinner) {
        this.cs = cs;
        this.spinner = spinner;
    }
    ShopwithdrawComponent.prototype.shop_balance = function () {
        var _this = this;
        this.shop_bal = 0;
        this.cs.getAccount().then(function (address) {
            _this.cs.shop_id_by_address(address).then(function (shop_id) {
                _this.cs.shop_balance(shop_id).then(function (res) {
                    _this.shop_bal = res / 1000000000000000000;
                });
            });
        });
    };
    ShopwithdrawComponent.prototype.shop_widthdraw = function (amount_to_widthdraw) {
        var _this = this;
        this.spinner.show();
        if (document.getElementById('id1').value == '' || amount_to_widthdraw <= 0) {
            alert("Please Enter a Valid amount...!");
            document.getElementById("id1").value = "";
            return;
        }
        this.cs.getAccount().then(function (address) {
            _this.cs.shop_id_by_address(address).then(function (shop_id) {
                _this.cs.shop_balance(shop_id).then(function (res) {
                    _this.shop_bal = res / 1000000000000000000;
                    if (_this.shop_bal >= amount_to_widthdraw) {
                        _this.cs.shop_widthdraw(amount_to_widthdraw * 1000000000000000000, address).then(function (res) {
                            document.getElementById("id1").value = "";
                            _this.spinner.hide();
                            if (res == 1) {
                                alert("Amount Successfully Added to your Account");
                                _this.shop_balance();
                            }
                            else if (res == 0) {
                                alert("You Rejected this Transaction");
                            }
                            else if (res == 2) {
                                alert("Transaction Failed");
                            }
                        });
                    }
                    else {
                        document.getElementById("id1").value = "";
                        alert("You Can Withdraw Upto" + _this.shop_bal);
                    }
                });
            });
        });
    };
    ShopwithdrawComponent.prototype.ngOnInit = function () {
        this.shop_balance();
    };
    ShopwithdrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopwithdraw',
            template: __webpack_require__(/*! ./shopwithdraw.component.html */ "./src/app/shopwithdraw/shopwithdraw.component.html"),
            styles: [__webpack_require__(/*! ./shopwithdraw.component.css */ "./src/app/shopwithdraw/shopwithdraw.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], ShopwithdrawComponent);
    return ShopwithdrawComponent;
}());



/***/ }),

/***/ "./src/app/sign/sign.component.css":
/*!*****************************************!*\
  !*** ./src/app/sign/sign.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign/sign.component.html":
/*!******************************************!*\
  !*** ./src/app/sign/sign.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Sign</div>\n            <div class=\"panel-body\">\n                \n                Account Address:&nbsp;&nbsp;<input type=\"text\" class=\"form-control\"  #accno  name=\"accnumber\">\n                Private Key:&nbsp;&nbsp;<input type=\"text\" class=\"form-control\"  #pkey  name=\"privatekey\">\n            </div>\n          </div>\n        </div>\n   \n    <div class=\"col-sm-4\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignComponent = /** @class */ (function () {
    function SignComponent() {
    }
    SignComponent.prototype.ngOnInit = function () {
    };
    SignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign',
            template: __webpack_require__(/*! ./sign.component.html */ "./src/app/sign/sign.component.html"),
            styles: [__webpack_require__(/*! ./sign.component.css */ "./src/app/sign/sign.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignComponent);
    return SignComponent;
}());



/***/ }),

/***/ "./src/app/stock-list/stock-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/stock-list/stock-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablecolor{\r\n    background-color: #682382 ;\r\n    color:white;\r\n    \r\n    }\r\n    .btn {\r\n        background-color: #682382 ;\r\n        border-radius: 8px;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n        color: #fff;\r\n        font-family: inherit;\r\n        font-weight: bold;\r\n        /* margin: 1 20px; */\r\n        /* font-family: Helvetica-Bold; */\r\n        width: 150px;\r\n        height: 30px;\r\n        /* padding: 15px; */\r\n        font-size: 15px;\r\n    }"

/***/ }),

/***/ "./src/app/stock-list/stock-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/stock-list/stock-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <app-home></app-home>\n    </div>\n    <div class=\"col-sm-9\">\n        <h2><b>Supplier</b></h2>\n        <hr>\n      <br><br><br>\n<div class=\"row\">\n  <div class=\"col-sm-8\">\n      <h4><b>List of Suppliers</b></h4><br>\n            \n      <table class=\"table table-striped\" style=\"display:block;height:500px;\">\n          <thead class=\"tablecolor\">\n            <tr>\n              <th>Supplier ID</th>\n              <th>Supplier Name</th>\n              <th>Supplier Address</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody >\n              <tr *ngFor=\"let supplier of suppliers\" >\n                  <td>{{ supplier.supplier_id }}</td> \n                  <td>{{ supplier.supplier_name }}</td>\n                  <td>{{ supplier.supplier_address }}</td>\n                  <td><input type=\"button\"  class=\"btn\" value=\"View Crop details\" (click)=\"crop_details(supplier.supplier_id)\"></td>\n              </tr>\n      </tbody>\n        </table>  \n  </div>\n<div class=\"col-sm-4\">\n    <h4><b>Available Crop's Detail</b></h4><br>\n            \n    <table class=\"table table-striped\" style=\"overflow-y:auto;display:block;height:250px;\">\n        <thead class=\"tablecolor\">\n          <tr>\n            <th>Crop Id</th>\n            <th>Crop Name</th>\n            <th>Quantity</th>\n            <th>Price</th>\n\n          </tr>\n        </thead>\n        <tbody id=\"body_bank\">\n            <tr *ngFor=\"let crop of cropdetails\" >\n                <td>{{ crop.crop_id }}</td> \n                <td>{{ crop.crop_name }}</td>\n                <td>{{ crop.crop_quantity}}</td>\n                <td>{{ crop.crop_price}}</td>\n            </tr>\n    </tbody>\n      </table>  \n</div>\n</div>          \n    </div>\n  </div>\n  \n\n"

/***/ }),

/***/ "./src/app/stock-list/stock-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/stock-list/stock-list.component.ts ***!
  \****************************************************/
/*! exports provided: StockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListComponent", function() { return StockListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StockListComponent = /** @class */ (function () {
    function StockListComponent(cs) {
        this.cs = cs;
        this.suppliers = [];
        this.cropdetails = [];
    }
    StockListComponent.prototype.list_of_suppliers = function () {
        var _this = this;
        this.suppliers.length = 0;
        this.cs.supplier_ids().then(function (ids) {
            ids.forEach(function (supplier_id) {
                _this.cs.supplier_name(supplier_id).then(function (supplier_name) {
                    _this.cs.supplier_by_id(supplier_id).then(function (supplier_address) {
                        // alert(supplier_name+''+supplier_address)
                        var obj = {};
                        obj['supplier_id'] = supplier_id;
                        obj['supplier_name'] = supplier_name;
                        obj['supplier_address'] = supplier_address;
                        _this.suppliers.push(obj);
                    });
                });
            });
        });
    };
    StockListComponent.prototype.crop_details = function (supplier_id) {
        var _this = this;
        this.cropdetails.length = 0;
        this.cs.product_ids().then(function (ids) {
            ids.forEach(function (crop_id) {
                _this.cs.product_detail_map_supplier(crop_id, supplier_id).then(function (result) {
                    if (result[1] != 0) {
                        var obj_1 = {};
                        obj_1['crop_id'] = crop_id;
                        _this.cs.product_detail_map(crop_id).then(function (res) { return obj_1['crop_name'] = res[0]; });
                        obj_1['crop_quantity'] = result[1];
                        obj_1['crop_price'] = result[2];
                        _this.cropdetails.push(obj_1);
                    }
                    else {
                        // alert('No crops')
                    }
                });
            });
        });
    };
    StockListComponent.prototype.ngOnInit = function () {
        this.list_of_suppliers();
    };
    StockListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-list',
            template: __webpack_require__(/*! ./stock-list.component.html */ "./src/app/stock-list/stock-list.component.html"),
            styles: [__webpack_require__(/*! ./stock-list.component.css */ "./src/app/stock-list/stock-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"]])
    ], StockListComponent);
    return StockListComponent;
}());



/***/ }),

/***/ "./src/app/supplier-reg/supplier-reg.component.css":
/*!*********************************************************!*\
  !*** ./src/app/supplier-reg/supplier-reg.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 120px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/supplier-reg/supplier-reg.component.html":
/*!**********************************************************!*\
  !*** ./src/app/supplier-reg/supplier-reg.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-3\">\r\n      <app-header></app-header>\r\n  </div>\r\n  <div class=\"col-sm-9\">\r\n     \r\n\r\n    <div class=\"jumbotron text-center\">\r\n      <h3>DISTRIBUTOR REGISTRATION</h3>  \r\n    </div>\r\n      <BR><br><br><br>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n         \r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"name\">Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"id1\" #name placeholder=\"Enter Name\" name=\"supname\">\r\n          <br><br>\r\n          <button type=\"submit\" class=\"btn\" (click)=\"supplier_registeration(name.value)\">Register</button>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    \r\n    <ngx-spinner></ngx-spinner>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/supplier-reg/supplier-reg.component.ts":
/*!********************************************************!*\
  !*** ./src/app/supplier-reg/supplier-reg.component.ts ***!
  \********************************************************/
/*! exports provided: SupplierRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRegComponent", function() { return SupplierRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupplierRegComponent = /** @class */ (function () {
    function SupplierRegComponent(cs, spinner) {
        this.cs = cs;
        this.spinner = spinner;
    }
    SupplierRegComponent.prototype.ngOnInit = function () {
    };
    SupplierRegComponent.prototype.supplier_registeration = function (name) {
        var _this = this;
        this.spinner.show();
        this.cs.getAccount().then(function (address) {
            _this.cs.supplier_registeration(name, address).then(function (res) {
                _this.spinner.hide();
                if (res == 1) {
                    alert("Successfully Registered...!");
                    document.getElementById("id1").value = "";
                }
                else if (res == 0) {
                    alert("You Rejected this Transaction...!");
                    document.getElementById("id1").value = "";
                }
                else if (res == 2) {
                    alert("Transaction Failed...!");
                    document.getElementById("id1").value = "";
                }
            });
        });
    };
    SupplierRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-reg',
            template: __webpack_require__(/*! ./supplier-reg.component.html */ "./src/app/supplier-reg/supplier-reg.component.html"),
            styles: [__webpack_require__(/*! ./supplier-reg.component.css */ "./src/app/supplier-reg/supplier-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], SupplierRegComponent);
    return SupplierRegComponent;
}());



/***/ }),

/***/ "./src/app/supplier/supplier.component.css":
/*!*************************************************!*\
  !*** ./src/app/supplier/supplier.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.table-wrapper-2 {\r\n    /* display: block; */\r\n    max-height: 240px;\r\n    overflow-y: auto;\r\n    /* -ms-overflow-style: -ms-autohiding-scrollbar; */\r\n}\r\n.tablecolor{\r\n    background-color: #682382 ;\r\ncolor:white;\r\n\r\n}\r\n.btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 140px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/supplier/supplier.component.html":
/*!**************************************************!*\
  !*** ./src/app/supplier/supplier.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <app-header></app-header>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n       \r\n\r\n        <div class=\"container\">\r\n                <h2><b>Supplier</b></h2>\r\n                <hr>\r\n            <br><br>\r\n            <div class=\"row\">\r\n              \r\n          <div class=\"col-sm-4\">\r\n              <h3><b>Supplier Add Crop </b></h3>\r\n          <div class =\"form-group\">\r\n            <br>\r\n        <div class=\"col-sm-8\">\r\n                <form [formGroup]=\"angForm\" novalidate>\r\n\r\n            <div class=\"form-group\">\r\n              <label>Crop ID</label>\r\n            <input type=\"text\" class=\"form-control txtbox\" formControlName=\"pid\" placeholder=\"Enter the Crop Id\" id=\"id1\" #productid  maxlength=\"30\"><br>\r\n            </div>\r\n            <div *ngIf=\"angForm.controls['pid'].invalid && (angForm.controls['pid'].dirty || angForm.controls['pid'].touched)\"  >\r\n                    <div *ngIf=\"angForm.controls['pid'].errors.required\">\r\n                        <p style=\"color:rgb(240, 48, 48)\"><small>Crop ID is required.</small></p>\r\n                    </div>\r\n        </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Quantity</label>\r\n            <input type=\"text\" class=\"form-control txtbox\" formControlName=\"qty\" #supplierquantity id=\"id2\" placeholder=\"Enter the Quantity\" maxlength=\"50\" ><br>\r\n            </div>\r\n            <div *ngIf=\"angForm.controls['qty'].invalid && (angForm.controls['qty'].dirty || angForm.controls['qty'].touched)\"  >\r\n                    <div *ngIf=\"angForm.controls['qty'].errors.required\">\r\n                        <p style=\"color:rgb(240, 48, 48)\"><small>Quantity is required.</small></p>\r\n                    </div>\r\n            </div>\r\n                \r\n            <div class=\"form-group\">\r\n                <label>Update Price</label>\r\n            <input type=\"text\" formControlName=\"price\" class=\"form-control txtbox\" #supplierrate id=\"id3\" placeholder=\" Enter New Price\" maxlength=\"30\" ><br>\r\n            </div>\r\n            <div *ngIf=\"angForm.controls['price'].invalid && (angForm.controls['price'].dirty || angForm.controls['price'].touched)\"  >\r\n                    <div *ngIf=\"angForm.controls['price'].errors.required\">\r\n                        <p style=\"color:rgb(240, 48, 48)\"><small>Update price is required.</small></p>\r\n                    </div>\r\n        </div>\r\n           \r\n           <button [disabled]=\"angForm.pristine || angForm.invalid\" #b2 type=\"button\" class=\"btn\" (click)=\"buy_crop(productid.value,supplierquantity.value,supplierrate.value)\">Purchase Crop</button>&nbsp;\r\n                \r\n                  <!-- <button type=\"submit\" class=\"btn btn-danger\" #b1 (click)=\"cancel()\">Cancel</button> -->\r\n        </form>\r\n                </div>\r\n    </div>\r\n        </div>\r\n     \r\n        \r\n     \r\n        \r\n        \r\n        <div class=\"col-sm-8\">\r\n            \r\n                <h3><b>Avaliable Crop Details</b></h3><br>\r\n                <div class=\"table-wrapper-2\" >  \r\n                <table class=\"table table-striped\" >\r\n                   <thead class=\"tablecolor\">\r\n                     <tr>\r\n                         <th>Crop Name</th>\r\n                         <th>Crop Id</th>                        \r\n                         <th>Date Added</th>\r\n                         <th>Price Per Quantity <small>(in ether)</small></th>\r\n                         <th>Quantity</th>\r\n                         <th>Farmer Id</th>\r\n                     </tr>\r\n                   </thead>\r\n                   <tbody id=\"body_bank\">\r\n                       <tr *ngFor=\"let s of available_crops\" >\r\n                        <td>{{s.cropname}}</td>\r\n                           <td>{{s.cropid}}</td>                         \r\n                           <td>{{s.date }}</td> \r\n                           <td>{{s.price }}</td>\r\n                           <td>{{s.quantity}}</td>\r\n                           <td>{{s.farmerid}}</td>\r\n                       </tr>\r\n                     </tbody>\r\n                 </table>\r\n                 </div>\r\n\r\n        </div>  \r\n        </div>\r\n<br><br><br>\r\n<div class=\"row\">\r\n        <br><br><br>\r\n    <div class=\"col-sm-1\">\r\n\r\n    </div>\r\n    <div class=\"col-sm-11\">\r\n   <!-- <div class=\"col-sm-12\"> -->\r\n        <h3><b>Purchased Crop Details</b></h3><br>\r\n        <div class=\"table-wrapper-2\" >    \r\n              <table class= \"table\" >\r\n                <thead class=\"tablecolor\">\r\n                  <tr>\r\n                    <th>Crop Name</th>\r\n                      <th>Crop Id</th>                     \r\n                      <th >Date Added</th>\r\n                      <th>Price Per Quantity <small>(in ether)</small></th>\r\n                      <th>Quantity</th>\r\n                      <th>Farmer ID</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let s of purchased_crops\" >\r\n                     <td>{{s.cropname}}</td>\r\n                      <td>{{s.cropid}}</td>                   \r\n                      <td>{{s.date }}</td> \r\n                      <td>{{s.price }}</td>\r\n                      <td>{{s.quantity}}</td>\r\n                      <td>{{s.farmerid}}</td>\r\n                  </tr>\r\n                    \r\n                  </tbody>\r\n              </table>\r\n          <!-- </div> -->\r\n          </div>\r\n    </div>\r\n    <div class=\"col-sm-1\"></div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n          </div>\r\n       \r\n         \r\n          \r\n        \r\n            <ngx-spinner></ngx-spinner>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/supplier/supplier.component.ts":
/*!************************************************!*\
  !*** ./src/app/supplier/supplier.component.ts ***!
  \************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupplierComponent = /** @class */ (function () {
    function SupplierComponent(cs, fb, spinner) {
        this.cs = cs;
        this.fb = fb;
        this.spinner = spinner;
        this.available_crops = [];
        this.purchased_crops = [];
        this.createForm();
    }
    SupplierComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            pid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            // Updaters:['',Validators.required]
        });
    };
    SupplierComponent.prototype.buy_crop = function (product_id, product_quantity, new_price) {
        var _this = this;
        // console.log(product_id,product_quantity,new_price);
        if (document.getElementById('id1').value == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Please Enter the Crop Id");
            return;
        }
        if (document.getElementById('id2').value == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Please Enter the Quantity");
            return;
        }
        if (document.getElementById('id3').value == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Please Enter the Update Price");
            return;
        }
        this.spinner.show();
        this.cs.getAccount().then(function (address) {
            _this.cs.product_detail_map(product_id).then(function (p_d) {
                console.log(p_d[1].toNumber() * product_quantity);
                _this.cs.supplier_buy_product(product_id, product_quantity, new_price * 1000000000000000000, address, (p_d[1].toNumber() * product_quantity)).then(function (res) {
                    document.getElementById("id1").value = "";
                    document.getElementById("id2").value = "";
                    document.getElementById("id3").value = "";
                    _this.available_crops_to_purchase();
                    _this.Purchased_crops_table();
                    _this.spinner.hide();
                    if (res == 1) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Bought Crop Successfully");
                    }
                    else if (res == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                    }
                    else if (res == 2) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed");
                    }
                });
            });
        });
    };
    // cropdetails(){
    //   this.crop_details.length = 0;
    //   this.cs.product_ids().then(product_ids => {
    //     product_ids.forEach(product_id=>{
    //       this.cs.product_detail_map(product_id).then(p_d => {
    //         if(p_d[2] != 0)
    //         {
    //           let obj = {};
    //           obj['crop_id'] = product_id;
    //           obj['crop_name'] = p_d[0];
    //           this.crop_details.push(obj);
    //         }
    //       })
    //     })
    //   })
    // }
    SupplierComponent.prototype.supplier_balance = function () {
        var _this = this;
        this.supplier_bal = 0;
        this.cs.getAccount().then(function (address) {
            _this.cs.supplier_id_by_address(address).then(function (supplier_id) {
                _this.cs.supplier_balance(supplier_id).then(function (res) {
                    _this.supplier_bal = res / 1000000000000000000;
                });
            });
        });
    };
    SupplierComponent.prototype.supplier_withdraw_func = function (amount_to_widthdraw) {
        var _this = this;
        this.cs.getAccount().then(function (address) {
            _this.cs.supplier_widthdraw(amount_to_widthdraw * 1000000000000000000, address).then(function (res) {
                if (res == 1) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Amount Successfully Added to your Account");
                    _this.supplier_balance();
                }
                else if (res == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                }
                else if (res == 2) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed");
                }
            });
        });
    };
    SupplierComponent.prototype.available_crops_to_purchase = function () {
        var _this = this;
        this.available_crops.length = 0;
        this.cs.product_ids().then(function (product_ids) {
            product_ids.forEach(function (product_id) {
                _this.cs.product_detail_map(product_id).then(function (p_d) {
                    if (p_d[2] != 0) {
                        var obj = {};
                        obj['cropid'] = product_id;
                        obj['cropname'] = p_d[0];
                        var tm = new Date(p_d[4].toNumber() * 1000);
                        var time = tm.toString();
                        obj['date'] = time;
                        obj['quantity'] = p_d[2];
                        obj['price'] = p_d[1] / 1000000000000000000;
                        obj['farmerid'] = p_d[3];
                        _this.available_crops.push(obj);
                    }
                });
            });
        });
    };
    SupplierComponent.prototype.Purchased_crops_table = function () {
        var _this = this;
        this.purchased_crops.length = 0;
        this.cs.getAccount().then(function (address) {
            _this.cs.supplier_id_by_address(address).then(function (supplier_id) {
                _this.cs.product_ids().then(function (product_ids) {
                    product_ids.forEach(function (product_id) {
                        _this.cs.product_detail_map_supplier(product_id, supplier_id).then(function (p_d_s) {
                            _this.cs.product_detail_map(product_id).then(function (p_d) {
                                if (p_d_s[2] != 0) {
                                    var obj = {};
                                    obj['cropid'] = product_id;
                                    obj['cropname'] = p_d[0];
                                    var tm = new Date(p_d[4].toNumber() * 1000);
                                    var time = tm.toString();
                                    obj['date'] = time;
                                    obj['farmerid'] = p_d[3];
                                    obj['price'] = p_d_s[0] / 1000000000000000000;
                                    obj['quantity'] = p_d_s[1];
                                    _this.purchased_crops.push(obj);
                                }
                            });
                        });
                    });
                });
            });
        });
    };
    SupplierComponent.prototype.ngOnInit = function () {
        this.supplier_balance();
        this.available_crops_to_purchase();
        this.Purchased_crops_table();
    };
    SupplierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier',
            template: __webpack_require__(/*! ./supplier.component.html */ "./src/app/supplier/supplier.component.html"),
            styles: [__webpack_require__(/*! ./supplier.component.css */ "./src/app/supplier/supplier.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_2__["ChainServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], SupplierComponent);
    return SupplierComponent;
}());



/***/ }),

/***/ "./src/app/supplierwithdraw/supplierwithdraw.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/supplierwithdraw/supplierwithdraw.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    background-color: #682382 ;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    /* margin: 1 20px; */\r\n    /* font-family: Helvetica-Bold; */\r\n    width: 120px;\r\n    height: 30px;\r\n    /* padding: 15px; */\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/supplierwithdraw/supplierwithdraw.component.html":
/*!******************************************************************!*\
  !*** ./src/app/supplierwithdraw/supplierwithdraw.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n     \n       \n    <div class=\"col-sm-6\">\n        <app-header></app-header>\n    </div>\n\n    \n    <div class=\"col-sm-2\">\n        <br><br><br><br><br><br>\n          <h3 style=\"text-align:center\"><b>Balance in Ether</b></h3><br>\n        <h2 style=\"text-align:center\"><b>{{supplier_bal}}</b></h2>\n\n\n       &nbsp; &nbsp; <h3 style=\"text-align:center\"><b>Withdraw</b></h3><br><br>\n        <input class=\"form-control\" type=\"text\" id=\"id1\" placeholder=\"Enter withdraw amount\" #withdrawamt ><br>\n        \n        <button   class=\"btn center-block\" (click)=\"supplier_withdraw_func(withdrawamt.value)\">withdraw</button>\n\n    </div> \n\n        <div class=\"col-sm-4\">\n\n        </div>\n\n</div> \n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/supplierwithdraw/supplierwithdraw.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/supplierwithdraw/supplierwithdraw.component.ts ***!
  \****************************************************************/
/*! exports provided: SupplierwithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierwithdrawComponent", function() { return SupplierwithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/chain-service.service */ "./src/app/service/chain-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupplierwithdrawComponent = /** @class */ (function () {
    function SupplierwithdrawComponent(cs, spinner) {
        var _this = this;
        this.cs = cs;
        this.spinner = spinner;
        this.cs.getAccount().then(function (address) {
            _this.cs.supplier_id_by_address(address).then(function (supplier_id) {
                _this.cs.supplier_balance(supplier_id).then(function (res) {
                    _this.supplier_bal = res / 1000000000000000000;
                });
            });
        });
    }
    SupplierwithdrawComponent.prototype.supplier_balance = function () {
        var _this = this;
        this.supplier_bal = 0;
        this.cs.getAccount().then(function (address) {
            _this.cs.supplier_id_by_address(address).then(function (supplier_id) {
                _this.cs.supplier_balance(supplier_id).then(function (res) {
                    _this.supplier_bal = res / 1000000000000000000;
                });
            });
        });
    };
    SupplierwithdrawComponent.prototype.supplier_withdraw_func = function (amount_to_widthdraw) {
        var _this = this;
        this.spinner.show();
        if (document.getElementById('id1').value == '' || amount_to_widthdraw <= 0) {
            alert("Please Enter a Valid amount...!");
            document.getElementById("id1").value = "";
            return;
        }
        this.cs.getAccount().then(function (address) {
            _this.cs.supplier_id_by_address(address).then(function (supplier_id) {
                _this.cs.supplier_balance(supplier_id).then(function (res) {
                    _this.supplier_bal = res / 1000000000000000000;
                    //alert(this.supplier_bal);
                    if (_this.supplier_bal >= amount_to_widthdraw) {
                        _this.cs.supplier_widthdraw(amount_to_widthdraw * 1000000000000000000, address).then(function (res) {
                            document.getElementById("id1").value = "";
                            _this.spinner.hide();
                            if (res == 1) {
                                alert("Amount Successfully Added to your Account");
                                _this.supplier_balance();
                            }
                            else if (res == 0) {
                                alert("You Rejected this Transaction");
                            }
                            else if (res == 2) {
                                alert("Transaction Failed");
                            }
                        });
                    }
                    else {
                        document.getElementById("id1").value = "";
                        alert("You can withdraw upto" + _this.supplier_bal);
                    }
                });
            });
        });
        this.cs.getAccount().then(function (address) {
        });
    };
    SupplierwithdrawComponent.prototype.ngOnInit = function () {
        this.supplier_balance();
    };
    SupplierwithdrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplierwithdraw',
            template: __webpack_require__(/*! ./supplierwithdraw.component.html */ "./src/app/supplierwithdraw/supplierwithdraw.component.html"),
            styles: [__webpack_require__(/*! ./supplierwithdraw.component.css */ "./src/app/supplierwithdraw/supplierwithdraw.component.css")]
        }),
        __metadata("design:paramtypes", [_service_chain_service_service__WEBPACK_IMPORTED_MODULE_1__["ChainServiceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], SupplierwithdrawComponent);
    return SupplierwithdrawComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n      <app-header></app-header>\n  </div>\n  <div class=\"col-sm-9\">\n      <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\madhan\supplyprojectsetup\Agro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map