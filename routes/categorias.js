const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

// Obener todas las categorias - publico
router.get("/", (req, res) => {
  res.json("get");
});

// Obtener una categoria por id - publico
router.get("/:id", (req, res) => {
  res.json("get - id");
});

// Crear categoria - privado - cualquier persona con un token válido
router.post("/", (req, res) => {
  res.json("post");
});

// Actualizar - privado - cualquiera con token válido
router.put("/:id", (req, res) => {
  res.json("put");
});

// Borrar una categoría - Admin
router.delete("/:id", (req, res) => {
  res.json("delete");
});

module.exports = router;