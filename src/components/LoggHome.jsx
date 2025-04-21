import { useEffect } from "react"
import { data } from "react-router-dom";
import Loggkort from "./Loggkort";

export default function LoggHome({loggforing}){



    return(
        <section>
        <h2>Arbeidslogg</h2>
        
            {loggforing?.map((loggForhome) => (
                <Loggkort loggforing={loggforing}/>
            ))}

        </section>
    )
}

// oggforing?.map(loggForhome)