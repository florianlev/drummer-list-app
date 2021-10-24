import { Response, Request } from 'express'
import { Drummer } from '../models/Drummer';
import { YoutubeController } from "./YoutubeController"

// get all drummers from JSON
const getDrummers = async (req: Request, res: Response): Promise<void> => {
    try {
        // Simulation provenance d'une BDD
        var jsonFile = require('./drummers.json');
        let drummers: Array<Drummer> = Drummer.fromSerialized(jsonFile);

        // idVideo youtube
        for (let i = 0; i < drummers.length; i++) {
            await YoutubeController.getFirstIdVideoBySearch(drummers[i].name)
                .then(resp => drummers[i].idVideo = resp)
                .catch((err) => drummers[i].idVideo = "NULL");
        }

        res.status(200).json({ drummers })
    } catch (error) {
        console.log('error : ' + error)
        throw error
    }
}

// get drummer by id from JSON
const getDrummerById = async (req: Request, res: Response): Promise<void> => {
    try {
        // Simulation provenance d'une BDD
        var jsonFile = require('./drummers.json');
        let drummers: Array<Drummer> = Drummer.fromSerialized(jsonFile);
        let drummer: Drummer | any = drummers.find( e => e.id === parseInt(req.params.id));

        console.log(drummer)


        await YoutubeController.getFirstIdVideoBySearch(drummer.name)
            .then(resp => drummer.idVideo = resp)
            .catch((err) => drummer.idVideo = "NULL");
  

        res.status(200).json({ drummer })
    } catch (error) {
        console.log('error : ' + error)
        throw error
    }
}

export { getDrummers, getDrummerById }
