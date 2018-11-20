import { Component, OnInit } from '@angular/core';

import { BankService } from '../../../Services/data.bank.service';

import { Currency } from '../../../Models/Bank/Currency';
import { Rate } from '../../../Models/Bank/Rate';
import { combineLatest } from 'rxjs';


@Component({
    templateUrl: './bank.html',
    styleUrls: ['./bank.css'],
    providers: [BankService]
})

export class BankComponent implements OnInit {

    private validCurrncies = [
        323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 290,
        291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321,
        286, 232, 191, 184, 170, 145, 143, 130, 119, 74, 72, 68, 27, 23]
    ;

    currencies: Currency[];
    rate: Rate;
    rates: Rate[];
    monthRates: Rate[];

    showDefaultSection: boolean = true;
    isUpper: boolean = false;
    delta: number = 0.0;

    ngOnInit() {

        this.getCurrencies();
    }

    constructor(private dataService: BankService) {
    }

    getCurrencies() {

        this.dataService.getCurrencies().subscribe((data: any) => {

            if (data) {                

                let found = (data as Currency[]).filter(r => this.validCurrncies.indexOf(r.Cur_ID) >= 0);

                this.currencies = found;
            } else {

                this.currencies = [];
            };
        });
    }

    getRate(id: number) {

        let date = new Date();
        let yesterday = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 1);

        var a1$ = this.dataService.getRate(id);
        var a2$ = this.dataService.getRateByDate(id, yesterday);

        combineLatest(a1$, a2$).subscribe(combinedResult => {

            this.rate = combinedResult[0] as Rate;
            this.rate.Date = new Date(this.rate.Date).toLocaleDateString();

            this.delta = this.rate.Cur_OfficialRate - (combinedResult[1] as Rate).Cur_OfficialRate;

            this.delta = Number((this.delta).toFixed(5));

            if (this.delta > 0) {
                this.isUpper = true;
            } else {
                this.isUpper = false;
            }
        });

        let end = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1);
        date.setFullYear(date.getFullYear() - 1);
        let start = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());
                
        this.dataService.getRateByPeriod(id, start, end).subscribe((data: any) => {

            this.rates = data as Rate[];
            
            let previusMonthData = new Date();
            previusMonthData.setMonth(previusMonthData.getMonth() - 1);
            previusMonthData.setDate(previusMonthData.getDate() - 2);

            this.monthRates = this.rates.filter(x => new Date(x.Date) >= previusMonthData);
        });

        this.showDefaultSection = false;
    }
}