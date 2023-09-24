import { Link } from "react-router-dom"
import img1 from '../Branco/img1.svg'
import img2 from '../Branco/img2.svg'
import img3 from '../Branco/img3.svg'
import img4 from '../Branco/img4.svg'


export default function Branco(){
    return(
        
        <header>
            <section className="branco__visualizacao">
            <div className="iponei__branco">
            <h1>iPônei 15  Pro de 128gb - Branco </h1>                
            </div>

            <div className="box__branco">-15% OFF</div>
    <div className="iponei__rosa">
        <img className="iponei" src={img1} />
        <img className="iponei" src={img2} />
        <img className="iponei" src={img3} />
        <img className="iponei" src={img4} />
    </div>

    <div className="promocao__paragrafo2"> <p > <strong> R$4.300,00  no pix</strong> </p></div>

    <div className="button__comprar">
        <button className="comprar__button">Comprar</button>
    </div>
</section>



<section >

    <div className="ponei__faq">
        <h2 className="faq__ponei">Por que iPônei</h2>
        <h2 className="faq__ponei2">Não exite nada como o iphonei</h2>
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
 </section>   
        </header>
    )
}