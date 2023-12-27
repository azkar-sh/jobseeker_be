const exspress = require("express");
const Router = exspress.Router();

const userController = require("../controllers/user-controllers");

Router.get("/", userController.getAllUser);
Router.get("/:id", userController.getUserById);
Router.post("/create", userController.createUser);
Router.patch("/update/:id", userController.updateUser);
Router.delete("/delete/:id", userController.deleteUser);

module.exports = Router;
