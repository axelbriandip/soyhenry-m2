const renderCards = require('./renderCards')

const urlAPI = "https://students-api.2.us-1.fl0.io/movies";
$.get(urlAPI, (data, status) => {
    renderCards(data)
});