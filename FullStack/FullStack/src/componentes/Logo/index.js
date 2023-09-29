import './estilo.css'
import logo from '../../imagens/logo.JPG'

function Logo(){
    return(
        <div className="logo">
            <img 
            src={logo}
            alt="Descrição da imagem"
            className="logo-img">
            </img>
            <p><strong>FIT</strong></p>
        </div>
    )
}

export default Logo
