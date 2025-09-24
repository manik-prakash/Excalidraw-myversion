import { Router , type Router as RouterType} from "express";
import { signin, signup } from "../Controllers/authController";

const router : RouterType= Router();

router.post("/signin", signin);

router.post("/signup", signup);

export default router;
