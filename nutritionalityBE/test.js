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



app.get('/nearby', async (req, res) => {
    const location = await findLoc();
    const keyWord = 'restaurant';
    const locationSearch = `${location.latitude}%2C${location.longitude}`;
    console.log(locationSearch);
    const radius = '500';
    const type = 'restaurant';
    const key = 'AIzaSyCDbMPheigEhLZzpQbWBSMT33_qRKpoyAA';
    const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${keyWord}&location=${locationSearch}&radius=${radius}&type=${type}&key=${key}`;
    const response = await axios.get(URL);
    // console.log(response.data.results);
});

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

app.listen(8080, () => {
    console.log(`Server listening @ 8080`);
});