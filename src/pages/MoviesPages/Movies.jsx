import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { searchMovies } from "api/api";
import { List, Conteiner, Linker, Input, Form, Button, Label } from "components/styled";

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
        // eslint-disable-next-line
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
            <Form onSubmit={handleSubmit}>
                <Label>
                    <Input type="text" onChange={updateInput} />
                    <Button type="submit">Search</Button>
                </Label>
            </Form>
            <div>
                {status === 'pending' && 'Loading...'}
                {status === 'rejected' && <h3>{error.message}</h3>}
                {status === 'resolved' && (
                    <Conteiner>
                        <List>
                            {search && search.map(({ title, id }) => (
                                <Linker to={`/movies/${id}`} state={{ from: location }} key={id}>{title}</Linker>
                            ))}
                        </List>
                    </Conteiner>
                )}
            </div>
        </>
    );
};

export default Movies;