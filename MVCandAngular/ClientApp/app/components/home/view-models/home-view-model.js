import { RefinancingRate } from "../../../models/bank/refinancing-rate";
import { CityWeather } from "../../../models/weather/city-weather";
var HomeViewModel = /** @class */ (function () {
    function HomeViewModel(lastBelNews, currentRates, refinancingRate, weather) {
        this.lastBelNews = lastBelNews;
        this.currentRates = currentRates;
        this.refinancingRate = refinancingRate;
        this.weather = weather;
        this.lastBelNews = [];
        this.currentRates = [];
        this.refinancingRate = new RefinancingRate();
        this.weather = new CityWeather();
    }
    return HomeViewModel;
}());
export { HomeViewModel };
//# sourceMappingURL=home-view-model.js.map