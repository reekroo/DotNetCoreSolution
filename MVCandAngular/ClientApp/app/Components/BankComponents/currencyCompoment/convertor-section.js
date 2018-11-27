var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostListener } from '@angular/core';
import { Rate } from '../../../Models/Bank/Rate';
var ConvertorSectionComponent = /** @class */ (function () {
    function ConvertorSectionComponent() {
        this.onlyNumber = true;
    }
    ConvertorSectionComponent.prototype.ngOnChanges = function () {
        this.x = this.rate.Cur_OfficialRate;
        this.y = Number(this.rate.Cur_Scale);
    };
    ConvertorSectionComponent.prototype.calcNacionalValue = function () {
        this.x = (this.rate.Cur_OfficialRate * this.y) / Number(this.rate.Cur_Scale);
        this.x = Number((this.x).toFixed(5));
    };
    ConvertorSectionComponent.prototype.calcCurrentValue = function () {
        this.y = (Number(this.rate.Cur_Scale) * this.x) / this.rate.Cur_OfficialRate;
        this.y = Number((this.y).toFixed(5));
    };
    ConvertorSectionComponent.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.onlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Rate)
    ], ConvertorSectionComponent.prototype, "rate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ConvertorSectionComponent.prototype, "onlyNumber", void 0);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ConvertorSectionComponent.prototype, "onKeyDown", null);
    ConvertorSectionComponent = __decorate([
        Component({
            selector: 'convertor-section',
            templateUrl: './convertor-section.html'
        })
    ], ConvertorSectionComponent);
    return ConvertorSectionComponent;
}());
export { ConvertorSectionComponent };
//# sourceMappingURL=convertor-section.js.map