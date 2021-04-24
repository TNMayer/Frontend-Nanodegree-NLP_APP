const {sum} = require('./apiHandling.js');

const updateUI = function (data) {
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
}

//testfunction
const multiplication = function (a, b) {
    return a * b;
}

const validSentence = function (sentence)
{
    if (sentence.length == 0) {
        return false
    } else {
        return true
    }
} 

module.exports = {
    updateUI,
    multiplication,
    validSentence
};