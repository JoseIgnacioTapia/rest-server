const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "no name", apikey } = req.query;

  res.status(403).json({
    msg: "get API - Desde controlador",
    q,
    nombre,
    apikey,
  });
};

const usuariosPut = async (req, res = response) => {
  const { id } = req.params;
  const { password, google, correo, ...resto } = req.body;

  // TODO validar contra base de datos
  if (password) {
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.status(403).json({
    msg: "put API - usuarios Put",
    usuario,
  });
};

const usuariosPost = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  // Guardar en BD
  await usuario.save();

  res.json({
    usuario,
  });
};

const usuariosPatch = (req, res = response) => {
  res.status(403).json({
    msg: "patch API - Usuarios Patch",
  });
};

const usuariosDelete = (req, res = response) => {
  res.status(403).json({
    msg: "delete API - Usuarios Delete",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete,
};
