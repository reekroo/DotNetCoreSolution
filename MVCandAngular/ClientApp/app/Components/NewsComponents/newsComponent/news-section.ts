import { Component, Input } from '@angular/core';

import { News } from '../../../Models/News/news';

@Component({
    selector: 'news-section',
    templateUrl: './news-section.html'
})

export class NewsSectionComponent  {
    
    @Input() news: News[];        
}