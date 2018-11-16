var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var UserAddressDataService = /** @class */ (function () {
    function UserAddressDataService(http) {
        this.http = http;
        this.url = "/api/address";
    }
    UserAddressDataService.prototype.getAddresses = function () {
        return this.http.get(this.url);
    };
    UserAddressDataService.prototype.getAddress = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    UserAddressDataService.prototype.createAddress = function (address) {
        return this.http.post(this.url, address);
    };
    UserAddressDataService.prototype.updateAddress = function (address) {
        return this.http.put(this.url + '/' + address.id, address);
    };
    UserAddressDataService.prototype.removeAddress = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    UserAddressDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UserAddressDataService);
    return UserAddressDataService;
}());
export { UserAddressDataService };
//# sourceMappingURL=data.user.address.service.js.map