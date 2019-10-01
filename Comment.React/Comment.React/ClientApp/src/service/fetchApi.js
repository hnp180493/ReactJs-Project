
class FetchAPI {
    static host = `http://localhost:55937`;
    static addComment = `/api/comment/add`;
    static getChildCommentsAndUsers = `/api/comment/get-child-comments-and-users`;

    static async get(url) {
        const response = await fetch(`${this.host}${url}`);
        const data = await response.json();
        return data;
    }

    static getWithCallBack(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                callback(data);
            });
    }

    static async post(url, params) {
        // Default options are marked with *
        return await fetch(`${this.host}${url}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(params), // body data type must match "Content-Type" header
        });
        // .then(response => response.json()); // parses response to JSON
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