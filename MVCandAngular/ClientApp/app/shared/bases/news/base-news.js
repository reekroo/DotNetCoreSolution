var BaseNewsComponent = /** @class */ (function () {
    function BaseNewsComponent() {
        this.discriptionLength = 400;
    }
    BaseNewsComponent.prototype.getDate = function (publishedAt) {
        return new Date(publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };
    BaseNewsComponent.prototype.getDiscription = function (discription) {
        if (discription.length > this.discriptionLength) {
            return discription.substr(0, discription.indexOf('.') + 1);
        }
        return discription;
    };
    return BaseNewsComponent;
}());
export { BaseNewsComponent };
//# sourceMappingURL=base-news.js.map