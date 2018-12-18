import { CityWeather } from "../../../models/weather/city-weather";
import { CityForecast } from "../../../models/weather/city-forecast";

export class WeatherViewModel {
    constructor(
        public forecast?: CityForecast,
        public weather?: CityWeather
    ) {
        this.forecast = new CityForecast();
        this.weather = new CityWeather();
    }
}