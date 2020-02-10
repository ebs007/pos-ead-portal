import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import routes from "./routes";

//Connects to the Database -> then starts the express
createConnection()
  .then(async connection => {
    // Create a new express application instance
    const app = express();

    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    //Set all routes from routes folder
    app.use("/", routes);

    app.listen(3000, () => {
      console.log("Server started on port 3000!");
    });
  })
  .catch(error => console.log(error));

// import "reflect-metadata";
// import {createConnection, Any} from "typeorm";
// import * as express from "express";
// import * as bodyParser from "body-parser";
// import * as helmet from "helmet";
// import * as cors from "cors";
// import {Request, Response} from "express";
// import * as AuthRoutess from "./routes/auth";
// import * as UsersRoutes from "./routes/user";
// import {User} from "./entity/User";
// import { Router } from "express";

// createConnection().then(async connection => {

//     // create express app
//     const app = express();
//     app.use(cors());
//     app.use(helmet());
//     app.use(bodyParser.json());

//      //Set all routes from routes folder
//      app.use("/", routes);

    // console.log(AuthRoutess['AuthRoutes']);
    // console.log(UsersRoutes['UsersRoutes']);

//     var Routes:any = new Array();
//     Routes.push(...AuthRoutess['AuthRoutes']);
//     Routes.push(...UsersRoutes['UsersRoutes']);
// console.log(Routes);

//     // register express routes from defined application routes
//     Routes.forEach(route => {

//         if ("auth" in route) {

//             var rr = express.Router();

//             rr[route.method](route.route, [route.auth, (req: Request, res: Response, next: Function) => {
//                 const result = (new (route.controller as any))[route.action](req, res, next);
//                 if (result instanceof Promise) {
//                     result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
//                 } else if (result !== null && result !== undefined) {
//                     res.json(result);
//                 }
//             }]);
//             app.use("/", rr);
//           } else {
//             var rr = express.Router();
//             rr[route.method](route.route, (req: Request, res: Response, next: Function) => {
//                 const result = (new (route.controller as any))[route.action](req, res, next);
//                 if (result instanceof Promise) {
//                     result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
//                 } else if (result !== null && result !== undefined) {
//                     res.json(result);
//                 }
//             });
//             app.use("/", rr);
//           }

//     });

    // setup express app here
    // ...
    // app.use("/", Routes);
    // start express server
    // app.listen(3000);

    // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     username: "user1",
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     age: 27
    // }));
    // await connection.manager.save(connection.manager.create(User, {
    //     username: "user2",
    //     firstName: "Phantom",
    //     lastName: "Assassin",
    //     age: 24
    // }));

//     console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

// }).catch(error => console.log(error));
