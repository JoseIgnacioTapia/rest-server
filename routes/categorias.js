const { Router } = require("express");
const { check } = require("express-validator");

const { validarJWT, validarCampos } = require("../middlewares");

const { crearCategoria } = require("../controllers/categorias");

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
router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearCategoria
);

// Actualizar - privado - cualquiera con token válido
router.put("/:id", (req, res) => {
  res.json("put");
});

// Borrar una categoría - Admin
router.delete("/:id", (req, res) => {
  res.json("delete");
});

module.exports = router;
