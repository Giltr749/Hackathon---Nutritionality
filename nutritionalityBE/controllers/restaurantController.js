import { fetchRes } from '../middlewares/restaurantFetch.js';
import db from '../connection.js'



const getRes = async (req, res) => {
    
    const body = {};
    body.input = req.body.input;
    body.restaurants = req.body.restaurants;
    // const requestJson = JSON.parse(req.body);
    console.log(req.body);

    const response = await fetchRes(body);
    // res.send(requestJson)
    res.send('hi');
}



export default { getRes }