import { RefinancingRate } from '../../../Models/Bank/refinancing-rate';

export class RefinancingRateViewModel {

    constructor(
        public refinancingRate?: RefinancingRate,
        public refinancingRates?: RefinancingRate[],
        public chartData?: Object
    ) { }
}