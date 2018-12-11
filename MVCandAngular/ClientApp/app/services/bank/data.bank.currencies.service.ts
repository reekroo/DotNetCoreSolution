import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BankService {

    private currenciesUrl = "https://www.nbrb.by/API/ExRates/Currencies";
    private ratesUrl = "https://www.nbrb.by/API/ExRates/Rates/840?ParamMode=1";
    private periodUrl = "https://www.nbrb.by/API/ExRates/Rates/Dynamics/298?startDate=2016-7-1&endDate=2016-7-30";

    constructor(private http: HttpClient) { }

    getCurrencies() {

        return this.http.get(this.currenciesUrl);
    };


    getRate(id: number) {

        return this.http.get("https://www.nbrb.by/API/ExRates/Rates/" + id + "?ParamMode=0");
    };

    getRateByPeriod(id: number, start: string, end: string) {

        return this.http.get("https://www.nbrb.by/API/ExRates/Rates/Dynamics/" + id + "?startDate=" + start + "&endDate=" + end);
    }

    getRateByDate(id: number, date: string) {

        return this.http.get("https://www.nbrb.by/API/ExRates/Rates/" + id + "?ParamMode=0&onDate=" + date);
    }
}