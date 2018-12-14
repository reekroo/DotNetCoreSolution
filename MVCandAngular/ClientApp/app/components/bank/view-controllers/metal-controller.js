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
import { MetalBankService } from '../../../services/bank/data.bank.ingots.service';
import { IngotViewModel } from '../view-models/ingot-view-model';
var MetalComponent = /** @class */ (function () {
    function MetalComponent(dataService) {
        this.dataService = dataService;
        this.ingotViewModel = new IngotViewModel();
    }
    MetalComponent.prototype.ngOnInit = function () {
        this.getMetals();
    };
    MetalComponent.prototype.getMetals = function () {
        var _this = this;
        this.dataService.getMetals().subscribe(function (data) { _this.ingotViewModel.metals = data; });
    };
    MetalComponent.prototype.getRate = function (id) {
        var _this = this;
        this.dataService.getPrice(id, new Date()).subscribe(function (data) {
            _this.ingotViewModel.ingotsRate = data;
            _this.ingotViewModel.showDefault = false;
        });
        this.getChart(id, 0);
    };
    MetalComponent.prototype.getChart = function (id, index) {
        //this.ingotViewModel.selectedGramIndex = index;
        //this.ingotViewModel.chartData = this.addaptToChartData(this.getYearIngotStatistics(id, index));
        this.getYearIngotStatistics(id, index);
    };
    MetalComponent.prototype.getYearIngotStatistics = function (ingotId, index) {
        var _this = this;
        var date = new Date();
        var today$ = this.dataService.getPrice(ingotId, date);
        var oneweek$ = this.dataService.getPrice(ingotId, new Date(new Date().setDate(date.getDate() - 7)));
        var twoweek$ = this.dataService.getPrice(ingotId, new Date(new Date().setDate(date.getDate() - 14)));
        var month$ = this.dataService.getPrice(ingotId, new Date(new Date().setDate(date.getMonth() - 1)));
        var twomonth$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 2)));
        var threemonth$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 3)));
        var sixmonth$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 6)));
        var ninemonth$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 9)));
        var year$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 12)));
        var twoyear$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 24)));
        combineLatest(today$, oneweek$, twoweek$, month$, twomonth$, threemonth$, sixmonth$, ninemonth$, year$, twoyear$)
            .subscribe(function (combinedResult) {
            var arr = [];
            arr.push(combinedResult[0][index]);
            arr.push(combinedResult[1][index]);
            arr.push(combinedResult[2][index]);
            arr.push(combinedResult[3][index]);
            arr.push(combinedResult[4][index]);
            arr.push(combinedResult[5][index]);
            arr.push(combinedResult[6][index]);
            arr.push(combinedResult[7][index]);
            arr.push(combinedResult[8][index]);
            arr.push(combinedResult[9][index]);
            //return arr as Ingot[];
            _this.ingotViewModel.selectedGramIndex = index;
            _this.ingotViewModel.chartData = _this.addaptToChartData(arr);
        });
    };
    MetalComponent.prototype.addaptToChartData = function (array) {
        if (!array) {
            return;
        }
        array = array.sort(function (a, b) {
            var c = new Date(a.Date);
            var d = new Date(b.Date);
            return c < d ? -1 : c > d ? 1 : 0;
        });
        var labels = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < array.length; i++) {
            labels.push(new Date(array[i].Date).toLocaleDateString());
            data1.push(array[i].CertificateRubles);
            data2.push(array[i].EntitiesRubles);
        }
        var result = {
            labels: labels,
            datasets: [
                {
                    label: 'bank buys',
                    data: data1,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    borderColor: ['rgba(255,99,132,1)'],
                    borderWidth: 1
                },
                {
                    label: 'bank sells',
                    data: data2,
                    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    borderWidth: 1
                }
            ]
        };
        return result;
    };
    MetalComponent = __decorate([
        Component({
            templateUrl: './metal-controller.html',
            styles: [require('../../../assets/less/bank/metal.less')],
            providers: [MetalBankService]
        }),
        __metadata("design:paramtypes", [MetalBankService])
    ], MetalComponent);
    return MetalComponent;
}());
export { MetalComponent };
//# sourceMappingURL=metal-controller.js.map