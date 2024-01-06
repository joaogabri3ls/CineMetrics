import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
    BsXLg
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard";

import './Movie.css';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        
        setMovie(data);
    }

    const handleGoBack = () => {
        window.history.back();
      };
    
    const fortmatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {
        const movieURL = `${moviesUrl}${id}?${apiKey}`;
        getMovie(movieURL);
    })

    return (
    <div className="movie-page">
                    <button type="button" className="close" onClick={handleGoBack}><BsXLg/></button>
        {movie && (
        <>
        <MovieCard movie={movie} showLink={false} />
        <div className="container-info">
        <p className="tagline">{movie.tagline}</p>        
            <div className="info-description">
                <h3>
                    Description:
                </h3>
                <p>{movie.overview}</p>
            </div>
                <div className="info">
                    <h3>
                        <BsWallet2 />Budget
                    </h3>
                    <p>{fortmatCurrency(movie.budget)}</p>
                </div>
                <div className="info">
                    <h3>
                        <BsGraphUp /> Revenue
                    </h3>
                    <p>{fortmatCurrency(movie.revenue)}</p>
                </div>
                <div className="info">
                    <h3>
                        <BsHourglassSplit />Duration
                    </h3>
                    <p>{movie.runtime} mins</p>
                </div>
        </div>
        </>
     )}
    </div>
    )
};

export default Movie;