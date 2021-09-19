const io = require("socket.io-client");
const socket = io('http://localhost:3000');

window.addEventListener('DOMContentLoaded', () => {
    var messages = document.querySelector('#messages');
    var form = document.querySelector('#form');
    var input = document.querySelector('#input');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (input.value) {
            socket.emit('chat message', input.value);
            input.value = '';
        }
    });

    socket.on('chat message', function (msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    });
})

