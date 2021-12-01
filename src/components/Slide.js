import { useState, useEffect } from "react";
import styles from "./Slide.module.css";
import Movie from "./Movie";
import Loading from "./Loading";

function Slide({ytsApi}) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

    const onClickL = () => {
      if (trans >= 0) {
        return;
      }
      setTrans(current => current + 250);
    }
    const onClickR = () => {
      if (trans <= -1600) {
        return;
      }
      setTrans(current => current - 250);
    }
  const getMovies = async () => {
    const json = await (
      await fetch(ytsApi)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

    return (
        <div>
          {loading ? <Loading /> :    
            <div className={styles.slide__show}>
              <div className={styles.slide} style={{
                  transform: `translateX(${trans}px)`
              }}>
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
              <button class={styles.left} onClick={onClickL}><i class="fas fa-caret-square-left"></i></button>
              <button class={styles.right} onClick={onClickR}><i class="fas fa-caret-square-right"></i></button>


            </div>
          }
          </div>
    )
}

export default Slide;