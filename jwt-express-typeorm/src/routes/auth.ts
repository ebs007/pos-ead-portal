import { Router } from "express";
import AuthController from "../controller/AuthController";
import * as checkJwt from "../middlewares/checkJwt";

export const AuthRoutes = [
    {
    method: "post",
    route: "/login",
    controller: AuthController,
    action: "login"
},
 {
    method: "post",
    route: "/change-password",
    auth: checkJwt['checkJwt'],
    controller: AuthController,
    action: "changePassword"
}];