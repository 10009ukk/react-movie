import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Point from "../components/Point";
import styles from "./Home.module.css";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState({});

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(json => {
            setDatas(json.data.movie);
            setLoading(false);
        })
    }, []);
    console.log(datas);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div>
                    <Point 
                        background_image_original={datas.background_image_original}
                        medium_cover_image={datas.medium_cover_image}
                        url={datas.url}
                        title_long={datas.title_long}
                        rating={datas.rating}
                        runtime={datas.runtime}
                        genres={datas.genres}
                        description_full={datas.description_full}                
                    />
                </div>
            )}
        </div>
    );
  }
  export default Detail;