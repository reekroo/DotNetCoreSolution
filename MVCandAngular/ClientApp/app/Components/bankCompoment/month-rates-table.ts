﻿import { Component, Input } from '@angular/core';

import { Rate } from '../../Models/Bank/Rate';
import { MonthRate } from '../../Models/Bank/MonthRate';

@Component({
    templateUrl: './month-rates-table.html',
    styleUrls: ['./bank.css'],
    selector: 'month-rates-table'
})

export class MonthRateTableComponent  {

    monthRates: MonthRate[];

    @Input() rates: Rate[];

    ngOnChanges() {

        if (this.rates) {

            let data = [];

            for (var i = 1; i < this.rates.length; i++) {

                let rate = new MonthRate();

                rate.Date = new Date(this.rates[i].Date).toLocaleDateString();
                rate.Cur_Scale = this.rates[i].Cur_Scale;
                rate.Cur_OfficialRate = this.rates[i].Cur_OfficialRate;
                rate.Delta = this.rates[i].Cur_OfficialRate - this.rates[i - 1].Cur_OfficialRate;

                rate.Delta = Number((rate.Delta).toFixed(5));

                data.push(rate);
            }

            this.monthRates = data.sort(function (a, b) {
                var c = new Date(a.Date);
                var d = new Date(b.Date);
                return c > d ? -1 : c < d ? 1 : 0;
            }) as MonthRate[];
        }
    }
}