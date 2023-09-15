
/**
 * The Errors class used in the InfluxDB Manager module
 */
export default class Errors {

    /**
     * Constructor
     */
    constructor() {};


    /**
     * @param methodName - the name of the method that was not implemented
     */
    static throwMethodNotImplemented(methodName? : string) : never {
        throw new Error(`Error calling the method ${methodName}: Method not implemented`);
    };

    /**
     * @param methodName - the name of the method that was not reachable
     */
    static throwNotReachable(methodName? : string) : never {
        throw new Error(`Error calling the method ${methodName}: Method not reachable`);
    };

};