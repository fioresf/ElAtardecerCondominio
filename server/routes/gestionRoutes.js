const express=require("express");

const router = express.Router();

//Controlador con las acciones de las rutas
const gestionController=require("../controllers/gestionController");

//Rutas de videojuegos
router.get("/",gestionController.get);
router.get("/:id",gestionController.getById);
module.exports = router;
