import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { registrationMiddleware } = middlewares;
const { authController } = controllers;

const authRoute = express.Router();

authRoute.post(
  '/register',
  registrationMiddleware,
  authController.registerUser
);

export default authRoute;
