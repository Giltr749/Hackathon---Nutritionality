import express from "express";

const app = express();

app.get('/', (req,res)=>{
    res.send(res);
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening @ 8080`);
});