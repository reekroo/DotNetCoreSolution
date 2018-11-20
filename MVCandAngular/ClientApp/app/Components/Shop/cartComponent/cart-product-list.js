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
import { UserCartDataService } from '../../../Services/data.user.cart.service';
var CartProductListComponent = /** @class */ (function () {
    function CartProductListComponent(dataService) {
        this.dataService = dataService;
    }
    CartProductListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dataService.removeProductFromCart(id).subscribe(function (data) {
            _this.products = _this.products.filter(function (x) { return x.id != id; });
        });
    };
    CartProductListComponent.prototype.deleteAll = function () {
        var _this = this;
        this.dataService.removeProductsFromCart().subscribe(function (data) {
            _this.products = [];
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CartProductListComponent.prototype, "products", void 0);
    CartProductListComponent = __decorate([
        Component({
            selector: "cart-list",
            templateUrl: './cart-product-list.html',
            styleUrls: ['./cart.css'],
            providers: [UserCartDataService]
        }),
        __metadata("design:paramtypes", [UserCartDataService])
    ], CartProductListComponent);
    return CartProductListComponent;
}());
export { CartProductListComponent };
//# sourceMappingURL=cart-product-list.js.map