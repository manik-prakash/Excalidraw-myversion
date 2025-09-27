import { Router , type Router as RouterType} from "express";
import { createRoom } from "../Controllers/roomController";
import { verify } from "../Middlewares/auth";
const router : RouterType= Router();

router.post("/create", verify,createRoom);

export default router;
