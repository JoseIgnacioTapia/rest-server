const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // Directorio Público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.status(403).json({
        msg: "get API",
      });
    });

    this.app.put("/api", (req, res) => {
      res.status(403).json({
        msg: "get API",
      });
    });

    this.app.post("/api", (req, res) => {
      res.status(403).json({
        msg: "get API",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.status(403).json({
        msg: "get API",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
