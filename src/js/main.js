/*jshint esversion: 6 */
/**
 * Created by Олександр on 20.12.2016.
 */
'use strict';
import Handlebars from 'handlebars';
import dataProcessor from './dataAccess';
import stationsList from '../tmpl/companies.html';

let bikeRentalsURL = "http://api.citybik.es/v2/networks";

let dataFromApi = dataProcessor.getProcessedData(bikeRentalsURL);
console.log(dataFromApi);

let config = {
    'stationsLocations': {
        template: stationsList
    }
};


function renderPage(page, data){
    console.log(data);
    let main = document.getElementById('body');
    let pageToRender = config[page].template;

    let template = Handlebars.compile(pageToRender);
    main.innerHTML = template(data);
}

renderPage('stationsLocations', dataFromApi);


