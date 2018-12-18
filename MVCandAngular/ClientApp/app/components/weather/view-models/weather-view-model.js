import { CityWeather } from "../../../models/weather/city-weather";
import { CityForecast } from "../../../models/weather/city-forecast";
var WeatherViewModel = /** @class */ (function () {
    function WeatherViewModel(forecast, weather) {
        this.forecast = forecast;
        this.weather = weather;
        this.forecast = new CityForecast();
        this.weather = new CityWeather();
    }
    return WeatherViewModel;
}());
export { WeatherViewModel };
//# sourceMappingURL=weather-view-model.js.map