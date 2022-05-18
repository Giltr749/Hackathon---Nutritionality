import express from "express";
// import fetch from "node-fetch";
import axios from "axios";
import { Navigator } from 'node-navigator';


const app = express();
const navigator = new Navigator();


const findLoc = async () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error)
        )
    });
}



// app.get('/nearby', async (req, res) => {
//     const location = await findLoc();
//     const keyWord = 'restaurant';
//     const locationSearch = `${location.latitude}%2C${location.longitude}`;
//     console.log(locationSearch);
//     const radius = '20000';
//     const type = 'restaurant';
//     const key = 'AIzaSyCDbMPheigEhLZzpQbWBSMT33_qRKpoyAA';
//     const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${keyWord}&location=${locationSearch}&radius=${radius}&type=${type}&key=${key}`;
//     const response = await axios.get(URL);
//     console.log(response.data.results);
// });

app.get('/', async (req, res) => {
    const asdf = '[{"text": "Hello World!"}]';
    axios.post('http://ec2-18-192-181-8.eu-central-1.compute.amazonaws.com:8080/predict_churn_bulk',
        asdf)
        .then((response) => {
            res.send(res)
        }).catch((err) => {
            console.log(err);
            res.send(":(")
        });
});

app.get('/test', (req, res) => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("language", "en_US");
    encodedParams.append("limit", "30");
    encodedParams.append("location_id", "297704");
    encodedParams.append("currency", "USD");

    const options = {
        method: 'POST',
        url: 'https://worldwide-restaurants.p.rapidapi.com/search',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com',
            'X-RapidAPI-Key': '8f217f8828msh90af3811d263397p1fdb9ajsnccdd8074f156'
        },
        data: encodedParams
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});

app.listen(8080, () => {
    console.log(`Server listening @ 8080`);
});