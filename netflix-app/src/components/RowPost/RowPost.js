import React, {useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl , API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'


function RowPost(props) {

    const opts = {
    
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState("")
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        })  //catch(err=> { alert("error")})
     
    }, [])

    const movieHandle = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if (response.data.results.length!==0) {
                setUrlId(response.data.results[0])
            }else{
                console.log("array empty")
            }
            
        })
    }

  
    return (
        <div className='row'>
            <h2>{props.titlee}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                
                <img onClick={() =>movieHandle(obj.id)} className={ props.islarge ? 'largeposter' : 'smallposter' } alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
        
                )}
                
            </div>
          { urlId && <YouTube videoId={urlId.key} opts={opts} /> }
        </div>
        
    )
}

export default RowPost