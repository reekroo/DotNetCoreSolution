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
import { BankService } from '../../Services/data.bank.service';
import { combineLatest } from 'rxjs';
var BankComponent = /** @class */ (function () {
    function BankComponent(dataService) {
        this.dataService = dataService;
        this.isUpper = false;
        this.delta = 0.0;
    }
    BankComponent.prototype.ngOnInit = function () {
        this.getCurrencies();
    };
    BankComponent.prototype.getCurrencies = function () {
        var _this = this;
        this.dataService.getCurrencies().subscribe(function (data) {
            if (data) {
                _this.currencies = data;
            }
            else {
                _this.currencies = [];
            }
            ;
        });
    };
    BankComponent.prototype.getRate = function (id) {
        var _this = this;
        var date = new Date();
        var yesterday = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 1);
        var a1$ = this.dataService.getRate(id);
        var a2$ = this.dataService.getRateByDate(id, yesterday);
        combineLatest(a1$, a2$).subscribe(function (combinedResult) {
            _this.rate = combinedResult[0];
            _this.rate.Date = new Date(_this.rate.Date).toLocaleDateString();
            _this.delta = _this.rate.Cur_OfficialRate - combinedResult[1].Cur_OfficialRate;
            _this.delta = Number((_this.delta).toFixed(5));
            if (_this.delta > 0) {
                _this.isUpper = true;
            }
            else {
                _this.isUpper = false;
            }
        });
        var end = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1);
        date.setFullYear(date.getFullYear() - 1);
        var start = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());
        this.dataService.getRateByPeriod(id, start, end).subscribe(function (data) {
            _this.rates = data;
            var previusMonthData = new Date();
            previusMonthData.setMonth(previusMonthData.getMonth() - 1);
            previusMonthData.setDate(previusMonthData.getDate() - 2);
            _this.monthRates = _this.rates.filter(function (x) { return new Date(x.Date) >= previusMonthData; });
        });
    };
    BankComponent = __decorate([
        Component({
            templateUrl: './bank.html',
            styleUrls: ['./bank.css'],
            providers: [BankService]
        }),
        __metadata("design:paramtypes", [BankService])
    ], BankComponent);
    return BankComponent;
}());
export { BankComponent };
//# sourceMappingURL=bank.js.map