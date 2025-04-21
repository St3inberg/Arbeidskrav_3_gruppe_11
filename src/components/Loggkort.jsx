export default function Loggkort({loggForhome}){

    return(

        <article className="loggkort">
            <p>{loggForhome.dato}</p>
            <p>Ingrid Øvrelid</p>
            <p>oppgavenavet</p>
            <p>{loggForhome.kommertar}</p>
        </article>
    )
}

{/* <article id="loggkort">
<p>2025-03-12</p>
<p>Ingrid Øvrelid</p>
<p>oppgavenavet</p>
<p>kommerre hva man haregjort</p>
</article> */}