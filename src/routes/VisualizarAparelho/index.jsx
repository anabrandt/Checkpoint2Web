import { Link } from "react-router-dom"
import img1 from '../VisualizarAparelho/img1.svg'
import img2 from '../VisualizarAparelho/img2.svg'
import img3 from '../VisualizarAparelho/img3.svg'
import img4 from '../VisualizarAparelho/img4.svg'

export default function VisualizarAparelho(){
    return(
        <main>
            <div>
            <h1>iPônei 15  Pro de 128gb - Rosa </h1>                
            </div>

            <div>-15% OFF</div>

    <div class="carousel">
                <div class="carousel-item">
                <img src={img1}></img>
                </div>

               <div class="carousel-item">
               <img src={img2}></img>
               </div>

             <div class="carousel-item">
             <img src={img3}></img>
            </div>

            <div class="carousel-item">
             <img src={img4}></img>
            </div>    
    </div>

    <div>R$4.300,00  no pix</div>

    <div>
        <button>Comprar</button>
    </div>

    <div>
        <h2>Por que iPônei</h2>
        <h2>Não exite nada como o iphonei</h2>
    </div>

    <div>
        <p>Simples e intuitivo. Basta dar um toque ou deslizar o dedo para fazer tudo.</p>
    </div>

    <div>
        <p>O chip criado pela Ponei oferece velocidade, consumo de energia eficiente e inteligência.</p>
    </div>

    <div>
        <p>O iPônei foi desenvolvido para resistir ao tempo e manter mais seu valor do que outros smartphones.</p>
    </div>
        </main>
    )
}