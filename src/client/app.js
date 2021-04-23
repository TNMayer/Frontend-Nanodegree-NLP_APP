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
const {updateUI} = require('./js/updateUI.js');
const {postData} = require('./js/apiHandling.js');

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