import { useState } from "react";
import styles from "../router/Home.module.css";
import Movie from "./Movie";

function Slide({movies}) {
    const [transX, setTransX] = useState(0);

    const onClickL = () => setTransX(current => current + 400);
    const onClickR = () => setTransX(current => current - 400);

    return (
        <div>
          {/* <h3 className={styles.title}><Link to="/page/1">Detail Page</Link></h3> */}
          <div className={styles.slide__show}>
            <div className={styles.slide} style={{
                transform: `transformX(${transX})`
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
            <button onClick={onClickL} className={styles.left}><i class="fas fa-angle-left"></i></button>
            <button onClick={onClickR} className={styles.right}><i class="fas fa-angle-right"></i></button>
          </div>
        </div>
    )
}

export default Slide;