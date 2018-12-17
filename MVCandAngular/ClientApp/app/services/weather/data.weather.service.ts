import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class WeatherService {

    //private url = "https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=bfff0720b491083abffe6d560e8c5e5f";
    
    constructor(private http: HttpClient) { }

    getWeather(city: string, countryCode: string) {

        return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + countryCode + "&appid=bfff0720b491083abffe6d560e8c5e5f");
    }
}

//icon
//https://openweathermap.org/img/w/