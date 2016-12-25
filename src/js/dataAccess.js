/*jshint esversion: 6 */

/**
 * Created by Олександр on 25.12.2016.
 */
'use strict';
import $ from 'jquery';

let stationsList = [];

function getRawData(URL){
    return $.get(URL, function (data) {
        return data;
    });
}

function getProcessedData(URL) {
    let data = $.get(URL, function (data) {
        return processData(data.networks);
    });
    console.log(data);
    return data;
}

function processData(data){
    for (let i = 0; i < data.length; i++) {
        let element = {
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