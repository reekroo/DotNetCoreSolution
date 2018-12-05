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
import { BelsatNewsService } from '../../../Services/data.news.belsat.service';
import { OnlinerNewsService } from '../../../Services/data.news.onliner.service';
import { TutNewsService } from '../../../Services/data.news.tut.service';
import { SvobodaNewsService } from '../../../Services/data.news.svoboda.service';
import { NashaNivaNewsService } from '../../../Services/data.news.nashaniva.service';
import { BelarusPartisanNewsService } from '../../../Services/data.news.belaruspartisan.service';
var BelNewsComponent = /** @class */ (function () {
    function BelNewsComponent(onliner, tut, belarusPartisan, nashaNiva, belsat, svoboda) {
        this.onliner = onliner;
        this.tut = tut;
        this.belarusPartisan = belarusPartisan;
        this.nashaNiva = nashaNiva;
        this.belsat = belsat;
        this.svoboda = svoboda;
    }
    BelNewsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    BelNewsComponent.prototype.getNews = function () {
        var _this = this;
        this.belsat.getNews().subscribe(function (data) { _this.belsatNews = data.slice(0, 4); });
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
            _this.onlinerNews = arr;
        });
        this.tut.getNews().subscribe(function (data) { _this.tutNews = data.slice(0, 8); });
        this.svoboda.getNews().subscribe(function (data) { _this.svobodaNews = data.slice(0, 8); });
        this.nashaNiva.getNews().subscribe(function (data) { _this.nashaNivaNews = data.slice(0, 8); });
        this.belarusPartisan.getNews().subscribe(function (data) { _this.belarusPartisanNews = data.slice(0, 6); });
    };
    BelNewsComponent = __decorate([
        Component({
            templateUrl: './news.html',
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
//# sourceMappingURL=news.js.map