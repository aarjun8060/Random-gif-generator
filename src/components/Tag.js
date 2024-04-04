import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Tag(){
    const[tag,setTag] = useState("");
    const[gif,setGifs] = useState(" ");
    const[loading,setLoading] = useState("false");
    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGifs(imageSource);
        setLoading(false);
    }
    useEffect( () => {
        fetchData();
    },[] ) 
    function clickHandler(){
        
        fetchData();
    }
    function changeHandler(event){
        setTag(event.target.value)
    }
    return(
        <div className="bg-blue-500 w-1/2 rounded-lg border border-black flex flex-col items-center 
        gap-y-5 mt-[15px]">
            <h1 className="text-3xl font-bold underline uppercase">A Random GIFs</h1>
            {
                loading ? (<Spinner/>):(<img src={gif} alt="Random"  width="450"/>)
            }
            <input className="w-10/12 text-center font-bold text-lg py-2 rounded-lg mb-[4px]" onChange={changeHandler} value={tag} />
            
            <button onClick={clickHandler} className="w-10/12 bg-purple-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
        </div>
    );

}
export default Tag;