import express from 'express';
import WebSocket, { WebSocketServer } from 'ws';
import ParseManager from "./daq-parse-lib/ParseManager.js"
import fs from "fs"
const app = express()

// http stuff
const port = 3000;
app.use(express.static('frontend/public'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get("/config", (req, res) => {
  
})

// websocket stuff
const wss = new WebSocketServer({ port: 4000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
});

const send_to_everyone = (data) => {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

// fake injector
const pm = new ParseManager((data) => {
  setTimeout(() => {
    console.log("sending: " + JSON.stringify(data));
    send_to_everyone(JSON.stringify(data));
  }, 500)
  
});

let time = 0;
setInterval(() => {
  //const data = fs.readFileSync("./D26.bin", {encoding: null});
  //pm.feedArrayBuffer(data);
  let one = Math.floor(Math.random() * 100);
  let two = Math.floor(Math.random() * 100);
  send_to_everyone(JSON.stringify({
    time: time,
    bpFront: one,
    bpBack: two
  }))
  time += 1;
}, 1000)
