import { Injectable } from "@angular/core";

@Injectable()

export class GeolocationService {

    public pos: Coordinates;

    public getPosition(): void {
        navigator.geolocation.getCurrentPosition((position) => {
            this.pos = position.coords;

            console.log(position.coords);   
        });
    }
}
