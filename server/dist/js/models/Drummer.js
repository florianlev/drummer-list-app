"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drummer = void 0;
class Drummer {
    constructor(id, name, marks, description, styles, nationality) {
        this.id = id;
        this.name = name;
        this.marks = marks;
        this.description = description;
        this.styles = styles;
        this.nationality = nationality;
    }
    toObject() {
        return {
            id: this.id,
            name: this.name,
            marks: this.marks,
            description: this.description,
            styles: this.styles,
            nationality: this.nationality,
        };
    }
    serialize() {
        return JSON.stringify(this.toObject());
    }
    static fromSerialized(serialized) {
        const drummersJson = JSON.parse(JSON.stringify(serialized));
        let listDrummers = [];
        for (let i = 0; i < drummersJson.length; i++) {
            var objDrum = new Drummer(parseInt(drummersJson[i].id), drummersJson[i].name, drummersJson[i].marks, drummersJson[i].description, drummersJson[i].styles, drummersJson[i].nationality);
            listDrummers.push(objDrum);
        }
        return listDrummers;
    }
}
exports.Drummer = Drummer;
