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
var NewsSectionComponent = /** @class */ (function () {
    function NewsSectionComponent() {
    }
    NewsSectionComponent.prototype.getDate = function (publishedAt) {
        return new Date(publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NewsSectionComponent.prototype, "news", void 0);
    NewsSectionComponent = __decorate([
        Component({
            selector: 'news-section',
            templateUrl: './news-section.html'
        })
    ], NewsSectionComponent);
    return NewsSectionComponent;
}());
export { NewsSectionComponent };
//# sourceMappingURL=news-section.js.map