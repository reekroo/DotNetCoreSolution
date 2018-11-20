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
import { Product } from '../../../Models/Shop/product';
var ProductsFormComponent = /** @class */ (function () {
    function ProductsFormComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Product)
    ], ProductsFormComponent.prototype, "product", void 0);
    ProductsFormComponent = __decorate([
        Component({
            selector: "product-form",
            templateUrl: './product-form.html'
        })
    ], ProductsFormComponent);
    return ProductsFormComponent;
}());
export { ProductsFormComponent };
//# sourceMappingURL=product-form.js.map