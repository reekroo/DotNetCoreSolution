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
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserAddressDataService } from '../../Services/data.user.address.service';
import { Address } from '../../Models/address';
var AddressCreateComponent = /** @class */ (function () {
    function AddressCreateComponent(dataService, router, location) {
        this.dataService = dataService;
        this.router = router;
        this.address = new Address();
        this.location = location;
    }
    AddressCreateComponent.prototype.save = function () {
        var _this = this;
        this.dataService.createAddress(this.address).subscribe(function (data) { return _this.location.back(); });
    };
    AddressCreateComponent.prototype.backClicked = function () {
        this.location.back();
    };
    AddressCreateComponent = __decorate([
        Component({
            templateUrl: './address-create.html',
            providers: [UserAddressDataService]
        }),
        __metadata("design:paramtypes", [UserAddressDataService, Router, Location])
    ], AddressCreateComponent);
    return AddressCreateComponent;
}());
export { AddressCreateComponent };
//# sourceMappingURL=address-create.js.map