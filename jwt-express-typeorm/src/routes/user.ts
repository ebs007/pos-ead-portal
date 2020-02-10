import UserController from "../controller/UserController";
import * as checkJwt from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

export const UsersRoutes = [{
    method: "get",
    route: "/users",
    auth: [checkJwt['checkJwt'], checkRole(["ADMIN"])],
    controller: UserController,
    action: "listAll"
}, {
    method: "get",
    route: "/users/:id",
    auth: [checkJwt['checkJwt'], checkRole(["ADMIN"])],
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    auth: [checkJwt['checkJwt'], checkRole(["ADMIN"])],
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    auth: [checkJwt['checkJwt'], checkRole(["ADMIN"])],
    controller: UserController,
    action: "remove"
}];