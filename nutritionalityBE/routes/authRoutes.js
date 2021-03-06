import * as authController from "../controllers/authController.js";
import * as signUpMiddleWare from '../middlewares/signUpMiddleware.js';
import * as logInMiddleware from '../middlewares/logInMiddleware.js';
import * as authorize from '../middlewares/authorize.js';
import express from "express";

const router = express.Router();

router
    .post("/signup",
        signUpMiddleWare.signUpDataValidation,
        signUpMiddleWare.verifyNewUser,
        signUpMiddleWare.matchPasswords,
        signUpMiddleWare.encryptPassword,
        authController.signUp
    );

router
    .post("/login",
        logInMiddleware.logInDataValidation,
        logInMiddleware.verifyExistingUser,
        authController.logIn
    );

router
    .post("/logout",
        authorize.authorizeUser,
        authController.logOut
    );

export default router;