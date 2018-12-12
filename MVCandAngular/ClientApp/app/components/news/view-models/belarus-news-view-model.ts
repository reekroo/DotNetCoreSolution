import { News } from '../../../Models/News/news';

export class BelNewsViewModel {

    constructor(
        public onlinerNews?: News[],
        public cityDogNews?: News[],
        public tutNews?: News[],
        public belarusPartisanNews?: News[],
        public nashaNivaNews?: News[],
        public belsatNews?: News[],
        public svobodaNews?: News[]
    ) { }
}