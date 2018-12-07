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
import { BaseNewsComponent } from "./base-news";
var BasePortalNewsComponent = /** @class */ (function (_super) {
    __extends(BasePortalNewsComponent, _super);
    function BasePortalNewsComponent(dataService, title) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.title = title;
        return _this;
    }
    BasePortalNewsComponent.prototype.getAllNews = function () {
        var _this = this;
        this.dataService.getNews().subscribe(function (data) { _this.news = data; });
    };
    return BasePortalNewsComponent;
}(BaseNewsComponent));
export { BasePortalNewsComponent };
//# sourceMappingURL=base-portal-news.js.map