export default function updateUI(data) {
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