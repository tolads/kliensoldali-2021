import { toast } from "react-toastify";
import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:3031";

let socket = null;

socket = io(SERVER_URL, { transports: ["websocket"] });

console.log({ socketId: socket.id });

socket.on("connect", () => {
  console.log({ socketId: socket.id });

  socket.emit("send-msg", "event parameter");
});

socket.on("msg-received", (message) => {
  console.log("msg received: ", message);
  toast(message);
});
