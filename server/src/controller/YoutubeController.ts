import axios, { AxiosResponse } from 'axios';


class YoutubeController {

    static getFirstIdVideoBySearch(search: string) {
        try {
            let idVideo: string = "";
            var api_key = "AIzaSyCYvhL80MgUNnoXCXdapS5PJHu2FBtmLU0";
            const instance = axios.create({
                baseURL: 'https://www.googleapis.com/',
                timeout: 15000,
            });
            return instance.get('/youtube/v3/search?key=' + api_key + '&type=video&part=snippet&maxResults=1&q=' + search)
                .then(resp => 
                    resp.data.items[0].id.videoId
                ).catch((err) => "NULL")
        } catch (error) {
            throw error;
        }

    }

}
export { YoutubeController }

