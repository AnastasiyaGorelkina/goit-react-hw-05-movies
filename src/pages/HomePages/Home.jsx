import { useEffect, useState } from "react";
import { getTrendMovies } from "api/api";
import { List, Conteiner, Linker } from "components/styled";

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
                <Conteiner>
                    <h1>Trending Films</h1>
                    <List>
                        {trend && trend.map(({ title, id }) => (
                            <Linker to={`./movies/${id}`} key={id}>{title}</Linker>
                        ))}
                    </List>
                </Conteiner>
            )}
        </div>
    );
};

export default Home;