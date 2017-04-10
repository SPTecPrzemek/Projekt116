/**
 * Created by stasiakprzemyslaw on 30.03.2017.
 */
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

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
    resp.forEach(function(item){
        var singleCountry = $('<li>' + item.name + '</li>');

        var countryDetails = $('<ul class="country-details"></ul>');
        countryDetails.append('<li>Język: ' + item.languages + '</li>');
        countryDetails.append('<li>Populacja: ' + item.population + '</li>');
        countryDetails.append('<li>Region: ' + item.region + '</li>');
        countryDetails.append('<li>Time zone: ' + item.timezones + '</li>');

        countryDetails.appendTo(singleCountry);
        singleCountry.appendTo(countriesList);
    });
};