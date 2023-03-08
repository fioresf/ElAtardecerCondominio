const express=require("express");

const router = express.Router();

//Controlador con las acciones de las rutas
const residenciasController=require("../controllers/residenciasController");

//Rutas de videojuegos
router.get("/",residenciasController.get);
router.get("/:id",residenciasController.getById);
module.exports = router;
