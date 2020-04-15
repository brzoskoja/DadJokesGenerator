var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

changeColors(randomColor());
getNextJoke();
let nextButton = document.getElementById("more");
nextButton.addEventListener("click", getNextJoke);
let twitterButton = document.getElementById("twitter");
twitterButton.addEventListener("click", publishToTwitter)
let facebookButton = document.getElementById("facebook");
facebookButton.addEventListener("click", sendEmail);



function changeColors(randomColor) {
    let body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = randomColor;
    let texts = document.querySelectorAll("h1, h5");
    texts.forEach((element) => {
        element.style.color = randomColor;
    });
    let buttons = document.querySelectorAll("button");
    buttons.forEach((element) => {
        element.style.background = randomColor;
    });
}

function randomColor() {
    return colors[Math.floor(Math.random() * 12)];
}

function getNextJoke() {
    let url = "https://icanhazdadjoke.com/";
    let params = {
        headers: {
            "Accept": "application/json"
        }
    }
    let joke;
    fetch(url, params)
        .then(data => { return data.json() })
        .then(res => { updateJoke(res.joke) });
}
function updateJoke(joke) {
    document.getElementById("joke").textContent = joke;
    changeColors(randomColor());
}

function publishToTwitter() {
    let url = "DadJokes";
    let text = document.getElementById("joke").textContent;
    let win = window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text) + "&hashtags=dadjokes", '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0', "_blank");
    win.focus();
}

function sendEmail() {

    let text = document.getElementById("joke").textContent;
    let subject = "I have a great joke for you!"; 
    window.open(`mailto:?subject=${subject}&body=${text}`);

}