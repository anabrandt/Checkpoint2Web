import { Link } from "react-router-dom"
import { listaAparelhos } from "../../components/listaAparelhos"
import branco from '../Aparelhos/branco.svg'
import azul from '../Aparelhos/azul.svg'
import offwhite from '../Aparelhos/offwhite.svg'
import preto from '../Aparelhos/preto.svg'
import rosa from '../Aparelhos/rosa.svg'
import vermelho from '../Aparelhos/vermelho.svg'

export default function Aparelhos(){
    

    const lista = listaAparelhos

    const comprar = ()=>{
        alert(`Produto comprado com sucesso!`)
        return navegacao('/')
    }

    return(
        <header>
            <section className="aparelhos__section">

            <div className="container">
                <p><strong>iPonei 12 Pro Max</strong></p>
                <img src={branco}></img>
                <p> <strong>  R$4.300,00</strong></p>  
  
    <Link to='/aparelhos'><button className="comprar"onClick={comprar}>Comprar</button></Link>
                    
                    
            </div>

            <div className="container">
            <p><strong>iPonei 14</strong></p>
            <img src={azul}></img>
            <p> <strong> R$4.300,00</strong></p>              
    <Link to='/aparelhos'><button className="comprar"onClick={comprar}>Comprar</button></Link>
            </div>

            <div className="container">
            <p><strong>iPonei 17 Mini</strong></p>
            <img src={offwhite}></img>
            <p> <strong> R$4.300,00</strong></p>               
            <Link to='/aparelhos'><button className="comprar"onClick={comprar}>Comprar</button></Link>


            </div>

            <div className="container">
            <p><strong>iPonei 11</strong></p>
            <img src={preto}></img>
            <p> <strong> R$4.300,00</strong></p>              
             
                <Link to='/aparelhos'><button className="comprar">Comprar</button></Link>

            </div>

            <div className="container"> 
            <p><strong>iPonei 11</strong></p>
            <img src={rosa}></img>
            <p> <strong> R$4.300,00</strong></p>                            
                <Link to='/aparelhos'><button className="comprar">Comprar</button></Link>

            </div>

            <div className="container">
            <p><strong>iPonei 11</strong></p>
            <img src={vermelho}></img>
                <p> <strong> R$4.300,00</strong></p>              
                <Link to='/aparelhos'><button className="comprar">Comprar</button></Link>

            </div>
           </section>
        </header>
    )
}