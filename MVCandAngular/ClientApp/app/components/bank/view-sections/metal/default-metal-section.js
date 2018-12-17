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
import { MetalBankService } from '../../../../services/bank/data.bank.ingots.service';
var DefaultMetalRatesComponent = /** @class */ (function () {
    function DefaultMetalRatesComponent(dataService) {
        this.dataService = dataService;
    }
    DefaultMetalRatesComponent.prototype.ngOnInit = function () {
        this.getDefaultRates();
    };
    DefaultMetalRatesComponent.prototype.getDefaultRates = function () {
        var _this = this;
        var date = new Date();
        var gold$ = this.dataService.getPrice(0, date);
        var silver$ = this.dataService.getPrice(1, date);
        var platinum$ = this.dataService.getPrice(2, date);
        combineLatest(gold$, silver$, platinum$).subscribe(function (combinedResult) {
            var arr = [];
            arr.push(combinedResult[0][0]);
            arr.push(combinedResult[1][0]);
            arr.push(combinedResult[2][0]);
            arr[0].Name = "Gold";
            arr[1].Name = "Silver";
            arr[2].Name = "Platinum";
            _this.defaultMetalRates = arr;
            console.log(_this.defaultMetalRates);
        });
    };
    DefaultMetalRatesComponent = __decorate([
        Component({
            selector: 'default-metal-section',
            styles: [require('../../../../assets/less/bank/default-ingot-section.less')],
            templateUrl: './default-metal-section.html',
            providers: [MetalBankService]
        }),
        __metadata("design:paramtypes", [MetalBankService])
    ], DefaultMetalRatesComponent);
    return DefaultMetalRatesComponent;
}());
export { DefaultMetalRatesComponent };
//# sourceMappingURL=default-metal-section.js.map