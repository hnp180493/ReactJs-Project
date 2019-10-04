import * as signalR from '@aspnet/signalr';
let connection = new signalR.HubConnectionBuilder()
    .withUrl('http://localhost:55937/like-button-hub')
    .build();

connection.start();

let hubConnectionReducer = (state = connection, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default hubConnectionReducer;