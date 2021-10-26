const apiKey = '88449d803a568a37169bac400f61bdee'
const apiURL = 'https://api.themoviedb.org/3/search/movie?api_key=88449d803a568a37169bac400f61bdee'
// // // grab form elements
const inputValue = document.querySelector('#inputValue')
const searchBtn = document.querySelector('#searchBtn')
const searchResults = document.querySelector('#search-results')
const imgPath = 'https://image.tmdb.org/t/p/w1280'
// const movieDetails = document.querySelector("#movie-details")
// const detailImage = movieDetails.querySelector("detail-image")
// const detailName = movieDetails.querySelector("movie-name")


searchBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const newURL = `${apiURL}&query=${inputValue.value}`
    
    fetch(newURL)
    .then(res=> res.json())
    .then(movies => {
        console.log(movies)
         searchResults.innerHTML = " ";
             movies.results.forEach(movie => {
             const movieResult = document.createElement('div')
             const movieImage = document.createElement('img')
             const movieTitle= document.createElement('span')

             movieResult.classList.add("each-movie");
             movieTitle.innerText = movie.title; 
             movieTitle.classList.add("title");
             movieImage.src = imgPath + movie.poster_path;

             movieResult.append(movieImage,movieTitle);
             searchResults.append(movieResult);

           
             })

         });
        })

   