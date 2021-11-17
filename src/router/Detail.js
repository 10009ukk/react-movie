import { useEffect } from "react";
import {useParams} from "react-router-dom";
function Detail() {
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(console.log)
    }, []);
    return <h1>Detail</h1>;
  }
  export default Detail;