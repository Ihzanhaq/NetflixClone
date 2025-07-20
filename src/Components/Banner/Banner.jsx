import React, { useEffect } from 'react'
import './Banner.css'
import axios from '../../axios';
import { API_KEY,imageUrl } from '../../Constants/constants';
import { useState } from 'react';

function Banner() {
  const [movie,setMovie]=useState(null)
  useEffect(()=>{
    axios.get(`/trending/movie/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0]);
      const movies =response.data.results
      if(movies.length>0){
          const random_index=Math.floor(Math.random()* movies.length)
          setMovie(response.data.results[random_index]);
      }
    });
  },[])
  return (
    <div
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
    className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          {movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="fade_bottom">
        
      </div>
    </div>
  );
}

export default Banner
