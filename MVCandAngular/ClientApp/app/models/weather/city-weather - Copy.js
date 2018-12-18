var CityWeather = /** @class */ (function () {
    function CityWeather(coord, weather, base, main, visibility, wind, clouds, dt, sys, id, name, cod, snow, rain, dt_txt) {
        this.coord = coord;
        this.weather = weather;
        this.base = base;
        this.main = main;
        this.visibility = visibility;
        this.wind = wind;
        this.clouds = clouds;
        this.dt = dt;
        this.sys = sys;
        this.id = id;
        this.name = name;
        this.cod = cod;
        this.snow = snow;
        this.rain = rain;
        this.dt_txt = dt_txt;
        this.coord = new Coord();
        this.wind = new Wind();
        this.clouds = new Clouds();
        this.main = new Main();
        this.sys = new Sys();
        this.weather = [];
    }
    return CityWeather;
}());
export { CityWeather };
var Wind = /** @class */ (function () {
    function Wind(speed, deg) {
        this.speed = speed;
        this.deg = deg;
    }
    return Wind;
}());
export { Wind };
var Clouds = /** @class */ (function () {
    function Clouds(all) {
        this.all = all;
    }
    return Clouds;
}());
export { Clouds };
var Coord = /** @class */ (function () {
    function Coord(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }
    return Coord;
}());
export { Coord };
var Main = /** @class */ (function () {
    function Main(humidity, pressure, temp, temp_max, temp_min) {
        this.humidity = humidity;
        this.pressure = pressure;
        this.temp = temp;
        this.temp_max = temp_max;
        this.temp_min = temp_min;
    }
    return Main;
}());
export { Main };
var Sys = /** @class */ (function () {
    function Sys(country, id, message, sunrise, sunset) {
        this.country = country;
        this.id = id;
        this.message = message;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }
    return Sys;
}());
export { Sys };
var Weather = /** @class */ (function () {
    function Weather(description, icon, id, main) {
        this.description = description;
        this.icon = icon;
        this.id = id;
        this.main = main;
    }
    return Weather;
}());
export { Weather };
//# sourceMappingURL=city-weather.js.map