import { useEffect, useState } from "react";
import { getTrendMovies } from "api/api";

const Home = () => {
    const [trend, setTrend] = useState();
    const [status, setStatus] = useState('pending');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendMovies = async () => {
            try {
                const data = await getTrendMovies();
                setTrend(data.results);
                setStatus('resolved');
            } catch (error) {
                setError(error);
                setStatus('rejected');
            }
        };

        fetchTrendMovies();
    }, []);

    return (
        <div>
            {status === 'pending' && 'Loading...'}
            {status === 'rejected' && <h3>{error.message}</h3>}
            {status === 'resolved' && (
                <div>
                    <h1>Trending Films</h1>
                    <li>
                        {trend && trend.map(({ title, id }) => (
                            <link to={`./movies/${id}`} key={id}>{title}</link>
                        ))}
                    </li>
                </div>
            )}
        </div>
    );
};

export default Home;