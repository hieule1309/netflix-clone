import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RowItem from '../RowItem/RowItem';
import './SearchMovie.css';

const useQuery = () => new URLSearchParams(useLocation().search);
const base_url = 'https://image.tmdb.org/t/p/original';

function SearchMovie(props) {
    const keywords = useQuery().get('keywords');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/multi?api_key=d8eaa35e38c39351e91f7bf9f0e8125b&language=en-US&page=1&include_adult=false&query=${keywords}`,
            );
            setMovies(response.data.results);
            return response;
        }
        fetchData();
    }, [movies, keywords]);

    return (
        <div className="result__search">
            {movies.map((movie, index) => (
                <div className="item__search">
                    <RowItem
                        key={movie.id}
                        index={index}
                        movie={movie}
                        movieId={movie.id}
                        type={movie.media_type}
                        baseUrl={base_url}
                    />
                </div>
            ))}
        </div>
    );
}

export default SearchMovie;
