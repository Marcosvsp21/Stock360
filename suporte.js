
         function toggleChat() {
        var chatWindow = document.getElementById('chatWindow');
        if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
            chatWindow.style.display = 'flex';
        } else {
            chatWindow.style.display = 'none';
        }
    }

    // Função para enviar uma mensagem
    function sendMessage() {
        var chatInput = document.getElementById('chatInput');
        var message = chatInput.value.trim();
        if (message !== '') {
            var chatBody = document.querySelector('.chat-body');
            var newMessage = document.createElement('p');
            newMessage.innerHTML = `<strong>Você:</strong> ${message}`;
            chatBody.appendChild(newMessage);
            chatInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }


    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
