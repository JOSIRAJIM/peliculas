import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';
import MoviesCards from '../components/MoviesCards';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import SliderMovies from '../components/SliderMovies';

//import './popular.sass'

const Home = () => {
    const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`
    const [movieList, setMovieList] = useState([])
    const [page, setPage] = useState(1)
    const newMovies = useFetch(url);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-ES&page=1`
            )
            const movies = await response.json()
            setMovieList(movies)
        })()
    }, [page]);

    return (
        <>
            <div>
                <SliderMovies newMovies={newMovies} />
            </div><br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <div className="new-movies">
                <hr className="hr-divider"></hr><h1 style={{
                    textAlign: 'center',
                    margin: '10px'
                }}><i class="fa fa-film" aria-hidden="true"></i> <br></br>Más populares</h1><hr className="hr-divider"></hr>
                <div className="box-results">
                    {movieList.results ?
                        <MoviesCards movieList={movieList} />
                        : <Loading />}
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Home;