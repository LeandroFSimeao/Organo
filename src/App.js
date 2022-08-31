import { useState } from 'react';
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario';
import Rodape from './Componentes/Rodape';
import Time from './Componentes/Time';

function App() {

  const roles = [
    {
      nome: 'Tank',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Suporte',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Assassino',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Lutador',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Atirador',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mago',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  const[colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={roles.map(role => role.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>     
      {roles.map(role => <Time 
      key={role.nome} 
      nome={role.nome} 
      corPrimaria={role.corPrimaria} 
      corSecundaria={role.corSecundaria} 
      colaboradores={colaboradores.filter(colaborador => colaborador.role === role.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
