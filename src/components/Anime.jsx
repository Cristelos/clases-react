import { useEffect, useState } from "react";
import Gallery from "./Gallery"
import axios from "axios";

export default function Anime(){

    const [animes, setAnimes] = useState([]);
    const [animes2, setAnimes2] = useState([]);
    const [animes3, setAnimes3] = useState([]);


    useEffect(()=>{
        axios.get("https://kitsu.io/api/edge/trending/anime?limit=5").then(res => {
            console.log("el primer resultado ",res);
            setAnimes(res.data.data)
        })
        axios.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count").then(res => {
            console.log("el segundo resultado ",res);
            setAnimes2(res.data.data)
        })
        axios.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count").then(res => {
            console.log("el tercer resultado ",res); 
            setAnimes3(res.data.data)
        })
    },[])


    return(
        <>
        <h1>Animes populares esta semana</h1>
        <Gallery array={animes}></Gallery>
        <h1>Animes más populares en emisión</h1>
        <Gallery array={animes2}></Gallery>
        <h1>Animes más esperados</h1>
        <Gallery array={animes3}></Gallery>
        </>
    )
}