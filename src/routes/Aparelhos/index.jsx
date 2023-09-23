import { Link } from "react-router-dom"
import branco from '../Aparelhos/branco.svg'
import azul from '../Aparelhos/azul.svg'
import offwhite from '../Aparelhos/offwhite.svg'
import preto from '../Aparelhos/preto.svg'
import rosa from '../Aparelhos/rosa.svg'
import vermelho from '../Aparelhos/vermelho.svg'

export default function Produtos(){

    return(
        <main>

            <div className="container">
                <img src={branco}></img>
                <p>R$3.300,00</p>
                <Link to='/'><button>Clique aqui e volte para o inicio</button></Link>

            </div>

            <div className="container">
            <img src={azul}></img>
                <p>R$4.300,00</p>              
                <Link to='/VisualizarAparelho'><button>Comprar</button></Link>

            </div>

            <div className="container">
            <img src={offwhite}></img>
                <p>R$4.300,00</p>              
                <Link to='/VisualizarAparelho'><button>Comprar</button></Link>

            </div>

            <div className="container">
            <img src={preto}></img>
                <p>R$4.300,00</p>              
                <Link to='/VisualizarAparelho'><button>Comprar</button></Link>

            </div>

            <div className="container"> 
            <img src={rosa}></img>
                <p>R$4.300,00</p>              
                <Link to='/VisualizarAparelho'><button>Comprar</button></Link>

            </div>

            <div className="container">
            <img src={vermelho}></img>
                <p>R$4.300,00</p>              
                <Link to='/VisualizarAparelho'><button>Comprar</button></Link>

            </div>

        </main>
    )
}