
const emoji=["😊","🤣","❤","😁","🎶","😉","💋","🌹","💖","😃","🐱‍👓","🤢","🎁","🤔","😆","🤞","✌","💕","🎂","🎉","✨","👀","✔","🐱‍🚀","🎈","🎄","🎀","🎢","👓","⏲","⏱","⌚","🍕","🍔","🍟"]
const generateBtn= document.getElementById('btn');
generateBtn.addEventListener('click', function(){
    let output=emoji[Math.floor(Math.random()*emoji.length)];
    document.getElementById("emoji-container").textContent=output;
})