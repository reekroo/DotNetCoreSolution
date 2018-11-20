var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../../Services/data.user.service';
var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(dataService, router, activeRoute, location) {
        this.dataService = dataService;
        this.router = router;
        this.loaded = false;
        this.location = location;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id) {
            this.dataService.getUser()
                .subscribe(function (data) {
                _this.user = data;
                if (_this.user != null) {
                    _this.loaded = true;
                }
            });
        }
    };
    UserEditComponent.prototype.save = function () {
        var _this = this;
        this.dataService.updateUser(this.user).subscribe(function (data) { return _this.location.back(); });
    };
    UserEditComponent.prototype.backClicked = function () {
        this.location.back();
    };
    UserEditComponent = __decorate([
        Component({
            templateUrl: './user-edit.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, Router, ActivatedRoute, Location])
    ], UserEditComponent);
    return UserEditComponent;
}());
export { UserEditComponent };
//# sourceMappingURL=user-edit.js.map