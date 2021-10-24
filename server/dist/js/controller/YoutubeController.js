"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeController = void 0;
const axios_1 = __importDefault(require("axios"));
class YoutubeController {
    static getFirstIdVideoBySearch(search) {
        try {
            let idVideo = "";
            var api_key = "AIzaSyCYvhL80MgUNnoXCXdapS5PJHu2FBtmLU0";
            const instance = axios_1.default.create({
                baseURL: 'https://www.googleapis.com/',
                timeout: 15000,
            });
            return instance.get('/youtube/v3/search?key=' + api_key + '&type=video&part=snippet&maxResults=1&q=' + search)
                .then(resp => resp.data.items[0].id.videoId).catch((err) => "NULL");
        }
        catch (error) {
            throw error;
        }
    }
}
exports.YoutubeController = YoutubeController;
