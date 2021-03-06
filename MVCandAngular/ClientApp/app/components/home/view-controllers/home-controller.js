var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { BankService } from '../../../services/bank/data.bank.currencies.service';
import { RefinancingRateBankService } from '../../../services/bank/data.bank.refinancing.service';
import { TutNewsService } from '../../../services/news/data.news.tut.service';
import { OnlinerNewsService } from '../../../services/news/data.news.onliner.service';
import { CityDogNewsService } from '../../../services/news/data.news.citydog.service';
import { SvobodaNewsService } from '../../../services/news/data.news.svoboda.service';
import { WeatherService } from '../../../services/weather/data.weather.service';
import { HomeViewModel } from '../view-models/home-view-model';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(bank, refinancingRate, tut, onliner, citydog, svoboda, weather) {
        this.bank = bank;
        this.refinancingRate = refinancingRate;
        this.tut = tut;
        this.onliner = onliner;
        this.citydog = citydog;
        this.svoboda = svoboda;
        this.weather = weather;
        this.homeViewModel = new HomeViewModel();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRefinancingRate();
        this.getCurrentCurrencyRates();
        this.getLastNews();
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.weather.getWeatherByGeolocation(position.coords.latitude, position.coords.longitude)
                    .subscribe(function (data) {
                    _this.homeViewModel.weather = data;
                });
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
                _this.getWeather();
            });
        }
        ;
    };
    HomeComponent.prototype.getCurrentCurrencyRates = function () {
        var _this = this;
        var usd$ = this.bank.getRate(145);
        var eur$ = this.bank.getRate(292);
        var rub$ = this.bank.getRate(298);
        combineLatest(usd$, eur$, rub$).subscribe(function (combinedResult) {
            var arr = [];
            arr.push(combinedResult[0]);
            arr.push(combinedResult[1]);
            arr.push(combinedResult[2]);
            _this.homeViewModel.currentRates = arr;
        });
    };
    HomeComponent.prototype.getRefinancingRate = function () {
        var _this = this;
        this.refinancingRate.getRefinancingRate(new Date()).subscribe(function (data) {
            _this.homeViewModel.refinancingRate = data[0];
            _this.homeViewModel.refinancingRate.Date = new Date(_this.homeViewModel.refinancingRate.Date).toLocaleDateString();
        });
    };
    HomeComponent.prototype.getWeather = function () {
        var _this = this;
        this.weather.getWeather("Minsk", "by").subscribe(function (data) { _this.homeViewModel.weather = data; });
    };
    HomeComponent.prototype.getLastNews = function () {
        var _this = this;
        this.tut.getNews().subscribe(function (data) { _this.homeViewModel.lastBelNews.push(data[0]); });
        this.onliner.getTechNews().subscribe(function (data) { _this.homeViewModel.lastBelNews.push(data[0]); });
        this.svoboda.getNews().subscribe(function (data) { _this.homeViewModel.lastBelNews.push(data[0]); });
        this.citydog.getNews().subscribe(function (data) { _this.homeViewModel.lastBelNews.push(data[0]); });
    };
    HomeComponent = __decorate([
        Component({
            templateUrl: './home-controller.html',
            providers: [
                BankService, RefinancingRateBankService,
                TutNewsService, OnlinerNewsService, CityDogNewsService, SvobodaNewsService,
                WeatherService
            ]
        }),
        __metadata("design:paramtypes", [BankService,
            RefinancingRateBankService,
            TutNewsService,
            OnlinerNewsService,
            CityDogNewsService,
            SvobodaNewsService,
            WeatherService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home-controller.js.map