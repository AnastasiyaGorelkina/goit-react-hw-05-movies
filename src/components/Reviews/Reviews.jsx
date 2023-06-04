import { useEffect, useState } from "react";
import { getMoviesReviews } from "api/api";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const { results } = reviews;

    useEffect(() => {
        const getReviews = async () => {
            try {
                const data = await getMoviesReviews(movieId);
                setReviews(data);
                setStatus('resolved');
            } catch (error) {
                setError(error);
                setStatus('rejecterd');
            }
        };
        getReviews();
    }, [movieId]);

    return (
        <>
            {status === 'pending' && 'loading...'}
            {status === 'rejected' && <h3>{error.message}</h3>}
            {status === 'resolved' && (
                <ul>
                    {results.length === 0 && (
                        <h1>Sorry, we don't have any reviews for this movie yet</h1>
                    )}
                    {results && results.map(el => (
                        <li key={el.id}>
                            <h1>{el.author}</h1>
                            <p>{el.content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Reviews;