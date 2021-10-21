import Sensor from "./Sensor.js";

export default class SensorTime extends Sensor {
    static getId() {
        return 0x01;
    }

    static getDataLength() {
        return 0x04;
    }

    static parse(ArrayBuffer) {
        return {
            time: new DataView(ArrayBuffer).getUint32(0, true)
        };
    }

}
