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
import { BelsatNewsService } from '../../../services/news/data.news.belsat.service';
import { OnlinerNewsService } from '../../../services/news/data.news.onliner.service';
import { TutNewsService } from '../../../services/news/data.news.tut.service';
import { SvobodaNewsService } from '../../../services/news/data.news.svoboda.service';
import { NashaNivaNewsService } from '../../../services/news/data.news.nashaniva.service';
import { BelarusPartisanNewsService } from '../../../services/news/data.news.belaruspartisan.service';
import { BelNewsViewModel } from '../view-models/belarus-news-view-model';
var BelNewsComponent = /** @class */ (function () {
    function BelNewsComponent(onliner, tut, belarusPartisan, nashaNiva, belsat, svoboda) {
        this.onliner = onliner;
        this.tut = tut;
        this.belarusPartisan = belarusPartisan;
        this.nashaNiva = nashaNiva;
        this.belsat = belsat;
        this.svoboda = svoboda;
        this.belNewsViewModel = new BelNewsViewModel();
    }
    BelNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNews();
        this.interval = setInterval(function () {
            _this.getNews();
        }, 60000);
    };
    BelNewsComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    BelNewsComponent.prototype.getNews = function () {
        var _this = this;
        this.belsat.getNews().subscribe(function (data) { _this.belNewsViewModel.belsatNews = data.slice(0, 4); });
        var auto$ = this.onliner.getAutoNews();
        var people$ = this.onliner.getPeopleNews();
        var realt$ = this.onliner.getRealtNews();
        var tech$ = this.onliner.getTechNews();
        combineLatest(auto$, people$, realt$, tech$).subscribe(function (combinedResult) {
            var arr = [];
            arr.push(combinedResult[0][0]);
            arr.push(combinedResult[0][1]);
            arr.push(combinedResult[1][0]);
            arr.push(combinedResult[1][1]);
            arr.push(combinedResult[2][0]);
            arr.push(combinedResult[2][1]);
            arr.push(combinedResult[3][0]);
            arr.push(combinedResult[3][1]);
            _this.belNewsViewModel.onlinerNews = arr;
        });
        this.tut.getNews().subscribe(function (data) { _this.belNewsViewModel.tutNews = data.slice(0, 8); });
        this.svoboda.getNews().subscribe(function (data) { _this.belNewsViewModel.svobodaNews = data.slice(0, 8); });
        this.nashaNiva.getNews().subscribe(function (data) { _this.belNewsViewModel.nashaNivaNews = data.slice(0, 8); });
        this.belarusPartisan.getNews().subscribe(function (data) { _this.belNewsViewModel.belarusPartisanNews = data.slice(0, 6); });
    };
    BelNewsComponent = __decorate([
        Component({
            templateUrl: './belarus-news-controller.html',
            providers: [OnlinerNewsService, TutNewsService, BelarusPartisanNewsService, NashaNivaNewsService, BelsatNewsService, SvobodaNewsService]
        }),
        __metadata("design:paramtypes", [OnlinerNewsService,
            TutNewsService,
            BelarusPartisanNewsService,
            NashaNivaNewsService,
            BelsatNewsService,
            SvobodaNewsService])
    ], BelNewsComponent);
    return BelNewsComponent;
}());
export { BelNewsComponent };
//# sourceMappingURL=belarus-news-controller.js.map