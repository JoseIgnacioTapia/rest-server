const { Router } = require("express");
const { check } = require("express-validator");

const { validarJWT, validarCampos, esAdminRole } = require("../middlewares");

const {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  borrarProducto,
} = require("../controllers/productos");

const {
  existeProductoPorID,
  existeCategoriaPorID,
} = require("../helpers/db-validators");

const router = Router();

// Obener todas las producto - publico
router.get("/", obtenerProductos);

// Obtener una producto por id - publico
router.get(
  "/:id",
  [
    check("id", "No es un id de Mongo válido").isMongoId(),
    check("id").custom(existeProductoPorID),
    validarCampos,
  ],
  obtenerProducto
);

// Crear producto - privado - cualquier persona con un token válido
router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("categoria", "No es un id de Mongo").isMongoId(),
    check("categoria").custom(existeCategoriaPorID),
    validarCampos,
  ],
  crearProducto
);

// Actualizar - privado - cualquiera con token válido
router.put(
  "/:id",
  [
    validarJWT,
    // check("categoria", "No es un id de Mongo").isMongoId(),
    check("id").custom(existeProductoPorID),
    validarCampos,
  ],
  actualizarProducto
);

// Borrar una categoría - Admin
router.delete(
  "/:id",
  [
    validarJWT,
    esAdminRole,
    check("id", "No es un id de Mongo válido").isMongoId(),
    check("id").custom(existeProductoPorID),
    validarCampos,
  ],
  borrarProducto
);

module.exports = router;
