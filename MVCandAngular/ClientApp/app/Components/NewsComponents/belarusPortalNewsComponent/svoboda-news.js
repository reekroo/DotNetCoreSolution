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
import { SvobodaNewsService } from '../../../Services/data.news.svoboda.service';
import { BasePortalNewsComponent } from '../base/base-portal-news';
var SvobodaNewsComponent = /** @class */ (function (_super) {
    __extends(SvobodaNewsComponent, _super);
    function SvobodaNewsComponent(specificDataService) {
        var _this = _super.call(this, specificDataService, "Radio Svoboda") || this;
        _this.specificDataService = specificDataService;
        _this.newsRows = [];
        return _this;
    }
    SvobodaNewsComponent.prototype.ngOnInit = function () {
        this.getAllNews();
    };
    SvobodaNewsComponent.prototype.getAllNews = function () {
        var _this = this;
        this.specificDataService.getNews().subscribe(function (data) {
            var k = 4;
            for (var i = 0; i < data.length; i += k) {
                _this.newsRows.push({ items: data.slice(i, i + k) });
                _this.news = _this.newsRows;
            }
        });
    };
    SvobodaNewsComponent = __decorate([
        Component({
            templateUrl: './news-clip-board-section.html',
            styles: [require('./news-clip-board-section.less')],
            providers: [SvobodaNewsService]
        }),
        __metadata("design:paramtypes", [SvobodaNewsService])
    ], SvobodaNewsComponent);
    return SvobodaNewsComponent;
}(BasePortalNewsComponent));
export { SvobodaNewsComponent };
//# sourceMappingURL=svoboda-news.js.map