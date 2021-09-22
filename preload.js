const { contextBridge } = require("electron");
const io = require("socket.io-client");

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('you are connected!');
});

var form = document.querySelector('#form');
var input = document.querySelector('#input');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

contextBridge.exposeInMainWorld('socket', socket);
