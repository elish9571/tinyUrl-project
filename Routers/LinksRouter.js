import express from "express";
import LinkController from "../Controllers/LinkController.js";

const router = express.Router();

// פעולות CRUD על קישורים
router.get("/", LinkController.getList);
router.get("/:id", LinkController.getById);
router.post("/", LinkController.add);
router.put("/:id", LinkController.update);
router.delete("/:id", LinkController.delete);

// Endpoint לדיווח קליקים
router.get('/:id/clicks', LinkController.getClicksReport);

export default router;
