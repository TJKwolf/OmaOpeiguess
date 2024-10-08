document.getElementById('send-button').addEventListener('click',sendMessage);
document.getElementById('user-input').addEventListener('keypress',function(e){if(e.key === 'Enter'){sendMessage}});

async function sendMessage(){
    //luetaan käyttäjän antama teksti ja tallennetaan muuttujaan
    const userInput = document.getElementById('user-input').value;
    //tarkistetaan, että viesti ei ole tyhjä
    if(userInput.trim() === '') return;
    console.log(userInput);
    //lisätään viesti chatboksiin
    addMessageToChatbox(userInput);

    try{
  //tähän tulee POST-rajanpinnan pyyntö!
  const response = await fetch('/get-question',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify({question: userInput})
});
const data = await response.json();
console.log(data);
    }catch(error){
        console.error('Error:', error);
        addMessageToChatbox('Jotain meni pieleen yritä myöhemmin uudelleen');
    }

    //tyhjennetän tekstikenttä
    document.getElementById('user-input').value = '';
}

function addMessageToChatbox(message){
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    document.getElementById('chatbox').appendChild(messageElement);
    console.log(messageElement);
}