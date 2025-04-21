export default function Loggkort({loggForhome}){

    const tesrer = ()=>{
        console.log("på loggkorte",loggForhome)
    }

    return(

        <article className="loggkort" >
            <p>2025-03-12</p>
            <p>Ingrid Øvrelid</p>
            <p>oppgavenavet</p>
            <p></p>
        </article>
    )
}

{/* <article id="loggkort">
<p>2025-03-12</p>
<p>Ingrid Øvrelid</p>   key={}
<p>oppgavenavet</p>
<p>kommerre hva man haregjort</p> {loggForhome.dato}{loggForhome.kommertar}
</article> */}