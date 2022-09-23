import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import './RowItem.css';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player/youtube';
import axios from '../../axios';

function RowItem({ movie, baseUrl, movieId, type }) {
    const [open, setOpen] = useState(false);
    const [casts, setCasts] = useState([]);
    const [runtime, setRuntime] = useState('');
    const [genres, setGenres] = useState([]);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchMovie() {
            const movie = `/${
                type === 'tv' ? 'tv' : 'movie'
            }/${movieId}?api_key=d8eaa35e38c39351e91f7bf9f0e8125b&language=en-US&append_to_response=videos`;
            const response = await axios.get(movie);
            let trailerIndex = response.data.videos.results.findIndex((v) => v.type === 'Trailer');
            setTrailerUrl(response.data.videos.results[trailerIndex].key);
            setRuntime(response.data.runtime);
            setGenres(response.data.genres);

            return response;
        }
        fetchMovie();
    }, [movieId, type]);

    useEffect(() => {
        async function getCredits() {
            const credit = `/${
                type === 'tv' ? 'tv' : 'movie'
            }/${movieId}/credits?api_key=d8eaa35e38c39351e91f7bf9f0e8125b&language=en-US`;
            const request = await axios.get(credit);
            setCasts(request.data.cast.slice(0, 4));

            return request;
        }
        getCredits();
    }, [movieId, type]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // maxWidth: 1000,
        // width: '100',
        // maxHeight: 3000,
        borderRadius: 4,
        bgcolor: 'text.primary',
    };
    function countRuntime(n) {
        return `${Math.floor(n / 60)}h${n % 60}m`;
    }
    function truncate(string, limit) {
        return string?.length > limit ? string.slice(0, limit) + '...' : string;
    }

    return (
        <>
            <div className="item">
                <img
                    key={movie.id}
                    className="item__poster"
                    src={`${baseUrl}${movie.backdrop_path}`}
                    alt={movie.name}
                />
                <div className="item__layer">
                    <div className="btn__play" onClick={handleOpen}>
                        <PlayCircleIcon fontSize="inherit" />
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="movie__video">
                        <ReactPlayer
                            width="auto"
                            height="100%"
                            url={`https://www.youtube.com/watch?v=${trailerUrl}`}
                            playing={true}
                            className="reactPlayer"
                        />
                    </div>
                    <div className="movie__infos">
                        <div className="movie__infos__left">
                            <span className="movie__infos__vote">{movie.vote_average} Rate</span>
                            <span className="movie__infos__year">{movie.release_date}</span>
                            <span className="movie__infos__runtime">{countRuntime(runtime)}</span>
                            <span className="movie__infos__quanlity">HD</span>
                            <div className="movie__infos__overview">{truncate(movie?.overview, 200)}</div>
                        </div>
                        <div className="movie__infos__right">
                            <div className="movie__infos__casts">
                                <span className="gray">Cast: </span>
                                {casts.map((cast, id) => (
                                    <span key={id}>{(id ? ', ' : '') + `${cast.name}`}</span>
                                ))}
                                <span className="more">more</span>
                            </div>
                            <div className="movie__infos__genres">
                                <span className="gray">Genres: </span>
                                {genres.map((genres, id) => (
                                    <span key={id}>{(id ? ', ' : '') + `${genres.name}`}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="close__icon" onClick={handleClose}>
                        <DangerousIcon />
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default RowItem;
