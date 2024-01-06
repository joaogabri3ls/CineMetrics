import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
    const voteAverage = parseFloat(movie.vote_average);

    return (<div className="movie-card">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar/>{voteAverage.toFixed(1)}
        </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
    );
};

export default MovieCard;