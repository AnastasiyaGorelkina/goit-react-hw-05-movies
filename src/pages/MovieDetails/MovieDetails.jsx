import { useEffect, useState } from "react";
import { getMoviesDeteils } from "api/api";
import { Outlet, useLocation, useParams, Link } from "react-router-dom";

const MovieDetails = () => {
    const [details, setDetails] = useState('');
    const [status, setStatus] = useState('pending');
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const baseUrl = 'https://image.tmdb.org/t/p/w500/';
    const { title, poster_path, vote_average, overview, genres } = details;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const data = await getMoviesDeteils(movieId);
                setDetails(data);
                setStatus('resoled');
            } catch (error) {
                setStatus('rejected');
                setError(error);
            }
        };
        fetchMovieDetails(movieId);
    }, [movieId]);

    const userScore = vote_average ? `${(vote_average * 10).toFixed(0)}%` : 'Not rated yet';

    return (
        <div>
            <div>
                <Link to={location.state?.from ?? '/'}>Go back</Link>
            </div>
            {status === 'pending' && 'Loading...'}
            {status === 'rejected' && <h3>{error.message}</h3>}
            {status === 'resolved' && (
                <div>
                    <div>
                        <div>
                            <img src={`${baseUrl}${poster_path}`} alt={title} width="400px" />
                        </div>
                        <div>
                            {<h1>{title}</h1>}
                            <p>User Score: {userScore}</p>
                            <h2>Overview</h2>
                            <p>{overview}</p>
                            <h2>Genres</h2>
                            {genres && genres.map(el => <p key={el.id}>{el.name}</p>)}
                        </div>
                    </div>
                    <div>
                        <p>Additional information</p>
                        <Link to="cast">Cast</Link>
                        <Link to="reviews">Reviews</Link>
                    </div>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default MovieDetails;