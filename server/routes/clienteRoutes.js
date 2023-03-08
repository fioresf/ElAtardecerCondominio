const express=require("express");

const router = express.Router();

//Controlador con las acciones de las rutas
const clienteController=require("../controllers/clienteController");

//Rutas de videojuegos
router.get("/",clienteController.get);
router.get("/:id",clienteController.getById);
module.exports = router;
