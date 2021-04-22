import "isomorphic-fetch"

// styles
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
// images
import previewLogo from './images/preview_logo.svg';
// import from js modules
const sum = require('./js/apiHandling');
const multiplication = require('./js/updateUI');

//include images
let headerLogo = document.getElementById('previewLogo');
headerLogo.src = previewLogo;

//submit button handling
let submitButton = document.getElementById("sentimentFormSubmit");
if(submitButton) {
    submitButton.addEventListener("click", performSubmitAction);
}

function performSubmitAction(event) {
    event.preventDefault();
    let inputField = document.getElementById("sentimentSentence");
    inputField = inputField.value;
    
    if (inputField.length == 0) {
        console.log("Please enter a sentence");
    } else {
        postData('/sentimentAPI', {content: inputField})
            .then(function(data) {
                console.log(data);
                updateUI(data);
            });
    }

}

function updateUI(data) {
    const sentenceBox = document.getElementById("sentenceOutput");
    sentenceBox.innerHTML = data.inputSentence;
    const agreementBox = document.getElementById("sentenceAgreement");
    agreementBox.innerHTML = data.agreement;
    const subjectivityBox = document.getElementById("sentenceSubjectivity");
    subjectivityBox.innerHTML = data.subjectivity;
    const confidenceBox = document.getElementById("sentenceConfidence");
    confidenceBox.innerHTML = data.confidence;
    const ironyBox = document.getElementById("sentenceIrony");
    ironyBox.innerHTML = data.irony;
    const sumTest = document.getElementById("sumTest");
    sumTest.innerHTML = sum(1, 4);
    const multiplicationTest = document.getElementById("multiplicationTest");
    multiplicationTest.innerHTML = multiplication(7, 8);
}

// post
const postData = async (url = "", data = {}) => {
    // console.log(data);
    const response = await fetch(url, {
        method: 'POST', // GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData
    } catch(error) {
        console.log("Error: ", error);
    }
};