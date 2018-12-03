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
import { BelsatNewsService } from '../../../Services/data.news.belsat.service';
var BelsatNewsComponent = /** @class */ (function () {
    function BelsatNewsComponent(dataService) {
        this.dataService = dataService;
    }
    BelsatNewsComponent.prototype.ngOnInit = function () {
        this.getAllNews();
    };
    BelsatNewsComponent.prototype.getAllNews = function () {
        var _this = this;
        this.dataService.getNews().subscribe(function (data) { _this.news = data; });
    };
    BelsatNewsComponent.prototype.getDate = function (publishedAt) {
        return new Date(publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };
    BelsatNewsComponent = __decorate([
        Component({
            templateUrl: './belsat-news.html',
            providers: [BelsatNewsService]
        }),
        __metadata("design:paramtypes", [BelsatNewsService])
    ], BelsatNewsComponent);
    return BelsatNewsComponent;
}());
export { BelsatNewsComponent };
//# sourceMappingURL=belsat-news.js.map