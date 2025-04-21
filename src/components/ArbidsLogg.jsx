import { useEffect } from "react"
import { client } from "./client";
import { data } from "react-router-dom";

export default function Arbidslogg(){
    const [arbeidslogg, setarbeidslogg] = useState([]);
    
    
    const getWorkLog = async () => {
    client.fetch(`*[_type=="loggforing"]{}`
    )
    .then((data)=>{})

    }
    
   

    useEffect(()=>{
        getWorkLog();
        console.log("", )
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