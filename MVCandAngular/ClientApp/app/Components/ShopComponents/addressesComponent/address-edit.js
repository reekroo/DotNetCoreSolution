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
import { UserAddressDataService } from '../../../Services/data.user.address.service';
var AddressEditComponent = /** @class */ (function () {
    function AddressEditComponent(dataService, router, activeRoute, location) {
        this.dataService = dataService;
        this.router = router;
        this.loaded = false;
        this.location = location;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    AddressEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id)
            this.dataService.getAddress(this.id)
                .subscribe(function (data) {
                _this.address = data;
                if (_this.address != null)
                    _this.loaded = true;
            });
    };
    AddressEditComponent.prototype.save = function () {
        var _this = this;
        this.dataService.updateAddress(this.address).subscribe(function (data) { return _this.location.back(); });
    };
    AddressEditComponent.prototype.backClicked = function () {
        this.location.back();
    };
    AddressEditComponent = __decorate([
        Component({
            templateUrl: './address-edit.html',
            providers: [UserAddressDataService]
        }),
        __metadata("design:paramtypes", [UserAddressDataService, Router, ActivatedRoute, Location])
    ], AddressEditComponent);
    return AddressEditComponent;
}());
export { AddressEditComponent };
//# sourceMappingURL=address-edit.js.map