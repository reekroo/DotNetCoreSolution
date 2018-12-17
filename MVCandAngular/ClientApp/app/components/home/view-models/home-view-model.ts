import { News } from "../../../models/news/news";
import { Rate } from "../../../models/bank/rate";
import { RefinancingRate } from "../../../models/bank/refinancing-rate";

export class HomeViewModel {

    constructor(
        public lastBelNews?: News[],
        public currentRates?: Rate[],
        public refinancingRate?: RefinancingRate
    ) { }
}