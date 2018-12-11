var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { UserAddressDataService } from '../../../services/shop/data.user.address.service';
var AddressListComponent = /** @class */ (function () {
    function AddressListComponent(dataService) {
        this.dataService = dataService;
    }
    AddressListComponent.prototype.remove = function (id) {
        var _this = this;
        this.dataService.removeAddress(id).subscribe(function (data) {
            _this.addresses = _this.addresses.filter(function (x) { return x.id != id; });
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AddressListComponent.prototype, "addresses", void 0);
    AddressListComponent = __decorate([
        Component({
            selector: "address-list",
            templateUrl: './address-list.html',
            styleUrls: ['./address.css']
        }),
        __metadata("design:paramtypes", [UserAddressDataService])
    ], AddressListComponent);
    return AddressListComponent;
}());
export { AddressListComponent };
//# sourceMappingURL=address-list.js.map