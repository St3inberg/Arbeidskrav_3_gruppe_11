import{fetchWorkLog} from '../personerClient.js';

export default function Loggkort({loggForhome }){

  

    return(

        <article className="arbeidslogg-container" >
            <p>{loggForhome.dato}</p>
            <p>{fetchWorkLog.personname}</p>
            <p>{loggForhome.kommentar}</p>
        </article>
    )
}
