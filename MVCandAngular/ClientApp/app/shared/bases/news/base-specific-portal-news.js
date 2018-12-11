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
var BaseSpecificPortalNewsComponent = /** @class */ (function (_super) {
    __extends(BaseSpecificPortalNewsComponent, _super);
    function BaseSpecificPortalNewsComponent(dataService, title) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.column = 4;
        _this.title = title;
        return _this;
    }
    BaseSpecificPortalNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllNews();
        this.interval = setInterval(function () {
            _this.getAllNews();
        }, 60000);
    };
    BaseSpecificPortalNewsComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    BaseSpecificPortalNewsComponent.prototype.getAllNews = function () {
        var _this = this;
        this.dataService.getNews().subscribe(function (data) {
            var newsRows = [];
            for (var i = 0; i < data.length; i += _this.column) {
                newsRows.push({ items: data.slice(i, i + _this.column) });
            }
            _this.news = newsRows;
        });
    };
    return BaseSpecificPortalNewsComponent;
}(BaseNewsComponent));
export { BaseSpecificPortalNewsComponent };
//# sourceMappingURL=base-specific-portal-news.js.map