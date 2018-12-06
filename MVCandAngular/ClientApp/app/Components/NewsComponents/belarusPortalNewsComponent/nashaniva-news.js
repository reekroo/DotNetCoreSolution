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
import { NashaNivaNewsService } from '../../../Services/data.news.nashaniva.service';
import { BaseNewsComponent } from '../base/base-news';
var NashaNivaNewsComponent = /** @class */ (function (_super) {
    __extends(NashaNivaNewsComponent, _super);
    function NashaNivaNewsComponent(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.title = "Nasha Niva";
        return _this;
    }
    NashaNivaNewsComponent.prototype.ngOnInit = function () {
        this.getAllNews();
    };
    NashaNivaNewsComponent.prototype.getAllNews = function () {
        var _this = this;
        this.dataService.getNews().subscribe(function (data) { _this.news = data; });
    };
    NashaNivaNewsComponent = __decorate([
        Component({
            templateUrl: './news-line-section.html',
            styles: [require('./news-line-section.less')],
            providers: [NashaNivaNewsService]
        }),
        __metadata("design:paramtypes", [NashaNivaNewsService])
    ], NashaNivaNewsComponent);
    return NashaNivaNewsComponent;
}(BaseNewsComponent));
export { NashaNivaNewsComponent };
//# sourceMappingURL=nashaniva-news.js.map