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
import { BankService } from '../../../services/bank/data.bank.currencies.service';
import { CurrencyViewModel } from '../view-models/currency-view-model';
var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent(dataService) {
        this.dataService = dataService;
        this.validCurrncies = [
            323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 290,
            291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321,
            286, 232, 191, 184, 170, 145, 143, 130, 119, 74, 72, 68, 27, 23
        ];
        this.currencyView = new CurrencyViewModel();
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        this.getCurrencies();
    };
    CurrencyComponent.prototype.getCurrencies = function () {
        var _this = this;
        this.dataService.getCurrencies().subscribe(function (data) {
            if (data) {
                _this.currencyView.currencies = data.filter(function (r) { return _this.validCurrncies.indexOf(r.Cur_ID) >= 0; });
            }
            else {
                _this.currencyView.currencies = [];
            }
            ;
        });
    };
    CurrencyComponent.prototype.getRate = function (id) {
        var _this = this;
        var date = new Date();
        var yesterday = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 1);
        var a1$ = this.dataService.getRate(id);
        var a2$ = this.dataService.getRateByDate(id, yesterday);
        combineLatest(a1$, a2$).subscribe(function (combinedResult) {
            _this.currencyView.rate = combinedResult[0];
            _this.currencyView.rate.Date = new Date(_this.currencyView.rate.Date).toLocaleDateString();
            _this.currencyView.delta = _this.currencyView.rate.Cur_OfficialRate - combinedResult[1].Cur_OfficialRate;
            _this.currencyView.delta = Number((_this.currencyView.delta).toFixed(5));
            if (_this.currencyView.delta > 0) {
                _this.currencyView.isUpper = true;
            }
            else {
                _this.currencyView.isUpper = false;
            }
        });
        var end = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());
        date.setFullYear(date.getFullYear() - 1);
        var start = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());
        this.dataService.getRateByPeriod(id, start, end).subscribe(function (data) {
            _this.currencyView.chartData = _this.addaptToChartData(data);
            var previusMonthData = new Date();
            previusMonthData.setMonth(previusMonthData.getMonth() - 1);
            previusMonthData.setDate(previusMonthData.getDate() - 2);
            _this.currencyView.rates = data;
            _this.currencyView.monthRates = data.filter(function (x) { return new Date(x.Date) >= previusMonthData; });
        });
        this.currencyView.showDefaultSection = false;
    };
    CurrencyComponent.prototype.addaptToChartData = function (array) {
        if (!array) {
            return;
        }
        array = array.sort(function (a, b) {
            var c = new Date(a.Date);
            var d = new Date(b.Date);
            return c < d ? -1 : c > d ? 1 : 0;
        });
        var labels = [];
        var data = [];
        for (var i = 0; i < array.length; i++) {
            labels.push(new Date(array[i].Date).toLocaleDateString());
            data.push(array[i].Cur_OfficialRate);
        }
        var result = {
            labels: labels,
            datasets: [{
                    label: 'rate',
                    data: data,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    borderColor: ['rgba(255,99,132,1)'],
                    borderWidth: 1
                }]
        };
        return result;
    };
    CurrencyComponent = __decorate([
        Component({
            templateUrl: './currency-controller.html',
            styles: [require('../../../assets/less/bank/currency.less')],
            providers: [BankService]
        }),
        __metadata("design:paramtypes", [BankService])
    ], CurrencyComponent);
    return CurrencyComponent;
}());
export { CurrencyComponent };
//# sourceMappingURL=currency-controller.js.map