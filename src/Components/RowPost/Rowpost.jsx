import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constants';
import YouTube from 'react-youtube';

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState('');
  
  
useEffect(() => {
  axios
    .get(props.url)
    .then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
}, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
          if(response.data.results.length!==0){
            setId(response.data.results[0])
          }
          
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          return (
            <div className='movie-container'>
              <img
                className={props.isSmall ? "small-poster" : "poster"}
                src={`${imageUrl + obj.backdrop_path}`}
                onClick={() => {
                  handleClick(obj.id);
                }}
                alt="poster"
              />
              <p className="movie-title">{obj.title || obj.name}</p>
            </div>
          );
        })}
      </div>
      {id && <YouTube videoId={id.key} opts={opts} />}
    </div>
  );
}

export default Rowpost
