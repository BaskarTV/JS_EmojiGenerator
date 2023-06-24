const container = document.getElementById('emo')


function addTitleToContainer() {
    const h1element = document.createElement('h1')
    h1element.textContent = "Emo Generator 😁";
    h1element.classList.add("title-class")
    container.appendChild(h1element);
}

function inputPlaceholder() {
    // Input placeholder
    const inputHolder = document.createElement('input')
    inputHolder.placeholder = "Type I am and your(eg:'happy','sad')";
    inputHolder.id = "text"
    container.appendChild(inputHolder)

    // Button to generate emojis
    const subBttn = document.createElement('button')
    subBttn.innerHTML = 'Generate'
    subBttn.classList.add('sub--btn')
    subBttn.id = "ent--btn"
    container.appendChild(subBttn)

    // Result div containaier for the emojis

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    container.appendChild(resultDiv);




    // submitt btn input

    subBttn.addEventListener('click', function () {
        const textInput = document.getElementById('text').value.split(" "); const emoji = generateEmoji(textInput[2]);
        const pElement = document.getElementById('demo')
        pElement.textContent = emoji;
        resultDiv.innerHTML = '';
        resultDiv.appendChild(pElement);
    });


}

// emoji Generator


function generateEmoji(text) {
    let emoji;
    switch (text) {
        case "happy":
            emoji = "😊";
            break;
        case "sad":
            emoji = "😢";
            break;
        case "angry":
            emoji = "😠";
            break;
        case "unhappy":
            emoji = "😒";
            break;
        case "mad":
            emoji = "🤬"
            break;
        case "depressed":
            emoji = "🤯"
            break;
        case "love":
            emoji = "❤"
            break;
        default:
            emoji = "❓";
            break;
    }
    return emoji;
}


document.addEventListener('DOMContentLoaded', function () {
    addTitleToContainer();
    inputPlaceholder();
})

