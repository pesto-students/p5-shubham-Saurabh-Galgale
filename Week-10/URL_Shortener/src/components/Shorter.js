import React, {useState, useEffect} from 'react';
import "./Shorter.css"
import axios from "axios";

function Shorter() {
    const [longurl, setlongUrl] = useState("");
    const [shorturl, setShortUrl] = useState("");

    const fetchData = async () => {
        if(longurl===shorturl){
          setShortUrl('URL ALREADY SHORTENED')
        }else{
          try {
            const response = await axios(
              `https://api.shrtco.de/v2/shorten?url=${longurl}`
            );
            setShortUrl(response.data.result.full_short_link);
          } catch (e) {
            setShortUrl("Error");
            // console.log(e);
          }
        }
        };

        const handleClick = (event) => {
            setlongUrl(event.target.value);
          };

    return (
        <>
            <div id="urldiv">
                <h1>URL Shortener</h1>
                <div id="inpbtn">
                    <input id="inp" type="text" placeholder="Add URL here..." onChange={handleClick} value={longurl}/>
                    <button id="btn" onClick={() => {fetchData()}}> Short </button>
                </div>
                <p id="para">{shorturl}</p>
            </div>
        </>
    )
}

export default Shorter