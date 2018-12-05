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
var OnlinerNewsComponent = /** @class */ (function () {
    function OnlinerNewsComponent(dataService) {
        this.dataService = dataService;
    }
    OnlinerNewsComponent.prototype.ngOnInit = function () {
        this.getAllNews();
    };
    OnlinerNewsComponent.prototype.getAllNews = function () {
        var _this = this;
        var people$ = this.dataService.getPeopleNews();
        var tech$ = this.dataService.getTechNews();
        var auto$ = this.dataService.getAutoNews();
        var realt$ = this.dataService.getRealtNews();
        people$.subscribe(function (data) { _this.peopleNews = data; });
        tech$.subscribe(function (data) { _this.techNews = data; });
        auto$.subscribe(function (data) { _this.autoNews = data; });
        realt$.subscribe(function (data) { _this.realtNews = data; });
    };
    OnlinerNewsComponent = __decorate([
        Component({
            templateUrl: './onliner-news.html',
            providers: [OnlinerNewsService]
        }),
        __metadata("design:paramtypes", [OnlinerNewsService])
    ], OnlinerNewsComponent);
    return OnlinerNewsComponent;
}());
export { OnlinerNewsComponent };
//# sourceMappingURL=onliner-news.js.map