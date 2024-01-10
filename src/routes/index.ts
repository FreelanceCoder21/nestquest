import { Router } from "express";
import { addCity } from "../controller/city";
import { addUser } from "../controller/user";

const router = Router();

router.post("/addCity", addCity);
router.post("/addUser", addUser);

export default router;
