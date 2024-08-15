const renderCards = require('./renderCards')

const urlAPI = "http://localhost:3000/movies";

$.get(urlAPI, (data, status) => {
    renderCards(data.data)
});