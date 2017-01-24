/*jshint esversion: 6 */
/**
 * Created by Олександр on 20.12.2016.
 */
'use strict';
import tableTmpl from '../template/tableTmpl';
import $ from 'jquery';

let bikeRentalsURL = "http://api.citybik.es/v2/networks";

let startPage = () => {
    $.getJSON(bikeRentalsURL, () => {
        console.log("Request was sent");
    })
        .done((data) => {
            let processedData = processData(data);
            let companiesIds = [];
            processedData.map(item => companiesIds.push(item.id));
            renderPage(processedData);
            addEventListener(companiesIds);
            return processedData;
        });
};

let processData = (data) => {
    return data.networks;
};

function renderPage(data) {
    $('body').html(tableTmpl(data));
}

let addEventListener = (companiesIds) => {
    companiesIds.map(item => {
        $('#' + item).click(getCompanyAddress);
    });
};

let getCompanyAddress = (event) => {
    $.get(bikeRentalsURL)
        .done((data) => {
                let processedData = processData(data);
                let companyAddress = '';
                processedData.map((item) => {
                    if (item.id === event.target.id) {
                        companyAddress = item.location;
                    }
                });
                $('#location' + event.target.id).replaceWith(`
                    <ul>
                        <li>Country - ${companyAddress.country}</li>
                        <li>City - companyAddress.city</li>
                        <li>Latitude - companyAddress.latitude</li>
                        <li>Longitude " + companyAddress.longitude</li>
                    </ul>`);
            }
        );
};

startPage();

export default renderPage;
