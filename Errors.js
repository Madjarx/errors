
/**
 * The Errors class used in the InfluxDB Manager module
 * 
 * Available methods:
 * @method throwMethodNotImplemented
 * @method throwMethodNotReachable
 */
export default class Errors {

    /**
     * Constructor
     */
    constructor() {};


    /**
     * @param methodName - the name of the method that was not implemented
     */
    throwMethodNotImplemented(methodName) {
        throw new Error(`Error calling the method ${methodName}: Method not implemented`);
    };

    /**
     * @param methodName - the name of the method that was not reachable
     */
    throwNotReachable(methodName) {
        throw new Error(`Error calling the method ${methodName}: Method not reachable`);
    };

};
