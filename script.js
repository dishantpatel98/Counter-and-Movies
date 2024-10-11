
//variables
let count = 10;
let movies = ["DDLJ", "Matrix", "sholay"];
let newMovie = "";


//elements from HTML

let countEl = document.getElementById("count");
let addBtnEl = document.getElementById("add__btn");
let subBtnEl = document.getElementById("sub__btn");
let moviesEl = document.getElementById("movies");
let inputEl = document.querySelector(".movie__input");


//methods
const incrementCount = () =>{
    count++;
    countEl.innerHTML = count;
};

function decrementCount()
{
    count--;
    countEl.innerHTML = count;
}
const displayMovies = ()=>
{
    moviesEl.innerHTML = "";
    movies.map((movie) =>{
        let movieEl = document.createElement("li");
        movieEl.innerHTML = movie;
        moviesEl.appendChild(movieEl);
    });
};

const handleInput = (e) => 
{
    if(e.key == "Enter")
    {
        addMovie();
    }
    else
    {
        newMovie = e.target.value;  // inputEl.value
    }
};

const addMovie = ()=>{
        movies.push(newMovie);
        newMovie = "";
        displayMovies();
        inputEl.value = "";
    };




//events
document.addEventListener("DOMContentLoaded", ()=>{
    countEl.innerHTML = count;
    displayMovies();
});

addBtnEl.addEventListener("click", incrementCount);
subBtnEl.addEventListener("click", decrementCount);
inputEl.addEventListener("keyup", handleInput);