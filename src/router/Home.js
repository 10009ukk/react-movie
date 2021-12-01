import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Home.module.css";
import Movie from "../components/Movie";
import Slide from "../components/Slide";

function Home() {
  const slides = [{
    title : "High Rating",
    path: "minimum_rating=7"
  }, {
    title : "Romance",
    path: "genre=romance"
  }, {
    title : "Thriller",
    path: "genre=thriller"
  }, {
    title : "Animation",
    path: "genre=animation"
  }]
  
  return (
      <div className={styles.container}>
        {slides.map(slide => {
          return (
            <div className={styles.slide__box}>
                <h3 className={styles.title}>
                  <Link to={`/page/${slide.path}/1`}>
                    <i class="fas fa-external-link-alt"></i>
                    <span>{slide.title} Movie</span>
                  </Link>
                  </h3>
                <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${slide.path}&sort_by=year`} />
            </div>
          )
        })}
        
      </div>
  )
}

export default Home;