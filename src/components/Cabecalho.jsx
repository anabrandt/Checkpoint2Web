import { Link } from "react-router-dom"


export default function Cabecalho(){
    return(
        <nav className="navbar">
            <div className="header_titulo">
            <Link to='/'> <h1>iPônei</h1> </Link>
                
            </div>

        </nav>
    )
}