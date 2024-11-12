"use strict";

const express = require("express");
const socketIO = require("socket.io");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, "index.html");

const app = express();

const server = app
  .use((req, res) => res.sendFile(INDEX))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server, {});

io.on("connection", (socket) => {
  socket.on("emit", ($data) => {
    if ($data.namespace && $data.namespace !== "emit") {
      io.emit($data.namespace, $data.data || []);
    }
  });
});

// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
