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
      
      <div>
          <h3 className={styles.title}><Link to="/page/minimum_rating=8.8/1">Detail Page</Link></h3>
          <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&minimum_rating=8.8&sort_by=year`} />
      </div>
      <div>
          <h3 className={styles.title}><Link to="/page/genre=romance/1">Detail Page</Link></h3>
          <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=romance&sort_by=year`} />
      </div>
      <div>
          <h3 className={styles.title}><Link to="/page/genre=horror/1">Detail Page</Link></h3>
          <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=horror&sort_by=year`} />
      </div>
      <div>
          <h3 className={styles.title}><Link to="/page/genre=comedy/1">Detail Page</Link></h3>
          <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=comedy&sort_by=year`} />
      </div>

      
    </div>
  )
}

export default Home;