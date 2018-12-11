var CurrencyViewModel = /** @class */ (function () {
    function CurrencyViewModel(currencies, rate, rates, monthRates, chartData, showDefaultSection, isUpper, delta) {
        this.currencies = currencies;
        this.rate = rate;
        this.rates = rates;
        this.monthRates = monthRates;
        this.chartData = chartData;
        this.showDefaultSection = showDefaultSection;
        this.isUpper = isUpper;
        this.delta = delta;
        this.showDefaultSection = true;
        this.isUpper = false;
        this.delta = 0.0;
    }
    return CurrencyViewModel;
}());
export { CurrencyViewModel };
//# sourceMappingURL=currency-view-model.js.map