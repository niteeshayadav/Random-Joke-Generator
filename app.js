const jokeText=document.querySelector(".jokeText");
const btn=document.querySelector(".joke-btn")
const URL="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const getJoke = async () => {
    let response=await fetch(URL);
    let data= await response.json();

    let finalJoke = data.type === "single" ? 
    data.joke : ` ${data.setup} \n ${data.delivery}`;
    
    jokeText.innerText = finalJoke;
}
btn.addEventListener("click", () => {
    getJoke();
})
