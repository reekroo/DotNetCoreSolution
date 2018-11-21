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
import { RefinancingRateBankService } from '../../../Services/data.bank.refinancing.service';
var RefinancingComponent = /** @class */ (function () {
    function RefinancingComponent(dataService) {
        this.dataService = dataService;
    }
    RefinancingComponent.prototype.ngOnInit = function () {
        this.getTodayRate();
        this.getRates();
    };
    RefinancingComponent.prototype.getTodayRate = function () {
        var _this = this;
        this.dataService.getRefinancingRate(new Date()).subscribe(function (data) {
            _this.refinancingRate = data;
            console.log(_this.refinancingRate);
        });
    };
    RefinancingComponent.prototype.getRates = function () {
        var _this = this;
        this.dataService.getRefinancingRate(new Date()).subscribe(function (data) {
            _this.refinancingRates = data;
            _this.chartData = _this.addaptToChartData(data);
            console.log(_this.refinancingRates);
            console.log(_this.chartData);
        });
    };
    RefinancingComponent.prototype.addaptToChartData = function (array) {
        if (!array) {
            return;
        }
        var labels = [];
        var data = [];
        for (var i = 0; i < array.length; i++) {
            labels.push(new Date(array[i].Date).toLocaleDateString());
            data.push(array[i].Value);
        }
        var result = {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    borderWidth: 1
                }
            ]
        };
        return result;
    };
    RefinancingComponent = __decorate([
        Component({
            templateUrl: './refinancing-rate.html',
            styleUrls: ['./refinancing-rate.css'],
            providers: [RefinancingRateBankService]
        }),
        __metadata("design:paramtypes", [RefinancingRateBankService])
    ], RefinancingComponent);
    return RefinancingComponent;
}());
export { RefinancingComponent };
//# sourceMappingURL=refinancing-rate.js.map