import { useEffect, useState } from 'react';
import axios from '../../axios';
import './Row.css';
import RowItem from '../RowItem/RowItem';
import SimpleSlider from '../Slider/SimpleSlider';

const base_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
            return response;
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <>
            <div className="row">
                <h2 className="row__title">{title}</h2>
                {/* <div className="row__posters"> */}
                <SimpleSlider>
                    {movies.map((movie, index) => (
                        <RowItem
                            key={movie.id}
                            index={index}
                            movie={movie}
                            baseUrl={base_url}
                            movieId={movie.id}
                            type={movie.media_type}
                        />
                    ))}
                </SimpleSlider>
                {/* </div> */}
                {/* <div className="wrapper">
                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        className="container"
                        slidesPerView={10}
                        slidesPerGroup={10}
                    >
                        {movies.map((movie, index) => (
                            <SwiperSlide key={movie.id}>
                                <RowItem index={index} movie={movie} baseUrl={base_url} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> */}
            </div>
        </>
    );
}

export default Row;
