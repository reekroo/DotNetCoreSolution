import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { BankService } from '../../../services/bank/data.bank.currencies.service';
import { RefinancingRateBankService } from '../../../services/bank/data.bank.refinancing.service';

import { TutNewsService } from '../../../services/news/data.news.tut.service';
import { OnlinerNewsService } from '../../../services/news/data.news.onliner.service';
import { CityDogNewsService } from '../../../services/news/data.news.citydog.service';
import { SvobodaNewsService } from '../../../services/news/data.news.svoboda.service';

import { WeatherService } from '../../../services/weather/data.weather.service';

import { Rate } from '../../../models/bank/rate';
import { RefinancingRate } from '../../../models/bank/refinancing-rate';
import { News } from '../../../models/news/news';
import { CityWeather } from '../../../models/weather/city-weather';
import { Weather } from '../../../models/weather/city-weather';

import { HomeViewModel } from '../view-models/home-view-model';
import { CityForecast } from '../../../models/weather/city-forecast';


@Component({
    templateUrl: './home-controller.html',
    providers: [
        BankService, RefinancingRateBankService,
        TutNewsService, OnlinerNewsService, CityDogNewsService, SvobodaNewsService,
        WeatherService
    ]
})

export class HomeComponent implements OnInit {

    homeViewModel: HomeViewModel = new HomeViewModel();

    ngOnInit() {

        this.getRefinancingRate();
        this.getWeather();
        this.getCurrentCurrencyRates();
        this.getLastNews();
    }

    constructor(
        private bank: BankService,
        private refinancingRate: RefinancingRateBankService,
        private tut: TutNewsService,
        private onliner: OnlinerNewsService,
        private citydog: CityDogNewsService,
        private svoboda: SvobodaNewsService,
        private weather: WeatherService
    ) { }

    public dateFormatter(unixUtcTime:number):string {
        
        return (new Date(unixUtcTime * 1000).toLocaleTimeString());
    }

    public getDescription(array: Weather[]): string {

        if (array.length < 1) {
            return '';
        }

        return array[0].description;
    }
    
    public getIcon(array: Weather[]): string {

        if (array.length < 1) {
            return '';
        }

        return array[0].icon;
    }

    public getTemp(temp: number): number {

        return Number((temp - 273).toFixed(2));
    }

    private getCurrentCurrencyRates() {

        var usd$ = this.bank.getRate(145);
        var eur$ = this.bank.getRate(292);
        var rub$ = this.bank.getRate(298);

        combineLatest(usd$, eur$, rub$).subscribe(combinedResult => {

            let arr = [];

            arr.push(combinedResult[0]);
            arr.push(combinedResult[1]);
            arr.push(combinedResult[2]);

            this.homeViewModel.currentRates = arr as Rate[];
        });
    }

    private getRefinancingRate() {

        this.homeViewModel.refinancingRate = new RefinancingRate();

        this.refinancingRate.getRefinancingRate(new Date()).subscribe((data: RefinancingRate[]) => {
            
            this.homeViewModel.refinancingRate = data[0];
            this.homeViewModel.refinancingRate.Date = new Date(this.homeViewModel.refinancingRate.Date).toLocaleDateString();
        });
    }

    private getWeather() {

        this.homeViewModel.weather = new CityWeather();

        this.weather.getWeather("Minsk", "by").subscribe((data: CityWeather) => { this.homeViewModel.weather = data; });
        this.weather.getForecast("Minsk", "by").subscribe((data: CityForecast) => { console.log(data); });
    }

    private getLastNews() {

        this.homeViewModel.lastBelNews = [];

        this.tut.getNews().subscribe((data: News[]) => { this.homeViewModel.lastBelNews.push(data[0]); });
        this.onliner.getTechNews().subscribe((data: News[]) => { this.homeViewModel.lastBelNews.push(data[0]); });
        this.svoboda.getNews().subscribe((data: News[]) => { this.homeViewModel.lastBelNews.push(data[0]); });
        this.citydog.getNews().subscribe((data: News[]) => { this.homeViewModel.lastBelNews.push(data[0]); });
    }
}