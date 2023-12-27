import express from "express";
import {
  createUser,
  deleteUser,
  findAllUsers,
  findOneUser,
  updateUser,
  login,
} from "./users.controller.js";
import {
  protect,
  protectAccountOwner,
  validExistUser,
} from "./user.middleware.js";

export const router = express.Router();
//Routas que permiten  Loguear personas
//tambien proteccion de las rutas
router.post("/login", login);
router.route("/").get(protect, findAllUsers).post(createUser);
router.use(protect);
router.use("/:id", validExistUser);

/*Rutas con */
router
  .route("/:id")
  .get(findOneUser)
  .patch(protectAccountOwner, updateUser)
  .delete(protectAccountOwner, deleteUser);
