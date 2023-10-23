const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjhlYjY5MmU4N2EwMGM3MmQ5OTY0MWMyMjdiNTVlMSIsInN1YiI6IjY1MzA3MWNkZWRlYjQzMDEzOGEzY2E1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.by_Is38U4qak7pSxwBT3YW0h1ficldn4Ju1FTEQRuBs'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    const movies = response.results;
    console.log(movies)

    const mvpostersDOM = document.getElementById('mvposters')

    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i]
      mvpostersDOM.innerHTML = mvpostersDOM.innerHTML + `<div class="col">
      <div class="card clickcard" onclick= alert(${movie.id})> 
          <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}"
              class="card-img-top" alt="...">
          <div class="card-body">
              <h1 class="card-title">${movie.title}</h1>
              <p class="card-text">${movie.overview}</p>
              <p class="card-text">${movie.vote_average}</p>
          </div>
      </div>
  </div>`;
    console.log(movies.length)
    }
  
    function search() {
      let search = document.getElementsById("search-input")
      let inputtitle = document.getElementsByClassName("card-title")

    for (let i =0; i< title.length; i++) {
    
  }
}
  }
  )

  .catch(err => console.error(err));

