import { Component, Input, Output } from "@angular/core";

import { BaseWeatherComponent } from "../../../shared/bases/weather/base-weather";

@Component({
    selector: 'forecast-accordion-section',
    templateUrl: './forecast-accordion-section.html'
})

export class ForecastAccordionSectionComponent extends BaseWeatherComponent {

    @Input() forecast: any[];
}
