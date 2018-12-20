import { News } from "../../../models/news/news";
import { Rate } from "../../../models/bank/rate";
import { RefinancingRate } from "../../../models/bank/refinancing-rate";
import { CityWeather } from "../../../models/weather/city-weather";

export class HomeViewModel {

    constructor(
        public lastBelNews?: News[],
        public currentRates?: Rate[],
        public refinancingRate?: RefinancingRate,
        public weather?: CityWeather
    ) {
        this.lastBelNews = [];
        this.currentRates = [];
        this.refinancingRate = new RefinancingRate();
        this.weather = new CityWeather();
    }
}