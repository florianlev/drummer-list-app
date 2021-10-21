import { Response, Request } from 'express'
import { Drummer } from '../models/Drummer';

const getDrummers = async (req: Request, res: Response): Promise<void> => {
    try {
        // Simulation provenance d'une BDD
        var jsonFile = require('./drummers.json');
        
        let drummers: Array<Drummer> = Drummer.fromSerialized(jsonFile);
        res.status(200).json({ drummers })
    } catch (error) {
        console.log('error : ' + error)
        throw error
    }
}

export { getDrummers }
