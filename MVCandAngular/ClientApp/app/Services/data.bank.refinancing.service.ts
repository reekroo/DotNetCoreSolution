﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RefinancingRateBankService {

    private refinancingRateUrl = "https://www.nbrb.by/API/RefinancingRate/";
    
    constructor(private http: HttpClient) { }

    getDunamicRefinancingRate() {

        return this.http.get(this.refinancingRateUrl);
    }

    getRefinancingRate(date: Date) {
        
        let d = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 1);

        return this.http.get(this.refinancingRateUrl + '?onDate=' + d);
    }
}