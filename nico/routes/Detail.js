import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail(){
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);

    const getMovies = async () => {
        const json = await(
            await fetch(`https:yts.mx/api/v2/movie_details.json?movie_id=${id}`))
                 .json();
            setLoading(false);
            setDetails(json.data.movie);
            console.log(json.data.movie)
    };

    useEffect(()=>{
        getMovies();
    },[]);

    return (
        <>
            {loading ? "Loading..." : (
                <div>
                    <img src={details.background_image} />
                    <h2>Description</h2>
                    <h4>{details.description_full}</h4>
                </div>
            )}
        </>
    );

}
export default Detail;