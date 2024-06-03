import express from "express";
import UserController from "../Controllers/UserController.js";
const router = express.Router();

router.get("/", UserController.getList);
router.get("/users/:userId", UserController.getById);
router.post("/users/:userId", UserController.add);
router.put("/users/:userId", UserController.update);
router.delete("/users/:userId", UserController.delete);

export default router;

