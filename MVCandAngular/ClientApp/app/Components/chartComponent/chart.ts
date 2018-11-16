import { Component, Input, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

import { Rate } from '../../Models/Bank/Rate';

@Component({
    selector: 'chart-form',
    templateUrl: './chart.html'
})

export class ChartComponent {

    chart: Chart;

    @Input() rates: Rate[];
  
    ngOnChanges() {

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
    }
}
