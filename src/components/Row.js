import React, {useState, useEffect} from 'react';
import axios from '../axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            
            setMovies(request.data.results)
            return request 
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title)
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
            }).catch((error) => console.log(error))
        }
    }
    

    return (
        <div className='row'>
            <h2 className='row__title'>{title}</h2>
            
            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id} 
                    onClick={() => handleClick(movie)}
                    className= {`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`https://image.tmdb.org/t/p/w500${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                    alt={movie.name} 
                     />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className="trailerVideo" />}

        </div>
    )
}

export default Row