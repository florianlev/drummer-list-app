"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDrummerById = exports.getDrummers = void 0;
const Drummer_1 = require("../models/Drummer");
const YoutubeController_1 = require("./YoutubeController");
// get all drummers from JSON
const getDrummers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var jsonFile = require('./drummers.json');
        let drummers = Drummer_1.Drummer.fromSerialized(jsonFile);
        // get id video on API youtube
        for (let i = 0; i < drummers.length; i++) {
            yield YoutubeController_1.YoutubeController.getFirstIdVideoBySearch(drummers[i].name)
                .then(resp => drummers[i].idVideo = resp)
                .catch((err) => drummers[i].idVideo = "NULL");
        }
        res.status(200).json({ drummers });
    }
    catch (error) {
        throw error;
    }
});
exports.getDrummers = getDrummers;
// get drummer by id from JSON
const getDrummerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var jsonFile = require('./drummers.json');
        let drummers = Drummer_1.Drummer.fromSerialized(jsonFile);
        let drummer = drummers.find(e => e.id === parseInt(req.params.id));
        // get id video on API youtube
        yield YoutubeController_1.YoutubeController.getFirstIdVideoBySearch(drummer.name)
            .then(resp => drummer.idVideo = resp)
            .catch((err) => drummer.idVideo = "NULL");
        res.status(200).json({ drummer });
    }
    catch (error) {
        throw error;
    }
});
exports.getDrummerById = getDrummerById;
