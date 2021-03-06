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
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../../services/shop/data.shop.service';
var ShopProductDetailsComponent = /** @class */ (function () {
    function ShopProductDetailsComponent(dataService, activeRoute, location) {
        this.dataService = dataService;
        this.loaded = false;
        this.location = location;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    ShopProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id) {
            this.dataService.getProduct(this.id)
                .subscribe(function (data) { _this.product = data; _this.loaded = true; });
        }
        ;
    };
    ShopProductDetailsComponent.prototype.backClicked = function () {
        this.location.back();
    };
    ShopProductDetailsComponent = __decorate([
        Component({
            templateUrl: './product-details.html',
            styleUrls: ['./product-details.css'],
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, ActivatedRoute, Location])
    ], ShopProductDetailsComponent);
    return ShopProductDetailsComponent;
}());
export { ShopProductDetailsComponent };
//# sourceMappingURL=product-details.js.map