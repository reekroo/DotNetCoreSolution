import { Days } from "../../../shared/bases/enums/Days";
var BaseWeatherComponent = /** @class */ (function () {
    function BaseWeatherComponent() {
    }
    BaseWeatherComponent.prototype.getDay = function (unixUtcTime) {
        var currentDate = new Date(unixUtcTime * 1000);
        return Days[currentDate.getDay()];
    };
    BaseWeatherComponent.prototype.getTime = function (unixUtcTime) {
        return (new Date(unixUtcTime * 1000).toLocaleTimeString());
    };
    BaseWeatherComponent.prototype.getDate = function (unixUtcTime) {
        return (new Date(unixUtcTime * 1000).toLocaleDateString());
    };
    BaseWeatherComponent.prototype.getDescription = function (array) {
        if (array.length < 1) {
            return '';
        }
        return array[0].description;
    };
    BaseWeatherComponent.prototype.getIcon = function (array) {
        if (array.length < 1) {
            return '';
        }
        return array[0].icon;
    };
    BaseWeatherComponent.prototype.getTemp = function (temp) {
        return Number((temp - 273).toFixed(2));
    };
    return BaseWeatherComponent;
}());
export { BaseWeatherComponent };
//# sourceMappingURL=base-weather.js.map