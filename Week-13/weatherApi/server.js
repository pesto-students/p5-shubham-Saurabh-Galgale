const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');
require('dotenv').config();
let port = process.env.PORT || 3000;
let multiCityWeatherData = [];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let cities = require("./cities");

app.get("/weather", (req, res) => {
    let city = req.query.city;
    if (!city) {
        res.send("add city = name of the city");
    }
    let currentURL = `${process.env.API_ENDPOINT}/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`

    https.get(currentURL, (response) => {
        response.on('data', (chunk) => {
            chunk = JSON.parse(chunk);
            let result = {
                "city": chunk.name,
                "country": chunk.sys.country,
                "temperature": chunk.main.temp,
                "pressure": chunk.main.pressure,
                "humidity": chunk.main.humidity,
                "description": chunk.weather[0].description,
                "longitude": chunk.coord.lon,
                "latitude": chunk.coord.lat,
                "visibility": chunk.visibility,
                "windSpeed": chunk.wind.speed,
                "id": chunk.id
            }
            res.json(result);
        });
    });
});


app.get("/weatherforecast", (req, res) => {
    let city = req.query.city;
    let cnt = req.query.cnt;
    if (!city && !cnt) {
        res.send("missing required paramiters: city=cityname, cnt=int 1 to 40 (1 == next 3hr)");
    }
    let forecastURL = `${process.env.API_ENDPOINT}/forecast?q=${city}&cnt=${cnt}&appid=${process.env.API_KEY}&units=metric`

    https.get(forecastURL, (response) => {
        response.on('data', (chunk) => {
            chunk = JSON.parse(chunk);
            res.json(chunk);
        });
    });
})


function getData() {

    cities.map((item, index) => {
        let currentURL = `${process.env.API_ENDPOINT}/weather?q=${item}&appid=${process.env.API_KEY}&units=metric`

        https.get(currentURL, (response) => {
            response.on('data', (chunk) => {
                // console.log(JSON.parse(chunk));
                chunk = JSON.parse(chunk);
                let result = {
                    "city": chunk.name,
                    "country": chunk.sys.country,
                    "temperature": chunk.main.temp,
                    "pressure": chunk.main.pressure,
                    "humidity": chunk.main.humidity,
                    "description": chunk.weather[0].description,
                    "longitude": chunk.coord.lon,
                    "latitude": chunk.coord.lat,
                    "visibility": chunk.visibility,
                    "windSpeed": chunk.wind.speed,
                    "id": chunk.id
                }
                multiCityWeatherData.push(result);
            });
        });
    });
}
getData();

app.get("/multicityweather", (req, res) => {
    let page = req.query.page;
    let limit = req.query.limit;
    if (!page && !limit) {
        res.send("missing required paramiters: page=pageNumber, limit=numberOfCities");
    }
    let initialIdx = (page - 1) * limit;
    let finalIdx = page * limit;
    let paginatedResult = multiCityWeatherData.slice(initialIdx, finalIdx);
    res.json(paginatedResult);
});

app.listen(port, () => {
    console.log(`running on ${port}`);
});