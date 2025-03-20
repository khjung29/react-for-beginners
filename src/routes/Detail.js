import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [Details, setDetails] = useState([]);  
    const { id } = useParams();
    const getDetails = async() => {    
        const json = await (await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
         )).json();
         console.log(json)
        setDetails(json.data.movie);
        // setLoading(false);
      }


    useEffect(() => {
        getDetails();
    });

    return <h1>Detail</h1>
}

export default Detail;