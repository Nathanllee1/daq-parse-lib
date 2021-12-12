import { connected_status, frame } from "./dashboard_store.js"

export const connect = () => {
    let socket;
    try {
        socket = new WebSocket("ws://" + window.location.hostname + ":4000");
    } catch {
        throw "Cannot connect to ws://" + window.location.hostname + ":4000";
    }

    // Connection opened
    socket.addEventListener("open", function (event) {
        console.log("Connected to the server");
        socket.send("Hello Server!");
        connected_status.update(n => n = true);
    });

    socket.addEventListener("message", function (event) {
        frame.update((frame) => {
            // console.log(JSON.parse(event.data));
            return frame = JSON.parse(event.data);
        });
    });

    socket.addEventListener("close", (event) => {
        connected_status.update(n => n = false);
    });
};

