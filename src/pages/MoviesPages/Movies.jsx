import { useEffect, useState } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { searchMovies } from "api/api";

const Movies = () => {
    const [search, setSearch] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const location = useLocation();
    const query = searchParams.get('query');

    const findMovies = async () => {
        if (!query) return;

        setStatus('pending');
        try {
            const { results } = await searchMovies(query);
            setSearch(results);
            setStatus('resolved');
        } catch (error) {
            setError(error);
            setStatus('rejected');
        }
    };

    useEffect(() => {
        findMovies();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (!query) {
            alert('sorry, something went wrong');
            return;
        }
        findMovies();
    };

    const updateInput = e => {
        setSearchParams({ query: e.target.value });
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={updateInput} />
                    <button type="submit">Search</button>
                </label>
            </form>
            <div>
                {status === 'pending' && 'Loading...'}
                {status === 'rejected' && <h3>{error.message}</h3>}
                {status === 'resolved' && (
                    <div>
                        <ul>
                            {search.map(({ title, id }) => (
                                <NavLink to={`/movies/${id}`} state={{ from: location }} key={id}>{title}</NavLink>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Movies;