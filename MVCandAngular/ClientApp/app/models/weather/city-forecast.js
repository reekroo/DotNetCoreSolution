var CityForecast = /** @class */ (function () {
    function CityForecast(city, cnt, cod, message, list) {
        this.city = city;
        this.cnt = cnt;
        this.cod = cod;
        this.message = message;
        this.list = list;
        this.city = new City;
        this.list = new Array();
    }
    return CityForecast;
}());
export { CityForecast };
var City = /** @class */ (function () {
    function City(coord, country, id, name, cod) {
        this.coord = coord;
        this.country = country;
        this.id = id;
        this.name = name;
        this.cod = cod;
    }
    return City;
}());
export { City };
//# sourceMappingURL=city-forecast.js.map