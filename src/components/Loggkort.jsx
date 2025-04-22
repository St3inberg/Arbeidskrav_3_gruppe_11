export default function Loggkort({loggForhome }){

  

    return(

        <article className="loggkort" >
            <p>{loggForhome.dato}</p>
            <p>{loggForhome.personname}</p>
            <p>{loggForhome.kommentar}</p>
        </article>
    )
}
