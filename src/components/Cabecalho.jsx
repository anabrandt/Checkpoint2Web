import { Link } from "react-router-dom"


export default function Cabecalho(){
    return(
        <header>
            <div className="titulo__cabecalho">
            <Link to='/'> <h1>iPônei</h1> </Link>
                
            </div>
            
            <div>
                <hr></hr>
            </div>
        </header>
    )
}