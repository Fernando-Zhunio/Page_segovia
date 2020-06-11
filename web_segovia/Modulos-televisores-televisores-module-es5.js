function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modulos-televisores-televisores-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Modulos/televisores/televisores/televisores.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Modulos/televisores/televisores/televisores.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulosTelevisoresTelevisoresTelevisoresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\">\n    <div class=\"row mx-0 mb-5  bg-dark header\">\n        <div class=\" col-6\">\n            <h1 class=\"display-4\">Sección Televisores</h1>\n            <p class=\"lead\">Reparaciones, matenimiento, Soluciones</p>\n            <hr class=\"my-4\">\n            <p>En esta sección podremos ver una galeria de algunas imagenes de trabajo realizados a si como algunos problemas que tenias los televisores y lo solucionamos</p>\n        </div>\n        <div class=\"col-6\"></div>\n    </div>\n    <div class=\" container\">\n        <div class=\"galeria mb-5\">\n            <h2 class=\"\">GALERIA</h2>\n            Aqui va la galeria\n        </div>\n        <div>\n            <h2 class=\"\">PROBLEMAS MÁS COMUNES SOLUCIONADOS</h2>\n            <div class=\"card-columns\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Title</h5>\n                        <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam id repellendus dignissimos, libero quasi non cupiditate excepturi nobis aperiam repudiandae inventore culpa, delectus cum rerum, mollitia dicta soluta atque ipsa.</p>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Title</h5>\n                        <p class=\"card-text\">Content</p>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Title</h5>\n                        <p class=\"card-text\">Content</p>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Title</h5>\n                        <p class=\"card-text\">Content</p>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Title</h5>\n                        <p class=\"card-text\">Content</p>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Title</h5>\n                        <p class=\"card-text\">Content</p>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Title</h5>\n                        <p class=\"card-text\">Content</p>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Title</h5>\n                        <p class=\"card-text\">Content</p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/Modulos/televisores/televisores-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Modulos/televisores/televisores-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TelevisoresRoutingModule */

  /***/
  function srcAppModulosTelevisoresTelevisoresRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TelevisoresRoutingModule", function () {
      return TelevisoresRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _televisores_televisores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./televisores/televisores.component */
    "./src/app/Modulos/televisores/televisores/televisores.component.ts"); // import { HomeComponent } from './home/home.component';
    // const routes: Routes = [
    //   // {path:'',redirectTo:'Home', pathMatch:'full'}, 
    //   // // { path: 'Home', loadChildren: () => import('./Modulos/home/home.module').then( m => m.HomeModule)},
    //   // { path: 'Home', loadChildren: () => import('./Modulos/home/home.module').then( m => m.HomeModule)},
    //   // // { path: 'Televisores', loadChildren: () => import('./Modulos/televisores/televisores.module').then( m => m.TelevisoresModule)},
    //   // // { path: 'Televisores', loadChildren: () => import('./Modulos/televisores/televisores.module').then( m => m.TelevisoresModule)},
    //   // // {path:'Home',component:HomeComponent},
    //   // // {path:'Televisores',component:TelevisoresComponent},
    //   // // {path:'error',component:NotFoundComponent}
    // ];


    var routes = [{
      path: '',
      component: _televisores_televisores_component__WEBPACK_IMPORTED_MODULE_3__["TelevisoresComponent"]
    }];

    var TelevisoresRoutingModule = function TelevisoresRoutingModule() {
      _classCallCheck(this, TelevisoresRoutingModule);
    };

    TelevisoresRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TelevisoresRoutingModule);
    /***/
  },

  /***/
  "./src/app/Modulos/televisores/televisores.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Modulos/televisores/televisores.module.ts ***!
    \***********************************************************/

  /*! exports provided: TelevisoresModule */

  /***/
  function srcAppModulosTelevisoresTelevisoresModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TelevisoresModule", function () {
      return TelevisoresModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _televisores_televisores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./televisores/televisores.component */
    "./src/app/Modulos/televisores/televisores/televisores.component.ts");
    /* harmony import */


    var _televisores_televisores_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../televisores/televisores-routing.module */
    "./src/app/Modulos/televisores/televisores-routing.module.ts"); // const routes: Routes = [
    //   {path: '', component: TelevisoresComponent}
    // ];


    var TelevisoresModule = function TelevisoresModule() {
      _classCallCheck(this, TelevisoresModule);
    };

    TelevisoresModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_televisores_televisores_component__WEBPACK_IMPORTED_MODULE_3__["TelevisoresComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _televisores_televisores_routing_module__WEBPACK_IMPORTED_MODULE_4__["TelevisoresRoutingModule"]]
    })], TelevisoresModule);
    /***/
  },

  /***/
  "./src/app/Modulos/televisores/televisores/televisores.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/Modulos/televisores/televisores/televisores.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulosTelevisoresTelevisoresTelevisoresComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  padding: 70px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxvcy90ZWxldmlzb3Jlcy90ZWxldmlzb3Jlcy9DOlxcVXNlcnNcXEZaMTg5MVxcRGVza3RvcFxcUHJveWVjdG9zXFxBbmd1bGFyXFxwYWdlc2Vnb3ZpYS9zcmNcXGFwcFxcTW9kdWxvc1xcdGVsZXZpc29yZXNcXHRlbGV2aXNvcmVzXFx0ZWxldmlzb3Jlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvTW9kdWxvcy90ZWxldmlzb3Jlcy90ZWxldmlzb3Jlcy90ZWxldmlzb3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bG9zL3RlbGV2aXNvcmVzL3RlbGV2aXNvcmVzL3RlbGV2aXNvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA3MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IiwiLmhlYWRlciB7XG4gIHBhZGRpbmc6IDcwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Modulos/televisores/televisores/televisores.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Modulos/televisores/televisores/televisores.component.ts ***!
    \**************************************************************************/

  /*! exports provided: TelevisoresComponent */

  /***/
  function srcAppModulosTelevisoresTelevisoresTelevisoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TelevisoresComponent", function () {
      return TelevisoresComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TelevisoresComponent = /*#__PURE__*/function () {
      function TelevisoresComponent() {
        _classCallCheck(this, TelevisoresComponent);
      }

      _createClass(TelevisoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TelevisoresComponent;
    }();

    TelevisoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-televisores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./televisores.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Modulos/televisores/televisores/televisores.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./televisores.component.scss */
      "./src/app/Modulos/televisores/televisores/televisores.component.scss"))["default"]]
    })], TelevisoresComponent);
    /***/
  }
}]);
//# sourceMappingURL=Modulos-televisores-televisores-module-es5.js.map