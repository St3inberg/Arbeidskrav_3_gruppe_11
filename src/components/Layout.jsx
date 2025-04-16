import Nav from "./nav";



export default function Layout ({children}){
    
    return (
        <div className="info">
          
            <Nav />
            <main id="main">
                {children}
            </main>
        </div>
    )}