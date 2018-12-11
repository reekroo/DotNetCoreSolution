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
import { DataService } from '../../../services/shop/data.products.service';
var ProductsEditComponent = /** @class */ (function () {
    function ProductsEditComponent(dataService, router, activeRoute, location) {
        this.dataService = dataService;
        this.router = router;
        this.loaded = false;
        this.location = location;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    ProductsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id)
            this.dataService.getProduct(this.id)
                .subscribe(function (data) {
                _this.product = data;
                if (_this.product != null)
                    _this.loaded = true;
            });
    };
    ProductsEditComponent.prototype.save = function () {
        var _this = this;
        this.dataService.updateProduct(this.product).subscribe(function (data) { return _this.location.back(); });
    };
    ProductsEditComponent.prototype.backClicked = function () {
        this.location.back();
    };
    ProductsEditComponent = __decorate([
        Component({
            templateUrl: './product-edit.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, Router, ActivatedRoute, Location])
    ], ProductsEditComponent);
    return ProductsEditComponent;
}());
export { ProductsEditComponent };
//# sourceMappingURL=product-edit.js.map