import express from "express";
import {
  createRepair,
  deleteRepair,
  findAllRepairs,
  findOneRepair,
  updateRepair,
} from "./repairs.controller.js";
import { validExistRepair } from "./repairs.middleware.js";
import { protect, restrictTo } from "../users/user.middleware.js";
export const router = express.Router();

router.use(protect);
//Rutas que get de los datos sin parametro y Post
router
  .route("/")
  .get(restrictTo("employee"), findAllRepairs)
  .post(createRepair);
//Routas que permiten crear consultar datos con parametros
/* Get ,patch , delete*/
router
  .route("/:id")
  .get(validExistRepair, restrictTo("employee"), findOneRepair)
  .patch(validExistRepair, restrictTo("employee"), updateRepair)
  .delete(validExistRepair, restrictTo("employee"), deleteRepair);
