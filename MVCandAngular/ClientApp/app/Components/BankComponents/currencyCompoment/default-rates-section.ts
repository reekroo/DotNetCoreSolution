import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { BankService } from '../../../Services/data.bank.service';

import { Rate } from '../../../Models/Bank/Rate';

@Component({
    selector: 'default-rates-section',
    templateUrl: './default-rates-section.html',
    styleUrls: ['./currency.css']
})

export class DefaultRatesComponent implements OnInit {

    defaultRates: Rate[];

    ngOnInit() {

        this.getDefaultRates();
    }

    constructor(private dataService: BankService) {
    }

    getDefaultRates() {

        var usd$ = this.dataService.getRate(145);
        var eur$ = this.dataService.getRate(292);
        var rub$ = this.dataService.getRate(298);

        combineLatest(usd$, eur$, rub$).subscribe(combinedResult => {

            let arr = [];

            arr.push(combinedResult[0]);
            arr.push(combinedResult[1]);
            arr.push(combinedResult[2]);

            this.defaultRates = arr as Rate[];
        });

    }

}