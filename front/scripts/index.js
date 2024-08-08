const renderCards = require('./renderCards')

const makeRequest = url => {
    $.get(url, (data, status) => {
        return data
    });
}

const urlAPI = "https://students-api.2.us-1.fl0.io/movies";
renderCards(makeRequest(urlAPI))
// console.log(renderCards(makeRequest(url)));