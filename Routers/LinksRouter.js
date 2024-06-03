import express from "express";
import LinkController from "../Controllers/LinkController.js";

const router = express.Router();

router.get("/", LinkController.getList);
router.get("/links/:linkId", LinkController.getById);
router.post("/links", LinkController.add);
router.put("/links/:linkId", LinkController.update);
router.delete("/links/:linkId", LinkController.delete);

export default router;

