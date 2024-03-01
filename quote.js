const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
synth = speechSynthesis;

 
const quotes = [

    "The only way to do great work is to love what you do. - Steve Jobs",

    "Innovation distinguishes between a leader and a follower. - Steve Jobs",

    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",

    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",

    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"

];
 
function randomQuote() {
    quoteBtn.classList.add("loading");
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Split the quote into text and author
    const parts = quotes[randomIndex].split(" - ");
    const quoteTextContent = parts[0];
    const authorNameContent = parts[1];

    // Update the HTML elements with the quote text and author name
    quoteText.innerText = quoteTextContent;
    authorName.innerText = authorNameContent;

    quoteBtn.classList.remove("loading");
    quoteBtn.innerText = "New Quote";
}
// Function to generate a random quote
function randomQuote() {
    // Stop any ongoing speech
    synth.cancel();

    quoteBtn.classList.add("loading");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [quoteTextContent, authorNameContent] = quotes[randomIndex].split(" - ");

    // Update the HTML elements with the quote text and author name
    quoteText.textContent = quoteTextContent;
    authorName.textContent = authorNameContent;

    quoteBtn.classList.remove("loading");
    quoteBtn.innerText = "New Quote";
}



// Event listener to speak or stop speaking the quote
speechBtn.addEventListener("click", () => {
    if (synth.speaking) {
        // If speech is currently being spoken, stop it
        synth.cancel();
    } else {
        // If speech is not currently being spoken, speak the quote
        if (!quoteBtn.classList.contains("loading")) {
            const utterance = new SpeechSynthesisUtterance(`${quoteText.textContent} by ${authorName.textContent}`);
            synth.speak(utterance);
        }
    }
});

copyBtn.addEventListener("click", ()=>{
    ///it will copy the quote
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);