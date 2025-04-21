export default function Loggkort({loggForhome}){

    const tester = ()=>{
        console.log("på loggkorte", loggForhome)
    }


    return(

        <article className="loggkort" >
            <p>{loggForhome.dato}</p>
            <p>{loggForhome._rev}nave</p>
            <p>{loggForhome.kommentar}</p>
        </article>
    )
}

{/* <article id="loggkort">
<p>2025-03-12</p>
<p>Ingrid Øvrelid</p>   key={}
<p>oppgavenavet</p>
<p>kommerre hva man haregjort</p> 
</article> */}