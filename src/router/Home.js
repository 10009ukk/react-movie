import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Home.module.css";
import Movie from "../components/Movie";
import Slide from "../components/Slide";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [reloading, setReloading] = useState(false);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?movie_count=6&minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h3 className={styles.title}><Link to="/page/1">Detail Page</Link></h3>
          <div className={styles.slide__show}>
            <div className={styles.slide}>
                {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={""}
                genres={movie.genres}
              />
            ))}
            </div>
            <button className={styles.left}><i class="fas fa-angle-left"></i></button>
            <button className={styles.right}><i class="fas fa-angle-right"></i></button>
          </div>
          {/* <Slide movies={movies} /> */}
        </div>

        )}
    </div>
  )
}

export default Home;