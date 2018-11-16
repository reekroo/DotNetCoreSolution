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
import { combineLatest } from 'rxjs';
import { DataService } from '../../Services/data.user.service';
import { UserAddressDataService } from '../../Services/data.user.address.service';
import { UserCartDataService } from '../../Services/data.user.cart.service';
var FullUserComponent = /** @class */ (function () {
    function FullUserComponent(dataService, userAddressDataService, userCartDataService) {
        this.dataService = dataService;
        this.userAddressDataService = userAddressDataService;
        this.userCartDataService = userCartDataService;
        this.showAddresses = false;
        this.showCart = false;
    }
    FullUserComponent.prototype.ngOnInit = function () {
        this.load();
    };
    FullUserComponent.prototype.load = function () {
        var _this = this;
        var user$ = this.dataService.getUser();
        var address$ = this.userAddressDataService.getAddresses();
        var cart$ = this.userCartDataService.getCartProducts();
        combineLatest(user$, address$, cart$).subscribe(function (combinedResult) {
            _this.user = combinedResult[0];
            _this.userAddresses = combinedResult[1];
            if (combinedResult[1]) {
                _this.showAddresses = true;
            }
            var cart = combinedResult[2];
            console.log(cart.products.length);
            _this.userProducts = cart.products;
            if (combinedResult[2]) {
                _this.showCart = true;
            }
        });
    };
    FullUserComponent = __decorate([
        Component({
            templateUrl: './full-user.html',
            providers: [DataService, UserAddressDataService, UserCartDataService]
        }),
        __metadata("design:paramtypes", [DataService, UserAddressDataService, UserCartDataService])
    ], FullUserComponent);
    return FullUserComponent;
}());
export { FullUserComponent };
//# sourceMappingURL=full-user.js.map