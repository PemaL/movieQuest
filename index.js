const apiKey = '88449d803a568a37169bac400f61bdee'
const apiURL = 'https://api.themoviedb.org/3/search/movie?api_key=88449d803a568a37169bac400f61bdee'
const imgPath = 'https://image.tmdb.org/t/p/w1280'
const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=88449d803a568a37169bac400f61bdee"
const upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=88449d803a568a37169bac400f61bdee"

//grabthe elements and assign a variable 
const inputValue = document.querySelector('#inputValue')   
const searchBtn = document.querySelector('#searchBtn')
const searchResults = document.querySelector('#search-results')
const form = document.querySelector('#search-form')
const modal = document.querySelector("#modal")
const displayTitle = modal.querySelector("#detail-title")  
const displayImage = modal.querySelector(".detail-img")     
const overView = modal.querySelector("#overview")
const votes = modal.querySelector("#votes")


// search and display results 
searchBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const newURL = `${apiURL}&query=${inputValue.value}`
    
    fetch(newURL)
    .then(res=> res.json())
    .then(movies => {
        console.log(movies)
         searchResults.innerHTML = " ";
             movies.results.forEach(movie => {
               showMovies(movie);
               
             })
         })
         //clears the input box after search button is clicked 
         form.reset();
        })

 // show results of searched movie        
function showMovies(movie){
    
    const movieResult = document.createElement('div')
    const movieImage = document.createElement('img')
    const movieTitle= document.createElement('span')

    movieResult.classList.add("each-movie");
    // if no poster, do not assign/display the movie 
    if(movie.poster_path !== null){
    movieTitle.innerText = movie.title; 
    movieTitle.classList.add("title");
    movieImage.src = imgPath + movie.poster_path;

    movieResult.append(movieImage,movieTitle);
    searchResults.append(movieResult);
    }
    //on click calls showDetails function
    movieResult.addEventListener('click',() => showDetails(movie))
 }
//on click display the details - display on modal box 
function showDetails(movie){
        //  modal.display = "block";
         displayTitle.textContent = movie.title;
         displayImage.src = imgPath + movie.poster_path;
         overView.textContent = movie.overview;
         votes.textContent = movie.vote_count;
         
         console.log(modal);
}

//get popular movies 
fetch(popularURL)
    .then(res => res.json())
    .then(movies => {
        console.log(movies)
        const popularMovies = document.querySelector('#popular-movies')
        movies.results.slice(0,5).forEach(movie => {
            const movieResult = document.createElement('div')
            const movieTitle= document.createElement('span')
            const movieImage = document.createElement('img')
            movieResult.classList.add("each-movie");
            movieTitle.innerText = movie.title;
            movieTitle.classList.add("title");
            movieImage.src = imgPath + movie.poster_path;
            movieResult.append(movieImage,movieTitle);
            popularMovies.append(movieResult);
        })
    })

//get upcoming movies 

fetch(upcomingURL)
    .then(res => res.json())
    .then(movies => {
        console.log(movies)
        const upcomingMovies = document.querySelector('#upcoming-movies')
        movies.results.slice(0,5).forEach(movie => {
            const movieResult = document.createElement('div')
            const movieTitle= document.createElement('span')
            const movieImage = document.createElement('img')
            movieResult.classList.add("each-movie");
            movieTitle.innerText = movie.title;
            movieTitle.classList.add("title");
            movieImage.src = imgPath + movie.poster_path;
            movieResult.append(movieImage,movieTitle);
            upcomingMovies.append(movieResult);
        })
    })