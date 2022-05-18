import { fetchRes } from '../middlewares/restaurantFetch.js';
import db from '../connection.js'



const getRes = async (req, res) => {
    
    const requestJson = JSON.stringify(req.body);
    

    const response = await fetchRes(requestJson);
    res.send(response)
    // res.send(response.data);
}



export default { getRes }