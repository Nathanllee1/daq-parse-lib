import Sensor from "./Sensor.js";

export default class SensorBrakePressure extends Sensor {
    static getId() {
        return 0x04;
    }

    static getDataLength() {
        return 0x04;
    }

    static parse(ArrayBuffer) {
        return {
            bpFront: new DataView(ArrayBuffer).getUint16(0, true),
            bpBack: new DataView(ArrayBuffer).getUint16(2, true),
        };
    }

}
