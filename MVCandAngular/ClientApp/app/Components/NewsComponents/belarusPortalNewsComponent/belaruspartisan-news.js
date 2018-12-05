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
import { BelarusPartisanNewsService } from '../../../Services/data.news.belaruspartisan.service';
var BelarusPartisanNewsComponent = /** @class */ (function () {
    function BelarusPartisanNewsComponent(dataService) {
        this.dataService = dataService;
        this.title = "Belarus Partisan";
    }
    BelarusPartisanNewsComponent.prototype.ngOnInit = function () {
        this.getAllNews();
    };
    BelarusPartisanNewsComponent.prototype.getAllNews = function () {
        var _this = this;
        this.dataService.getNews().subscribe(function (data) { _this.news = data; });
    };
    BelarusPartisanNewsComponent.prototype.getDate = function (publishedAt) {
        return new Date(publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };
    BelarusPartisanNewsComponent = __decorate([
        Component({
            templateUrl: './news-clip-board-section.html',
            styles: [require('./news-clip-board-section.less')],
            providers: [BelarusPartisanNewsService]
        }),
        __metadata("design:paramtypes", [BelarusPartisanNewsService])
    ], BelarusPartisanNewsComponent);
    return BelarusPartisanNewsComponent;
}());
export { BelarusPartisanNewsComponent };
//# sourceMappingURL=belaruspartisan-news.js.map