"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var NavbarComponent = (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        window.addEventListener("message", this.receiveMessage.bind(this), false);
    };
    NavbarComponent.prototype.route = function () {
        var wnd = window.open("api/login");
    };
    NavbarComponent.prototype.receiveMessage = function (event) {
        if (event.origin !== "http://localhost:8080") {
            console.log(event.origin);
            return false;
        }
        console.log(event.data);
        this.router.navigate(["/timer"]);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map