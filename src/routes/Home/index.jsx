import { Link } from "react-router-dom"
import aparelhos from '../Home/aparelhos.svg'
import rosa from '../Home/rosa.svg'
import branco from '../Home/branco.svg'

export default function Home(){

    return(
        <main>
            <h2>Conheça o novo iPônei</h2>

        <div className="aparelhos">
            <img src={aparelhos} alt="Imagem 3"/>
        </div>


    <div>
        <p>O iPonei 14 é o  celular do momento estamos com 40% off  na primeira compra</p>
    </div>

    <div>
        <h2>Lançamentos</h2>
    </div>

<div>-10%</div>
    <div className="container1">
        <img src={rosa} />
        <Link to='/VisualizarAparelho' ><button>Comprar</button></Link> 
    </div>

<div>-10%</div>
    <div>
         <img src={branco} />
        <Link to='/Branco' ><button>Comprar</button></Link> 
    </div>

    <div className="container1">
        <p>O novo iPônei 15 está com 10 off  para quem me seguir no instagram </p>
    </div>
        </main>
    )
}