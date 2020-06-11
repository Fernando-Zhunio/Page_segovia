function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/nav-bar/nav-bar.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/nav-bar/nav-bar.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <nav #nav class=\"navbar navbar-expand-lg navbar-dark  fixed-top\">\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav m-auto\">\n                <li class=\"nav-item  hoverable\">\n                    <a class=\"nav-link\" [routerLink]=\"['./Home']\" routerLinkActive=\"active\"> Inicio <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item hoverable\">\n                    <a class=\"nav-link\" href=\"#\">Lavadoras</a>\n                </li>\n                <li class=\"nav-item hoverable\">\n                    <a class=\"nav-link\" href=\"#\">Audio y video</a>\n                </li>\n                <li class=\"nav-item hoverable\">\n                    <a class=\"nav-link\" [routerLink]=\"['./Televisores']\" routerLinkActive=\"active\"> Televisores </a>\n                </li>\n                <!-- <li class=\"nav-item dropdown hoverable\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Dropdown\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li> -->\n                <!-- <li class=\"nav-item hoverable\">\n                    <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n                </li> -->\n            </ul>\n        </div>\n    </nav>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/not-found/not-found.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/not-found/not-found.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"center-h-v vh-100 vw-100 bg-dark p-4\">\n    <div class=\"display-4 text-center text-white\">Ruta no encontrada</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/section-chat/section-chat.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/section-chat/section-chat.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesSectionChatSectionChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <button (click)=\"OpenOrCloseChat()\" color=\"primary\" class=\"float-right\" mat-fab type=\"button\" data-toggle=\"collapse\" data-target=\"#multiCollapseExample2\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample2\">\n        <i class=\"fas fa-comments fa-2x\"></i>\n    </button>\n    <div class=\"row m-0 w-100  shadow collapse multi-collapse bg-transparent\" id=\"multiCollapseExample2\">\n        <!-- <mat-card class=\" chat col-md-3 offset-md-9  offset-0 col-12 \"> -->\n        <mat-card class=\" w-100\">\n            <!-- <mat-card class=\" \"> -->\n            <mat-card-header>\n                <div mat-card-avatar class=\"example-header-image\"></div>\n                <mat-card-title>Segoviano</mat-card-title>\n                <mat-card-subtitle class=\"text-success\"><strong>*</strong> En linea</mat-card-subtitle>\n            </mat-card-header>\n            <!-- <img matCardImage src=\"../../../assets/foto1.jp\"> -->\n            <mat-card-content #chatbody id=\"chatbody\" class=\"chat-body\">\n                <div *ngFor=\"let message of mensajes\">\n                    <ng-container *ngIf=\"message.isMy; else elseTemplate\">\n                        <div class=\"chat-sms-send \">\n                            <p class=\"text-break\">{{message.content}}\n                            </p>\n                        </div>\n                    </ng-container>\n                    <ng-template #elseTemplate>\n                        <div class=\"chat-sms-recived\">\n                            <p class=\"text-break\">{{message.content}}\n                            </p>\n                        </div>\n                    </ng-template>\n                </div>\n            </mat-card-content>\n\n            <mat-card-footer class=\"px-2\">\n                <!-- <mat-card-actions align=\"start\"> -->\n                <mat-form-field class=\"w-100\" appearance=\"outline\">\n                    <mat-label>Escriba su mensaje</mat-label>\n                    <button disabled=\"true\" (click)=\"sendMessageFile()\" class=\"\" mat-icon-button matPrefix>\n                                    <mat-icon>attach_file</mat-icon>\n                                </button>\n                    <textarea (keyup)=\"keyUpSms()\" [(ngModel)]=\"mensaje.content\" class=\"\" matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"3\"></textarea>\n                    <button [disabled]='!btnIsValid' (click)=\"sendMessage()\" class=\"\" mat-icon-button matSuffix>\n                                    <mat-icon>send</mat-icon>\n                                </button>\n                </mat-form-field>\n\n                <!-- </mat-card-actions> -->\n            </mat-card-footer>\n        </mat-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n<div class=\"chat col-md-5 col-lg-4 col-xl-3 col-12\">\n    <app-section-chat></app-section-chat>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/Componentes/nav-bar/nav-bar.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/Componentes/nav-bar/nav-bar.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesNavBarNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-nav {\n  background-color: rgba(8, 8, 8, 0.75);\n  transition: all 2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50ZXMvbmF2LWJhci9DOlxcVXNlcnNcXEZaMTg5MVxcRGVza3RvcFxcUHJveWVjdG9zXFxBbmd1bGFyXFxwYWdlc2Vnb3ZpYS9zcmNcXGFwcFxcQ29tcG9uZW50ZXNcXG5hdi1iYXJcXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudGVzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBR0Esa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudGVzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCA4LCAwLjc1KTtcclxuICAgIC8vIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgLy8gYmFja2Ryb3AtZmlsdGVyOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzO1xyXG59IiwiLmJnLW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgOCwgMC43NSk7XG4gIHRyYW5zaXRpb246IGFsbCAycztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Componentes/nav-bar/nav-bar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Componentes/nav-bar/nav-bar.component.ts ***!
    \**********************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppComponentesNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onWindowScroll",
        value: function onWindowScroll(e) {
          var element = document.querySelector('.navbar');

          if (window.pageYOffset > element.clientHeight) {
            this.nav.nativeElement.classList.add('bg-nav'); // element.classList.add('bgDarkTransition');
          } else {
            this.nav.nativeElement.classList.remove('bg-nav'); // element.classList.remove('bgDarkTransition');
          }
        }
      }]);

      return NavBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav', {
      "static": false
    })], NavBarComponent.prototype, "nav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])], NavBarComponent.prototype, "onWindowScroll", null);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/nav-bar/nav-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.scss */
      "./src/app/Componentes/nav-bar/nav-bar.component.scss"))["default"]]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/Componentes/not-found/not-found.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/Componentes/not-found/not-found.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesNotFoundNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudGVzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Componentes/not-found/not-found.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Componentes/not-found/not-found.component.ts ***!
    \**************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppComponentesNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/not-found/not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.scss */
      "./src/app/Componentes/not-found/not-found.component.scss"))["default"]]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/Componentes/section-chat/section-chat.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/Componentes/section-chat/section-chat.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesSectionChatSectionChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-form-field {\n  margin-bottom: -1.2em;\n}\n\n.chat-body {\n  height: 40vh;\n  overflow-y: scroll;\n  font-family: \"Candara\";\n}\n\n.chat-body::-webkit-scrollbar {\n  background-color: transparent;\n  width: 9px;\n}\n\n.chat-body::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n.example-header-image {\n  background-image: url('imagen_default.jpg');\n  background-size: cover;\n}\n\n.chat-body::-webkit-scrollbar-thumb {\n  background-color: rgba(66, 64, 64, 0.356);\n  border-radius: 5px;\n}\n\n.chat-sms-send {\n  float: right;\n  color: black;\n  display: block;\n  width: 80%;\n  text-align: right;\n}\n\n.chat-sms-send p {\n  background-color: yellow;\n  display: inline-block;\n  min-width: 3%;\n  max-width: 100%;\n  padding: 5px;\n  border-radius: 7px 7px 0 7px;\n}\n\n.chat-sms-recived {\n  float: left;\n  color: black;\n  width: 80%;\n  text-align: left;\n}\n\n.chat-sms-recived p {\n  background-color: yellow;\n  display: inline-block;\n  padding: 5px;\n  border-radius: 7px 7px 7px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50ZXMvc2VjdGlvbi1jaGF0L0M6XFxVc2Vyc1xcRloxODkxXFxEZXNrdG9wXFxQcm95ZWN0b3NcXEFuZ3VsYXJcXHBhZ2VzZWdvdmlhL3NyY1xcYXBwXFxDb21wb25lbnRlc1xcc2VjdGlvbi1jaGF0XFxzZWN0aW9uLWNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudGVzL3NlY3Rpb24tY2hhdC9zZWN0aW9uLWNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxxQkFBQTtBQ0FKOztBRElBO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBRUEsc0JBQUE7QUNISjs7QURNQTtFQUNJLDZCQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1BO0VBQ0ksNkJBQUE7QUNISjs7QURPQTtFQUNJLDJDQUFBO0VBQ0Esc0JBQUE7QUNKSjs7QURPQTtFQUNJLHlDQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURRQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRE1JO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDSlI7O0FEUUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ05KOztBRE9JO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50ZXMvc2VjdGlvbi1jaGF0L3NlY3Rpb24tY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMS4yZW07XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNoYXQtYm9keSB7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIC8vIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2FuZGFyYSc7XHJcbn1cclxuXHJcbi5jaGF0LWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDlweDtcclxufVxyXG5cclxuLmNoYXQtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAvLyB3aWR0aDogNXB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VuX2RlZmF1bHQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2hhdC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NCwgNjQsIDAuMzU2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5jaGF0LXNtcy1zZW5kIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtaW4td2lkdGg6IDMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwIDdweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNoYXQtc21zLXJlY2l2ZWQge1xyXG4gICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggN3B4IDA7XHJcbiAgICB9XHJcbn0iLCIubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAtMS4yZW07XG59XG5cbi5jaGF0LWJvZHkge1xuICBoZWlnaHQ6IDQwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgZm9udC1mYW1pbHk6IFwiQ2FuZGFyYVwiO1xufVxuXG4uY2hhdC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogOXB4O1xufVxuXG4uY2hhdC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VuX2RlZmF1bHQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY2hhdC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDY0LCA2NCwgMC4zNTYpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jaGF0LXNtcy1zZW5kIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jaGF0LXNtcy1zZW5kIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAzJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCA3cHg7XG59XG5cbi5jaGF0LXNtcy1yZWNpdmVkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jaGF0LXNtcy1yZWNpdmVkIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDdweCAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Componentes/section-chat/section-chat.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Componentes/section-chat/section-chat.component.ts ***!
    \********************************************************************/

  /*! exports provided: SectionChatComponent */

  /***/
  function srcAppComponentesSectionChatSectionChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionChatComponent", function () {
      return SectionChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { type } from 'os';


    var SectionChatComponent = /*#__PURE__*/function () {
      function SectionChatComponent() {
        _classCallCheck(this, SectionChatComponent);

        this.mensaje = {
          isMy: true,
          type: 'string',
          content: null
        };
        this.mensajes = [{
          isMy: true,
          type: 'string',
          content: 'segovia es gay'
        }];
        this.btnIsValid = false;
        this.isOpenChat = false;
      }

      _createClass(SectionChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OpenOrCloseChat",
        value: function OpenOrCloseChat() {
          var _this = this;

          this.isOpenChat = !this.isOpenChat;

          if (this.isOpenChat) {
            this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
            this.chatSuscription = this.things.changes.subscribe(function (t) {
              // this.chatAbajo();
              _this.chatBody.nativeElement.scrollTop = _this.chatBody.nativeElement.scrollHeight;
              console.log('chat abierto');
            });
          } else {
            this.chatSuscription.unsubscribe();
            console.log('chat cerrado');
          }
        }
      }, {
        key: "keyUpSms",
        value: function keyUpSms() {
          if (this.mensaje.content != null && this.mensaje.content.trim() != "") {
            this.btnIsValid = true;
          } else this.btnIsValid = false;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          switch (this.mensaje.type) {
            case 'string':
              if (this.mensaje.content != null && this.mensaje.content.trim() != "") {
                var newMensaje = Object.assign({}, this.mensaje);
                this.mensajes.push(newMensaje);
                this.mensaje.content = null;
                this.btnIsValid = false;
              }

              break;

            case 'File':
              if (this.mensaje.content != null && this.mensaje.content.trim() != "") {
                this.mensajes.push(this.mensaje);
                this.btnIsValid = false;
                this.mensaje.content = null;
              }

            default:
              break;
          }
        }
      }, {
        key: "sendMessageFile",
        value: function sendMessageFile() {}
      }]);

      return SectionChatComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('mensajes')], SectionChatComponent.prototype, "things", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatbody', {
      "static": true
    })], SectionChatComponent.prototype, "chatBody", void 0);
    SectionChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-section-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./section-chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/section-chat/section-chat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./section-chat.component.scss */
      "./src/app/Componentes/section-chat/section-chat.component.scss"))["default"]]
    })], SectionChatComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _Componentes_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Componentes/not-found/not-found.component */
    "./src/app/Componentes/not-found/not-found.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'Home',
      pathMatch: 'full'
    }, // { path: 'Home', loadChildren: () => import('./Modulos/home/home.module').then( m => m.HomeModule)},
    {
      path: 'Home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Modulos-home-home-module */
        "Modulos-home-home-module").then(__webpack_require__.bind(null,
        /*! ./Modulos/home/home.module */
        "./src/app/Modulos/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: 'Televisores',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Modulos-televisores-televisores-module */
        "Modulos-televisores-televisores-module").then(__webpack_require__.bind(null,
        /*! ./Modulos/televisores/televisores.module */
        "./src/app/Modulos/televisores/televisores.module.ts")).then(function (m) {
          return m.TelevisoresModule;
        });
      }
    }, // { path: 'Televisores', loadChildren: () => import('./Modulos/televisores/televisores.module').then( m => m.TelevisoresModule)},
    // {path:'Home',component:HomeComponent},
    // {path:'Televisores',component:TelevisoresComponent},
    {
      path: '**',
      component: _Componentes_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxGWjE4OTFcXERlc2t0b3BcXFByb3llY3Rvc1xcQW5ndWxhclxccGFnZXNlZ292aWEvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIC8vIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgLy8gei1pbmRleDogMTA7XHJcbn0iLCIuY2hhdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-scrollreveal */
    "./node_modules/ngx-scrollreveal/esm2015/ngx-scrollreveal.js");

    var AppComponent = function AppComponent(config) {
      _classCallCheck(this, AppComponent);

      // customize default values of ngx-scrollreveal directives used by this component tree
      config.duration = 2000;
      config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
      config.mobile = false; // config.rotate = { x:100,y:100,z:100}

      config.origin = "top"; //other options here
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_2__["NgsRevealConfig"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Componentes/nav-bar/nav-bar.component */
    "./src/app/Componentes/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _Componentes_section_chat_section_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Componentes/section-chat/section-chat.component */
    "./src/app/Componentes/section-chat/section-chat.component.ts");
    /* harmony import */


    var _Componentes_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Componentes/not-found/not-found.component */
    "./src/app/Componentes/not-found/not-found.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-scrollreveal */
    "./node_modules/ngx-scrollreveal/esm2015/ngx-scrollreveal.js"); // import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    // import { IntroComponent } from './Componentes/intro/intro.component';
    // import { SectionTextImgComponent } from './Componentes/section-text-img/section-text-img.component';
    // import { SectionOfertasComponent } from './Componentes/section-ofertas/section-ofertas.component';
    // import { SectionServiciosComponent } from './Componentes/section-servicios/section-servicios.component';
    // import { SectionContactosComponent } from './Componentes/section-contactos/section-contactos.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _Componentes_section_chat_section_chat_component__WEBPACK_IMPORTED_MODULE_6__["SectionChatComponent"], _Componentes_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_12__["NgsRevealModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      mapbox_key: 'pk.eyJ1IjoiZmVybmFuZG8xOTkxIiwiYSI6ImNrOGRlcHF2czBxd28zbW5wa3hsaTZnaWcifQ.g1IjAr-9rd65D5W93ftlew'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\FZ1891\Desktop\Proyectos\Angular\pagesegovia\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map