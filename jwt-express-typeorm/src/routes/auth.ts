import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
//Login route
router.post("/login", AuthController.login);

//Change my password
router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;

// import { Router } from "express";
// import AuthController from "../controller/AuthController";
// import * as checkJwt from "../middlewares/checkJwt";

// export const AuthRoutes = [
//     {
//     method: "post",
//     route: "/login",
//     controller: AuthController,
//     action: "login"
// },
//  {
//     method: "post",
//     route: "/change-password",
//     auth: checkJwt['checkJwt'],
//     controller: AuthController,
//     action: "changePassword"
// }];