/**
 * Created by stasiakprzemyslaw on 30.03.2017.
 */
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var countriesDetailList = $('#countries_details');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
};

function showCountriesList(resp) {
    countriesList.empty();
    countriesDetailList.empty();
    resp.forEach(function(item){
        $('<li>').text('Nazwa Kraju: ' + item.name).appendTo(countriesList);
        $('<ul><li>').text('Język: ' + item.languages).appendTo(countriesList);
        $('<ul><li>').text('Populacja: ' + item.population).appendTo(countriesList);
        $('<ul><li>').text('Region: ' + item.region).appendTo(countriesList);
        $('<ul><li>').text('Time zone: ' + item.timezones).appendTo(countriesList);
        $('<ul><li>').text('________________________________________________').appendTo(countriesList);

    });
};