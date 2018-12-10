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
import { OnlinerNewsService } from '../../../Services/data.news.onliner.service';
import { BasePortalNewsComponent } from '../base/base-portal-news';
var OnlinerNewsComponent = /** @class */ (function (_super) {
    __extends(OnlinerNewsComponent, _super);
    function OnlinerNewsComponent(specificDataService) {
        var _this = _super.call(this, specificDataService, null) || this;
        _this.specificDataService = specificDataService;
        return _this;
    }
    OnlinerNewsComponent.prototype.getAllNews = function () {
        var _this = this;
        var people$ = this.specificDataService.getPeopleNews();
        var tech$ = this.specificDataService.getTechNews();
        var auto$ = this.specificDataService.getAutoNews();
        var realt$ = this.specificDataService.getRealtNews();
        people$.subscribe(function (data) { _this.peopleNews = _this.parseNews(data); });
        tech$.subscribe(function (data) { _this.techNews = _this.parseNews(data); });
        auto$.subscribe(function (data) { _this.autoNews = _this.parseNews(data); });
        realt$.subscribe(function (data) { _this.realtNews = _this.parseNews(data); });
    };
    OnlinerNewsComponent.prototype.parseNews = function (data) {
        var k = 4;
        var newsRows = [];
        for (var i = 0; i < data.length; i += k) {
            newsRows.push({ items: data.slice(i, i + k) });
        }
        return newsRows;
    };
    OnlinerNewsComponent = __decorate([
        Component({
            templateUrl: './onliner-news.html',
            providers: [OnlinerNewsService]
        }),
        __metadata("design:paramtypes", [OnlinerNewsService])
    ], OnlinerNewsComponent);
    return OnlinerNewsComponent;
}(BasePortalNewsComponent));
export { OnlinerNewsComponent };
//# sourceMappingURL=onliner-news.js.map