class SerializationHelper {
    static toInstance<T>(obj: T, json: string) : T {
        var jsonObj = JSON.parse(json);

        if (typeof obj === "function") {
            obj(jsonObj);
        }
        else {
            for (var propName in jsonObj) {
                obj = jsonObj[propName]
            }
        }

        return obj;
    }
}
