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
    },[]);

    return (
      <div>
        <h1>{Details.title}</h1>
        <div>
          <img src={Details.medium_cover_image} alt={Details.title}/>
          <p>{Details.summary}</p>
          <ul>
            {Details.genres && Details.genres.map((g) => (<li key={g}>{g}</li>))}
          </ul>
        </div>
      </div>
    );

}

export default Detail;