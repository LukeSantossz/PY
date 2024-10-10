"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser"); // Certifique-se de que BrowserModule está importado corretamente
var app_routing_module_1 = require("./app-routing.module"); // Corrigir a importação do AppRoutingModule
var app_component_1 = require("./app.component"); // Corrigir a importação do AppComponent
var login_component_1 = require("./login/login.component"); // Certifique-se de que o caminho para LoginComponent está correto
var register_component_1 = require("./register/register.component"); // Certifique-se de que o caminho está correto
var home_1 = require("/project-y/src/app/home");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                home_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule // Certifique-se de que AppRoutingModule está importado corretamente
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent] // Certifique-se de que AppComponent está listado no bootstrap
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
