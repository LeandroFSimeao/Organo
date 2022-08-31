import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const[nome, setNome] = useState('')
    const[nick, setNick] = useState('')
    const[imagem, setImagem] = useState('')
    const[role, setRole] = useState('')

    const aoSalvar = (e) =>{
     e.preventDefault()
     props.aoColaboradorCadastrado({
        nome,
        nick,
        imagem,
        role
     })
     setNome('')
     setNick('')
     setImagem('')
     setRole('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do player</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nick" 
                    placeholder="Digite seu nick"
                    valor={nick}
                    aoAlterado={valor => setNick(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Role" 
                itens={props.times} 
                valor ={role}
                aoAlterado={valor => setRole(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )
}

export default Formulario