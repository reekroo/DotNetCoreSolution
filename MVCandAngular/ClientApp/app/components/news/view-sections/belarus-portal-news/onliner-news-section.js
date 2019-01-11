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
import { Component, Input } from '@angular/core';
import { BaseNewsComponent } from '../../../../shared/bases/news/base-news';
var OnlinerNewsSectionComponent = /** @class */ (function (_super) {
    __extends(OnlinerNewsSectionComponent, _super);
    function OnlinerNewsSectionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.news = [];
        _this.section = false;
        _this.textBtn = "Show more news";
        return _this;
    }
    OnlinerNewsSectionComponent.prototype.onClick = function () {
        this.section = !this.section;
        this.textBtn = this.section ? "Hide" : "Show more news";
    };
    OnlinerNewsSectionComponent.prototype.scroll = function (el) {
        //el.scrollIntoView();
        setTimeout(function () {
            //behavior: 'smooth', block: 'start', inline: 'end'
            el.scrollIntoView({ behavior: 'smooth' });
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], OnlinerNewsSectionComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], OnlinerNewsSectionComponent.prototype, "news", void 0);
    OnlinerNewsSectionComponent = __decorate([
        Component({
            selector: 'onliner-news-section',
            templateUrl: './onliner-news-section.html',
            styleUrls: ['../../../../assets/less/news/news-onliner-section.less']
        })
    ], OnlinerNewsSectionComponent);
    return OnlinerNewsSectionComponent;
}(BaseNewsComponent));
export { OnlinerNewsSectionComponent };
//# sourceMappingURL=onliner-news-section.js.map