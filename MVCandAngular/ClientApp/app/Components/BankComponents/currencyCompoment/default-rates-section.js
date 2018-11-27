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
import { BankService } from '../../../Services/data.bank.service';
var DefaultRatesComponent = /** @class */ (function () {
    function DefaultRatesComponent(dataService) {
        this.dataService = dataService;
    }
    DefaultRatesComponent.prototype.ngOnInit = function () {
        this.getDefaultRates();
    };
    DefaultRatesComponent.prototype.getDefaultRates = function () {
        var _this = this;
        var usd$ = this.dataService.getRate(145);
        var eur$ = this.dataService.getRate(292);
        var rub$ = this.dataService.getRate(298);
        combineLatest(usd$, eur$, rub$).subscribe(function (combinedResult) {
            var arr = [];
            arr.push(combinedResult[0]);
            arr.push(combinedResult[1]);
            arr.push(combinedResult[2]);
            _this.defaultRates = arr;
        });
    };
    DefaultRatesComponent = __decorate([
        Component({
            selector: 'default-rates-section',
            templateUrl: './default-rates-section.html'
        }),
        __metadata("design:paramtypes", [BankService])
    ], DefaultRatesComponent);
    return DefaultRatesComponent;
}());
export { DefaultRatesComponent };
//# sourceMappingURL=default-rates-section.js.map