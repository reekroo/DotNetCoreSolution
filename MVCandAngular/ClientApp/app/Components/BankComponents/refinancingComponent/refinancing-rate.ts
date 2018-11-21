import { Component, OnInit } from '@angular/core';

import { RefinancingRateBankService } from '../../../Services/data.bank.refinancing.service';

import { RefinancingRate } from '../../../Models/Bank/RefinancingRate';


@Component({
    templateUrl: './refinancing-rate.html',
    styleUrls: ['./refinancing-rate.css'],
    providers: [RefinancingRateBankService]
})

export class RefinancingComponent implements OnInit {

    refinancingRate: RefinancingRate;
    refinancingRates: RefinancingRate[];
    chartData: Object;
    
    ngOnInit() {

        this.getTodayRate();
        this.getRates();
    }

    constructor(private dataService: RefinancingRateBankService) {
    }

    private getTodayRate() {

        this.dataService.getRefinancingRate(new Date()).subscribe((data) => {
            
            this.refinancingRate = data[0] as RefinancingRate;

            this.refinancingRate.Date = new Date(this.refinancingRate.Date).toLocaleDateString();
        });
    }
    
    private getRates() {

        this.dataService.getDunamicRefinancingRate().subscribe((data: RefinancingRate[]) => {

            this.refinancingRates = data;
            this.chartData = this.addaptToChartData(data);
        });
    }

    private addaptToChartData(array: RefinancingRate[]) {

        if (!array) {

            return;
        }

        array = array.sort(function (a, b) {
            var c = new Date(a.Date);
            var d = new Date(b.Date);
            return c < d ? -1 : c > d ? 1 : 0;
        }) as RefinancingRate[];

        let labels = [];
        let data = [];

        for (var i = 0; i < array.length; i++) {

            labels.push(new Date(array[i].Date).toLocaleDateString());
            data.push(array[i].Value);
        }

        let result = {
            labels: labels,
            datasets: [
                {
                    label: 'refinancing rate',
                    data: data,
                    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    borderWidth: 1
                }
            ]
        }

        return result;
    }
}