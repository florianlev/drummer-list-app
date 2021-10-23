import { Response, Request } from 'express'
import { Drummer } from '../models/Drummer';
import { YoutubeController } from "./YoutubeController"


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
export { getDrummers }
