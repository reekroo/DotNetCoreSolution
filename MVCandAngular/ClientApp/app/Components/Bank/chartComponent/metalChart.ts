import { Component, Input, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
    selector: 'metal-chart-form',
    templateUrl: './chart.html'
})

export class MetalChartComponent {

    chart: Chart;

    @Input() inputData: Object;

    ngOnChanges() {

        this.chart = new Chart('canvas', {
            type: 'line',
            data: this.inputData as Chart.ChartData,
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
    }
}
