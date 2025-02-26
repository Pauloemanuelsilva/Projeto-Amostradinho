import './App.css';

// Import de componentes criados
import HelloWorld from "./componentes/HelloWorld";
import SayMyName from './componentes/SayMyName';
import Pessoa from './componentes/Pessoa';
import List from './componentes/List';

function App() {
  return(
    <div className='App'>
      <HelloWorld />
      <SayMyName nome="Edir Pereira" />
      <SayMyName nome="Pedro Guimarães" />
      <SayMyName nome="FRancisco Chagas" />
      <Pessoa
        nome="Rodrigo"
        idade="25"
        profissao="Programador"
        foto="http://abrindoportas.tec.br/assets/perfil.png"
      />
      <List />
    </div>
  );

}

export default App;