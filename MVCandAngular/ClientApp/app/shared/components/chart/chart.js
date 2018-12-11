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
import { Chart } from 'chart.js';
var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnChanges = function () {
        var data = this.inputData;
        if (!this.chart) {
            this.createChart(data);
        }
        else {
            this.removeData(this.chart);
            this.addData(this.chart, data);
        }
    };
    ChartComponent.prototype.createChart = function (data) {
        this.chart = new Chart('canvas', {
            type: 'line',
            data: data,
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                }
            }
        });
    };
    ChartComponent.prototype.addData = function (chart, data) {
        chart.data = data;
        chart.update();
    };
    ChartComponent.prototype.removeData = function (chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach(function (dataset) {
            dataset.data.pop();
        });
        chart.update();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "inputData", void 0);
    ChartComponent = __decorate([
        Component({
            selector: 'chart-form',
            templateUrl: './chart.html'
        })
    ], ChartComponent);
    return ChartComponent;
}());
export { ChartComponent };
//# sourceMappingURL=chart.js.map