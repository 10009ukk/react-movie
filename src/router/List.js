import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import styles from "./List.module.css";
import {Link} from "react-router-dom";

function List() {
  const { num, detail } = useParams();
  const [listNums, setListNums] = useState([...Array(10)].map((_,i) => i + 1));
  useEffect(() => {

  }, [listNums]);

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [reloading, setReloading] = useState(false);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${num}&${detail}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    setReloading(false);
    setLoading(true);

    getMovies();
  }, [reloading]);
  
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>      
      )}
      <ul className={styles.footer}>
        {/* <a><i class="fas fa-caret-left"></i></a> */}
        {loading ? null : listNums.map(listNum => {
          return (
            <li>
              <Link 
                to={`/page/${detail}/${listNum}`} 
                onClick={() => setReloading(true)}
                className={
                  listNum == num ? styles.focusing : null
                }>{listNum}</Link>
            </li>
          )
        }
        )}
        {/* <div><i class="fas fa-caret-right"></i></div> */}
      </ul>
        
    </div>
  );
}
export default List;