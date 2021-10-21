"use strict";
class SerializationHelper {
    static toInstance(obj, json) {
        var jsonObj = JSON.parse(json);
        if (typeof obj === "function") {
            obj(jsonObj);
        }
        else {
            for (var propName in jsonObj) {
                obj = jsonObj[propName];
            }
        }
        return obj;
    }
}
