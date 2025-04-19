import { useEffect } from "react"
import { client } from "./client";

export default function Arbidslogg(){
    
    const getWorkLog = async () => {
    client.fetch(`*[_type=="loggforing"]{}`
    );
    }
    
   

    useEffect(()=>{
        getWorkLog();
    })


    return(
        <>
        <h2>Arbeidslogg</h2>
        <ul>
            <li></li>
        </ul>
        </>
    )
}