import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Home.module.css";
import Movie from "../components/Movie";
import Slide from "../components/Slide";

function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.slide__box}>
          <h3 className={styles.title}>
            <Link to="/page/minimum_rating=8.8/1">
              <i class="fas fa-external-link-alt"></i>
              <span>High Rating Movie</span>
            </Link>
            </h3>
          <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&minimum_rating=8.8&sort_by=year`} />
      </div>
      <div className={styles.slide__box}>
          <h3 className={styles.title}><Link to="/page/genre=romance/1"><i class="fas fa-external-link-alt"></i>Romance Movie</Link></h3>
          <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=romance&sort_by=year`} />
      </div>
      <div className={styles.slide__box}>
          <h3 className={styles.title}><Link to="/page/genre=horror/1"><i class="fas fa-external-link-alt"></i>Thriller Movie</Link></h3>
          <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=thriller&sort_by=year`} />
      </div>
      <div className={styles.slide__box}>
          <h3 className={styles.title}><Link to="/page/genre=comedy/1"><i class="fas fa-external-link-alt"></i>Animation Movie</Link></h3>
          <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=animation&sort_by=year`} />
      </div>

      
    </div>
  )
}

export default Home;