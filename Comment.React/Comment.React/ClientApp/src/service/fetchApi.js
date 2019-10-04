
const axios = require('axios');
class FetchAPI {
    static host = `http://localhost:55937`;
    static addComment = `/api/comment/add`;
    static getChildCommentsAndUsers = `/api/comment/get-child-comments-and-users`;
    static getComments = `/api/Comment/get-comments`;
    static likeComment = `/api/likebutton/like-comment`;
    static getTotalLikeComment = `/api/likebutton/total-like-comment`;

    static async get(url, params) {
        let response = await axios.get(`${this.host}${url}`, {
            params: params
          });
        return response.data;
    }

    static async post(url, params) {
        return await axios.post(`${this.host}${url}`, params);
    }

    static put(url, params) {
        return fetch(`${this.host}${url}`, {
            method: "PUT",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(params),
        });
    }

    static delete(url, params) {
        return fetch(`${this.host}${url}`, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(params),
        });
    }
}

export default FetchAPI;