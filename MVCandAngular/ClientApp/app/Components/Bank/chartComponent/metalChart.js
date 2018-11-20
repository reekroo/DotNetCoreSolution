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
var MetalChartComponent = /** @class */ (function () {
    function MetalChartComponent() {
    }
    MetalChartComponent.prototype.ngOnChanges = function () {
        this.chart = new Chart('canvas', {
            type: 'line',
            data: this.inputData,
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
        __metadata("design:type", Object)
    ], MetalChartComponent.prototype, "inputData", void 0);
    MetalChartComponent = __decorate([
        Component({
            selector: 'metal-chart-form',
            templateUrl: './chart.html'
        })
    ], MetalChartComponent);
    return MetalChartComponent;
}());
export { MetalChartComponent };
//# sourceMappingURL=metalChart.js.map