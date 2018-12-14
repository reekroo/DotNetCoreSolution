import { Metal } from '../../../Models/Bank/Metal';
import { Ingot } from '../../../Models/Bank/Ingot';


export class IngotViewModel {
    
    constructor(
        public metals?: Metal[],
        public ingotsRate?: Ingot[],
        public chartData?: Object,
        public showDefault?: boolean,
        public selectedGramIndex?: number
    ) {
        this.showDefault = true;
        this.selectedGramIndex = 0;
    }
}