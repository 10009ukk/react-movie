import styles from "./Point.module.css";

function Point({background_image_original, medium_cover_image, url, title_long, rating, runtime, genres, description_full}) {
    return (
        <div>
            <img className={styles.bg} src={background_image_original} />           
            <div className={styles.show}>
                <img className={styles.img} src={medium_cover_image} />
                <div className={styles.textbox}>
                    <h1 className={styles.title}><a href={url} target="_blank">{title_long}</a></h1>
                    <ul>
                        <li>Rating {rating}</li>
                        <li>Runtime {runtime}</li>
                        <li>
                            Genres
                            <ul>
                                {genres.map(genre => <li>{genre}</li>)}
                            </ul>
                        </li>
                    </ul>
                    <p>{description_full.length > 140 ? `${description_full.slice(0, 140)}...` : description_full}</p>
                </div>
            </div>
        </div>
    )
}

export default Point;