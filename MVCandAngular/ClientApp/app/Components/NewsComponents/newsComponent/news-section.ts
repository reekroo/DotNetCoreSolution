import { Component, Input } from '@angular/core';

import { News } from '../../../Models/News/news';

@Component({
    selector: 'news-section',
    templateUrl: './news-section.html',
    styles: [require('./news-section.less')]
})

export class NewsSectionComponent  {
    
    @Input() news: News[];        
}