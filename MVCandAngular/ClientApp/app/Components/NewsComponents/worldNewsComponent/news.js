var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { BaseNewsComponent } from '../base/base-news';
import { NewsService } from '../../../Services/data.news.service';
var NewsComponent = /** @class */ (function (_super) {
    __extends(NewsComponent, _super);
    function NewsComponent(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.showError = false;
        return _this;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getChannels();
        this.getNews();
    };
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this.dataService.getNews().subscribe(function (data) {
            if (data.articles) {
                _this.news = data.articles;
            }
            else {
                _this.news = [];
            }
            _this.error();
        });
    };
    NewsComponent.prototype.getNewsById = function (id) {
        var _this = this;
        this.dataService.getNewsById(id).subscribe(function (response) {
            if (response.hasOwnProperty("articles")) {
                _this.news = response['articles'];
            }
            else {
                _this.news = [];
            }
            _this.error();
        }, function (err) {
            _this.news = [];
            _this.error();
        });
    };
    NewsComponent.prototype.getChannels = function () {
        var _this = this;
        this.dataService.getChannels().subscribe(function (data) {
            if (data.sources) {
                _this.channels = data.sources;
            }
            else {
                _this.channels = [];
            }
        });
    };
    NewsComponent.prototype.error = function () {
        if (this.news.length > 0) {
            this.showError = false;
        }
        else {
            this.showError = true;
        }
    };
    NewsComponent = __decorate([
        Component({
            templateUrl: './news.html',
            styles: [require('./news.less')],
            providers: [NewsService]
        }),
        __metadata("design:paramtypes", [NewsService])
    ], NewsComponent);
    return NewsComponent;
}(BaseNewsComponent));
export { NewsComponent };
//# sourceMappingURL=news.js.map