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
import { MonthRate } from '../../../../models/bank/month-rate';
var MonthRateTableComponent = /** @class */ (function () {
    function MonthRateTableComponent() {
    }
    MonthRateTableComponent.prototype.ngOnChanges = function () {
        if (this.rates) {
            this.rates = this.rates.sort(function (a, b) {
                var c = new Date(a.Date);
                var d = new Date(b.Date);
                return c > d ? -1 : c < d ? 1 : 0;
            });
            var data = [];
            for (var i = 0; i < this.rates.length - 1; i++) {
                var rate = new MonthRate();
                rate.Date = new Date(this.rates[i].Date).toLocaleDateString();
                rate.Cur_Scale = this.rates[i].Cur_Scale;
                rate.Cur_OfficialRate = this.rates[i].Cur_OfficialRate;
                rate.Delta = this.rates[i].Cur_OfficialRate - this.rates[i + 1].Cur_OfficialRate;
                rate.Delta = Number((rate.Delta).toFixed(5));
                data.push(rate);
            }
            this.monthRates = data;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], MonthRateTableComponent.prototype, "rates", void 0);
    MonthRateTableComponent = __decorate([
        Component({
            selector: 'month-rates-table-section',
            templateUrl: './month-rates-table-section.html',
            styles: [require('../../../../assets/less/bank/currency-rate-colorising.less')]
        })
    ], MonthRateTableComponent);
    return MonthRateTableComponent;
}());
export { MonthRateTableComponent };
//# sourceMappingURL=month-rates-table-section.js.map