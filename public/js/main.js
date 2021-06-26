const socket = io();

socket.on('message', message =>{
console.log(message);
displaymessage(message);

});




function submitchat(){

    const textmessage = document.getElementById("textmessage").value;
    socket.emit('chatmessage',textmessage);
    document.getElementById("textmessage").value = '';

}

function displaymessage(msg){

    var div = document.getElementById('displayMessage');

    div.innerHTML += '<div>'+msg+'</div>';

}