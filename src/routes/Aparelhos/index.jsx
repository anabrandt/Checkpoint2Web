import { Link } from "react-router-dom"
import branco from '../Aparelhos/branco.svg'
import azul from '../Aparelhos/azul.svg'
import offwhite from '../Aparelhos/offwhite.svg'
import preto from '../Aparelhos/preto.svg'
import rosa from '../Aparelhos/rosa.svg'
import vermelho from '../Aparelhos/vermelho.svg'

export default function Produtos(){

   import { listaAparelhos } from "../../components/listaAparelhos.js"
   const ListaAparelhos = () => {
    return(
        <header>
            <section className="aparelhos__section">

            <div className="container">
                <img src={branco}></img>
                <p> <strong> R$4.300,00</strong></p>              

                <Link to='/aparelhos'><button className="comprar">Comprar</button></Link>
            </div>

            <div className="container">
            <img src={azul}></img>
            <p> <strong> R$4.300,00</strong></p>              
             
                <Link to='/aparelhos'><button className="comprar">Comprar</button></Link>

            </div>

            <div className="container">
            <img src={offwhite}></img>
            <p> <strong> R$4.300,00</strong></p>              
            
                <Link to='/aparelhos'><button className="comprar">Comprar</button></Link>

            </div>

            <div className="container">
            <img src={preto}></img>
            <p> <strong> R$4.300,00</strong></p>              
             
                <Link to='/aparelhos'><button className="comprar">Comprar</button></Link>

            </div>

            <div className="container"> 
            <img src={rosa}></img>
            <p> <strong> R$4.300,00</strong></p>                            
                <Link to='/aparelhos'><button className="comprar">Comprar</button></Link>

            </div>

            <div className="container">
            <img src={vermelho}></img>
                <p> <strong> R$4.300,00</strong></p>              
                <Link to='/aparelhos'><button className="comprar">Comprar</button></Link>

            </div>
           </section>
        </header>
    )
   }
}