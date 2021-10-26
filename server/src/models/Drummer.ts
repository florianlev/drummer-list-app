import { IDrummer } from './../types/Drummer'

class Drummer {
    id: number
    name: string
    description: string
    marks: string
    styles: string
    nationality: string
    idVideo: string


    constructor(id: number, name: string, marks: string, description: string, styles: string, nationality: string, idVideo: string) {
        this.id = id;
        this.name = name;
        this.marks = marks;
        this.description = description;
        this.styles = styles;
        this.nationality = nationality;
        this.idVideo = idVideo;
    }

    private toObject() {
        return {
            id: this.id,
            name: this.name,
            marks: this.marks,
            description: this.description,
            styles: this.styles,
            nationality: this.nationality,
            idVideo: this.idVideo
        }
    }

    serialize() {
        return JSON.stringify(this.toObject());
    }

    static fromSerialized(serialized: string) : Drummer[]{
        const drummersJson = JSON.parse(JSON.stringify(serialized));
        let listDrummers: Array<Drummer> = [];
        for (let i = 0; i < drummersJson.length; i++) {
            var objDrum = new Drummer(
                parseInt(drummersJson[i].id),
                drummersJson[i].name,
                drummersJson[i].marks,
                drummersJson[i].description,
                drummersJson[i].styles,
                drummersJson[i].nationality,
                ""
            );
            listDrummers.push(objDrum);
        }
        return listDrummers;
    }
}


export { Drummer }
