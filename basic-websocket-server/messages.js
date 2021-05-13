const messages = (io) => {
  io.on("connection", (socket) => {
    console.log("Client connected: ", socket.id);

    socket.on("send-msg", (msg) => {
      console.log('"send-msg" event received: ', msg);
      io.emit("msg-received", msg);
    });
  });
};

export default messages;
