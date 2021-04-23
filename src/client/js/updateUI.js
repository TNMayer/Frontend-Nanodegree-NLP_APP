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
    const multiBox = document.getElementById("testMultiplication");
    multiBox.innerHTML = multiplication(7, 8);
    const sumBox = document.getElementById("testSummation");
    sumBox.innerHTML = sum(7, 8);
}

//testfunction
const multiplication = function (a, b) {
    return a * b;
}

module.exports = {
    updateUI,
    multiplication
};