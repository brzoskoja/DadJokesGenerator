
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

changeColors(randomColor());
getNextJoke();
$("#more").click(getNextJoke);
$("#twitter").click(publishToTwitter)
$("#email").click(sendEmail);
function randomColor() {
    return colors[Math.floor(Math.random() * 12)];
}
function changeColors(randomColor){
$("body,button").css('backgroundColor', randomColor);
$("h1,h5").css('color', randomColor);
}
function getNextJoke(){
    $.getJSON("https://icanhazdadjoke.com/",{
        headers: {
            "Accept": "application/json"
        }
    }).done((result)=>{
        $("#joke").text(result.joke);
        changeColors(randomColor());
    });
}
function publishToTwitter(){
    let win = window.open('http://twitter.com/share?url=' + encodeURIComponent("DadJokes") + '&text=' + encodeURIComponent($("#joke").text()) + "&hashtags=dadjokes", '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0', "_blank");
    win.focus();
}
function sendEmail(){
    window.open(`mailto:?subject=${"I have a great joke for you!"}&body=${$("#joke").text()}`);
}
