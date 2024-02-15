import express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../../backend/contriollers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("You are authenticated and logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("You are authenticated and logged in you can delete account also");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello  hkj admin You are authenticated and logged in you can delete account also");
// });
  
router.put("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers)



export default router