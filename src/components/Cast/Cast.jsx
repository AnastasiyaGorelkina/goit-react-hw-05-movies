import { useEffect, useState } from "react";
import { getMoviesCredits } from "api/api";
import { useParams } from "react-router-dom";
import { Actors } from "./CastStyled";
import { Text } from "components/styled";

const Cast = () => {
    const [actors, setActors] = useState([]);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const baseUrl = 'https://image.tmdb.org/t/p/w500/';
    const { cast } = actors;
   
    
    useEffect(() => {
    const getActors = async () => {
      try {
        const data = await getMoviesCredits(movieId);
        setActors(data);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    getActors();
     }, [movieId]);
    
    return (
        <>
            {status === 'pending' && 'Loading...'}
            {status === 'rejected' && <h3>{error.message}</h3>}
            {status === 'resolved' && (
                <Actors>
                    {cast.length === 0 && (<h1>We don't have any information about the cast yet</h1>)}
                    {cast && cast.map(el => (
                        <li key={el.id}>
                            <Text>{el.name}</Text>
                            <img src={`${baseUrl}${el.profile_path}`} alt={el.name} width="170px" />
                        </li>))}
                </Actors>
            )}

        </>
    );
};

export default Cast;