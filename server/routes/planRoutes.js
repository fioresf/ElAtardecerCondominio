const express=require("express");

const router = express.Router();

//Controlador con las acciones de las rutas
const planController=require("../controllers/planController");

//Rutas de videojuegos
router.get("/",planController.get);
router.get("/:id",planController.getById);
module.exports = router;
