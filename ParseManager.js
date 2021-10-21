import SensorTime from "./SensorTime.js"

const STATE_SEARCH_MAGIC_1 = 0;
const STATE_SEARCH_MAGIC_2 = 1;
const STATE_PARSE_LENGTH = 2;
const STATE_PARSE_SUBPACKET_TYPE = 3;
const STATE_PARSE_SUBPACKET = 4;
const STATE_PARSE_CRC = 5;

const MAGIC_1 = 0x42;
const MAGIC_2 = 0x0F;

//0x42, 0x0F, LEN, LEN ...... CHECK, CHECK;
export default class ParseManager {
    static SENSOR_TYPES = [SensorTime];

    constructor(onParse) {
        this.onParse = onParse;
        this.littleEndian = true;
        this.packet = [];
        this.subpacket = [];
        this.crc = [];
        this.subpacketType = 0;
        this.len = 0;
        this.state = STATE_SEARCH_MAGIC_1;

        this.idSensorMap = {};
        for (const sensor of ParseManager.SENSOR_TYPES) {
            this.idSensorMap[sensor.getId()] = sensor;
        }
    }

    feedByte(b) {
        switch (this.state) {
            case STATE_SEARCH_MAGIC_1:
                if (b === MAGIC_1) this.state = STATE_SEARCH_MAGIC_2;
                break;

            case STATE_SEARCH_MAGIC_2:
                if (b !== MAGIC_2) {
                    this.state = STATE_SEARCH_MAGIC_1;
                    break;
                }
                //Got magic byte 2, start parsing this packet.
                this.state = STATE_PARSE_LENGTH;
                this.packet = [];
                this.crc = [];
                this.subpacket = [];
                break;

            case STATE_PARSE_LENGTH:
                this.packet.push(b);
                if (this.packet.length < 2) break;

                //Have both length bytes - parse them.
                this.len = new DataView(new Uint8Array(this.packet).buffer).getUint16(0, this.littleEndian);
                console.log("LEN:", this.len);

                if (this.len > 512)
                    this.state = STATE_SEARCH_MAGIC_1;
                else
                    this.state = STATE_PARSE_SUBPACKET_TYPE;
                break;

            case STATE_PARSE_SUBPACKET_TYPE:
                console.log("SUBPACKET T!");
                //TODO: ADD CHECK FOR PACKET DATA LENGHT TO TRANSION TO CRC CHECK.
                this.subpacketType = b;
                if (!this.idSensorMap[b])
                    this.state = STATE_SEARCH_MAGIC_1;
                else
                    this.state = STATE_PARSE_SUBPACKET;

                this.subpacketType = this.idSensorMap[b];
                this.subpacket = [];
                break;

            case STATE_PARSE_SUBPACKET:
                this.subpacket.push(b);
                if (this.subpacket.length < this.subpacketType.getDataLength()) break;

                //Have full sub packet
                let packetData = this.subpacketType.parse(new Uint8Array(this.subpacket).buffer);
                console.log(packetData);
                this.state = STATE_PARSE_SUBPACKET_TYPE;

            case STATE_PARSE_CRC:

        }

    }

    feedArrayBuffer(buffer) {

    }
}
