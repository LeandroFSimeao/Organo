import './Colaborador.css'

const Colaborador = ({nome, imagem, nick, corDeFundo}) =>{
    return(
           <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nick} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{nick}</h5>
            </div>
           </div>            
    )
}

export default Colaborador