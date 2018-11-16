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
        var labels = [];
        var data = [];
        if (this.rates) {
            for (var i = 0; i < this.rates.length; i++) {
                labels.push(new Date(this.rates[i].Date).toLocaleDateString());
                data.push(this.rates[i].Cur_OfficialRate);
            }
        }
        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                        label: 'Rate:',
                        data: data,
                        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                        borderColor: ['rgba(255,99,132,1)'],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ChartComponent.prototype, "rates", void 0);
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