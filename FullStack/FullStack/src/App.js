import './App.css';
import Logo from './componentes/Logo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className="opcoes">
          <li className="opcao"><p>Antigos</p></li>
          <li className="opcao"><p>Novas aquisições</p></li>
          <li className="opcao"><p>Proximas Leituras</p></li>
        </ul>
      </header>
    </div>
  );
}

export default App
