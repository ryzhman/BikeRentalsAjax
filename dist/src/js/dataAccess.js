/*jshint esversion: 6 */

/**
 * Created by Олександр on 25.12.2016.
 */
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stationsList = [];

function getRawData(URL) {
    return _jquery2.default.get(URL, function (data) {
        return data;
    });
}

function getProcessedData(URL) {
    var data = _jquery2.default.get(URL, function (data) {
        return processData(data.networks);
    });
    console.log(data);
    return data;
}

function processData(data) {
    for (var i = 0; i < data.length; i++) {
        var element = {
            title: data[i].company,
            location: data[i].location
        };
        stationsList.push(element);
    }
    console.log(stationsList);
    return stationsList;
}

module.exports = {
    getRawData: getRawData,
    getProcessedData: getProcessedData
};
//# sourceMappingURL=dataAccess.js.map