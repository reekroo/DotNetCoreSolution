import { News } from '../../../Models/News/news';
import { Channel } from '../../../Models/News/channel';

export class WorldNewsViewModel {

    constructor(
        public news?: News[],
        public channels?: Channel[],
        public showError?: boolean
    ) {
        this.showError = false;
    }
}