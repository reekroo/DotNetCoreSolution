var BaseNewsComponent = /** @class */ (function () {
    function BaseNewsComponent() {
    }
    BaseNewsComponent.prototype.getDate = function (publishedAt) {
        return new Date(publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };
    BaseNewsComponent.prototype.getDiscription = function (discription) {
        if (discription.length > 400) {
            return discription.substr(1, discription.indexOf('.') + 1);
        }
        return discription;
    };
    return BaseNewsComponent;
}());
export { BaseNewsComponent };
//# sourceMappingURL=base-news.js.map