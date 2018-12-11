import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { MetalBankService } from '../../../Services/bank/data.bank.ingots.service';

import { Metal } from '../../../Models/Bank/Metal';
import { Ingot } from '../../../Models/Bank/Ingot';
import { IngotViewModel } from '../view-models/ingot-view-model';

@Component({
    templateUrl: './metal-controller.html',
    styles: [require('../../../assets/less/bank/metal.less')],
    providers: [MetalBankService]
})

export class MetalComponent implements OnInit {
    
    ingotViewModel: IngotViewModel = new IngotViewModel();

    ngOnInit() {

        this.getMetals();
    }

    constructor(private dataService: MetalBankService) {
    }

    getMetals() {

        this.dataService.getMetals().subscribe((data: Metal[]) => {
            
            this.ingotViewModel.metals = data;
        });
    }

    getRate(id: number) {

        this.dataService.getPrice(id, new Date()).subscribe((data: Ingot[]) => {

            this.ingotViewModel.ingotsRate = data;

            this.ingotViewModel.showDefault = false;
        });

        this.getYearPeriod(id);
    }

    private getYearPeriod(id: number) {

        let date = new Date();
        
        let today$ = this.dataService.getPrice(id, date);        
        let oneweek$ = this.dataService.getPrice(id, new Date(new Date().setDate(date.getDate() - 7)));
        let twoweek$ = this.dataService.getPrice(id, new Date(new Date().setDate(date.getDate() - 14)));
        let month$ = this.dataService.getPrice(id, new Date(new Date().setDate(date.getMonth() - 1)));
        let twomonth$ = this.dataService.getPrice(id, new Date(new Date().setMonth(date.getMonth() - 2)));
        let threemonth$ = this.dataService.getPrice(id, new Date(new Date().setMonth(date.getMonth() - 3)));
        let sixmonth$ = this.dataService.getPrice(id, new Date(new Date().setMonth(date.getMonth() - 6)));
        let ninemonth$ = this.dataService.getPrice(id, new Date(new Date().setMonth(date.getMonth() - 9)));
        let year$ = this.dataService.getPrice(id, new Date(new Date().setMonth(date.getMonth() - 12)));
        let twoyear$ = this.dataService.getPrice(id, new Date(new Date().setMonth(date.getMonth() - 24)));

        combineLatest(today$, oneweek$, twoweek$, month$, twomonth$, threemonth$, sixmonth$, ninemonth$, year$, twoyear$).subscribe(combinedResult => {

            let arr = [];

            arr.push(combinedResult[0][0]);
            arr.push(combinedResult[1][0]);
            arr.push(combinedResult[2][0]);
            arr.push(combinedResult[3][0]);
            arr.push(combinedResult[4][0]);
            arr.push(combinedResult[5][0]);
            arr.push(combinedResult[6][0]);
            arr.push(combinedResult[7][0]);
            arr.push(combinedResult[8][0]);
            arr.push(combinedResult[9][0]);

            let oneGramRate = arr as Ingot[];

            this.ingotViewModel.chartData = this.addaptToChartData(oneGramRate);
        });
    }

    private addaptToChartData(array: Ingot[]) {

        if (!array) {

            return;
        }

        array = array.sort(function (a, b) {
            var c = new Date(a.Date);
            var d = new Date(b.Date);
            return c < d ? -1 : c > d ? 1 : 0;
        }) as Ingot[];

        var labels = [];
        var data1 = [];
        var data2 = [];
                
        for (var i = 0; i < array.length; i++) {

            labels.push(new Date(array[i].Date).toLocaleDateString());
            data1.push(array[i].CertificateRubles);
            data2.push(array[i].EntitiesRubles);
        }
        
        let result = {
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
        }

        return result;
    }
}