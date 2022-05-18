import express from "express";
const app = express();
import "dotenv/config";
import cors from 'cors';
import signupController from './controllers/signupController.js';
import loginController from './controllers/loginController.js';
import signupValidation from './middlewares/signupValidation.js';
import loginValidation from './middlewares/loginValidation.js';
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from 'body-parser';
import db from './connection.js'
import jwt from 'jsonwebtoken';
import authenticateToken from './middlewares/authenticateToken.js';
import userRouter from './routes/userRoutes.js';
import multer from "multer";
const upload = multer({ dest: process.env.UPLOAD_FOLDER + '/'});



const connection = db;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
    key: 'userId',
    secret: 'very-secret-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }, 
}));


app.get('/', authenticateToken, (req, res) => {
    res.send(req.user);
})

app.post('/', (req, res) => {
    const username = req.body.username;
    const user = {
        name: req.body.username,
        id: req.body.id,
        email: req.body.email
    }
    
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });


})


app.post('/signup',signupValidation, upload.single('picture'), signupController.signup);
app.post('/login',loginValidation, loginController.login);
app.use('/user',authenticateToken, userRouter);

app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`));
