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
import { SvobodaNewsService } from '../../../Services/data.news.svoboda.service';
var SvobodaNewsComponent = /** @class */ (function () {
    function SvobodaNewsComponent(dataService) {
        this.dataService = dataService;
        this.title = "Radio Svoboda";
    }
    SvobodaNewsComponent.prototype.ngOnInit = function () {
        this.getAllNews();
    };
    SvobodaNewsComponent.prototype.getAllNews = function () {
        var _this = this;
        this.dataService.getNews().subscribe(function (data) { _this.news = data; });
    };
    SvobodaNewsComponent.prototype.getDate = function (publishedAt) {
        return new Date(publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };
    SvobodaNewsComponent = __decorate([
        Component({
            templateUrl: './news-line-section.html',
            styles: [require('./news-line-section.less')],
            providers: [SvobodaNewsService]
        }),
        __metadata("design:paramtypes", [SvobodaNewsService])
    ], SvobodaNewsComponent);
    return SvobodaNewsComponent;
}());
export { SvobodaNewsComponent };
//# sourceMappingURL=svoboda-news.js.map