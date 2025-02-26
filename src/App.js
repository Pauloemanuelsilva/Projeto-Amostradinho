import logo from './logo.svg';
import './App.css';

function App() {
  const name= "Batman";
  let a = 1;
  let b = 2;

  function sum(a, b){
  
    return a +b;

  }

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSU1AUL-ZTT8FTkMiSfQGaPvZN9MQkDLnNA&s";

return(
  <div className='App'>
    <p>Testando o Jsx</p>
    <p>Olá {name}</p>
    <p>Soma é {sum(1,2)}</p>
    <img src='{url}'alt='informação da imagem'></img>
  </div>
)

}

export default App;
