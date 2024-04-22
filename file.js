// Example JavaScript to toggle a class for a menu on mobile view
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('nav ul');
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('show');
    });
});
function sendMessage() {
    var input = document.getElementById('chat-input');
    var message = input.value.trim();
    if(message !== "") {
        var chatBox = document.getElementById('chat-box');
        var newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
}
