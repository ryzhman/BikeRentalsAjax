/*jshint esversion: 6 */
/**
 * Created by Олександр on 20.12.2016.
 */
'use strict';

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _dataAccess = require('./dataAccess');

var _dataAccess2 = _interopRequireDefault(_dataAccess);

var _companies = require('../tmpl/companies.html');

var _companies2 = _interopRequireDefault(_companies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bikeRentalsURL = "http://api.citybik.es/v2/networks";

var dataFromApi = _dataAccess2.default.getProcessedData(bikeRentalsURL);
console.log(dataFromApi);

var config = {
    'stationsLocations': {
        template: _companies2.default
    }
};

function renderPage(page, data) {
    console.log(data);
    var main = document.getElementById('body');
    var pageToRender = config[page].template;

    var template = _handlebars2.default.compile(pageToRender);
    main.innerHTML = template(data);
}

renderPage('stationsLocations', dataFromApi);
//# sourceMappingURL=main.js.map