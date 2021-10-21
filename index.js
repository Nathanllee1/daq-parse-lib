import ParseManager from "./ParseManager.js"
const packet = [0x42, 0x0F, 0x05, 0x00, 0x01, 0x01, 0x00, 0x00, 0x00, 0, 0];

const pm = new ParseManager(console.log);

for (const b of packet) {
    pm.feedByte(b);
}
