import { useEffect, useState } from "react";
import { getMoviesDeteils } from "api/api";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Back, Text, BoxConteiner, Box } from "components/styled";

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
                setStatus('resolved');
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
                <Back to={location.state?.from ?? '/'}>Go back</Back>
            </div>
            {status === 'pending' && 'Loading...'}
            {status === 'rejected' && <h3>{error.message}</h3>}
            {status === 'resolved' && (
                <div>
                    <BoxConteiner>
                        <div>
                            <img src={`${baseUrl}${poster_path}`} alt={title} width="400px" />
                        </div>
                        <div>
                            {<h1>{title}</h1>}
                            <Text>User Score: {userScore}</Text>
                            <h2>Overview</h2>
                            <Text>{overview}</Text>
                            <h2>Genres</h2>
                            {genres && genres.map(el => <p key={el.id}>{el.name}</p>)}
                        </div>
                    </BoxConteiner>
                    <Box>
                        <Text>Additional information</Text>
                        <Back to="cast">Cast</Back>
                        <Back to="reviews">Reviews</Back>
                    </Box>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default MovieDetails;