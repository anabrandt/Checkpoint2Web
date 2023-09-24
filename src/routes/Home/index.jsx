import { Link } from "react-router-dom"
import aparelhos from '../Home/aparelhos.svg'
import rosa from '../Home/rosa.svg'
import branco from '../Home/branco.svg'

export default function Home(){

    return(
        <header>
            <div className="titulo__conheca">
            <h2>Conheça o novo iPônei</h2>
             </div>

<section>
         <div className="aparelhos">
            <img src={aparelhos} alt="Imagem 3"/>
        </div>   
</section>



    <div className="promocao__paragrafo">
        <p><strong>
            O iPonei 14 é o  celular do momento estamos com 40% off  na primeira compra</strong> </p>
    </div>

    <div className="titulo__lancamento">
        <h2>Lançamentos</h2>
    </div>



<section className="descontos">

    <div className="box__desconto">-10%</div>

        <div className="container">
            <img src={rosa} />
            <Link  to='/VisualizarAparelho' ><button className="button__section">Comprar</button></Link> 
        </div>

    <div className="box__desconto" >-10%</div>

        <div className="container">
            <img src={branco} />
            <Link to='/Branco' ><button className="button__section">Comprar</button></Link> 
        </div>

        <div className="promocao__paragrafo2">
            <p> <strong> O novo iPônei 15 está com 10 off  para quem me seguir no instagram </strong></p>
        </div>
</section>
  
        </header>
    )
}