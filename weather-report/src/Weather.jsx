import Searchbox from "./Searchbox"
import Infobox from "./Infobox"
import { useState } from "react"


export default function Weather(){
    const[data, setData]= useState({});
    

    function handleData(weatherData){
        setData(weatherData)
    }
   
    return(
        <>
        <Searchbox passFunc={handleData}/> <br /><br />

        <Infobox data={data} />
        </>
    )
}