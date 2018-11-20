import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MetalBankService {

    private metalsUrl = "https://www.nbrb.by/API/Metals/";
    private priceUrl = "https://www.nbrb.by/API/Ingots/Prices/";

    constructor(private http: HttpClient) { }

    getMetals() {

        return this.http.get(this.metalsUrl);
    };

    getMetal(id: number) {
        
        return this.http.get(this.metalsUrl + id);
    }

    getPrices(date: Date) {

        return this.http.get(this.priceUrl + '?onDate=' + date);
    }

    getPrice(id: number, date: Date) {
        
        let d = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 1);

        return this.http.get(this.priceUrl + id + '?onDate=' + d);
    }
}