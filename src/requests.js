const API_KEY = "b2b8d9dac21896ed04df7c67e7c0f621"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTV: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
    fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}`,
    
}

export default requests;
