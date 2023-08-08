const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "no name", apikey } = req.query;

  res.status(403).json({
    msg: "get API - Desde controlador",
    q,
    nombre,
    apikey,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.status(403).json({
    msg: "put API - usuarios Put",
    id,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.status(403).json({
    msg: "post API - Usuarios Post",
    nombre,
    edad,
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
