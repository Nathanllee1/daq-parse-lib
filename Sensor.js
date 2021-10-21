export default class Sensor {
    static getId() {
        throw new Error("NOT IMPLEMENTED");
        return 0;
    }

    static getDataLength() {
        throw new Error("NOT IMPLEMENTED");
    }

    static parse(ArrayBuffer) {
        throw new Error("NOT IMPLEMENTED");
        return {} //Here to trick Webstorm type checking.
    }
}
