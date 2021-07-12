import './App.css';
import Logo from './img/wolt_logo.png'
import WizardForm from "./component/WizardForm";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <img src={Logo}  className="logo"/>
          <ul className="header-list">
            <li className="header-list__li">შესვლა</li>  
            <li className="header-list__li">რეგისტრაცია</li>
          </ul> 
        </div>
      </header>
      <WizardForm />
    </div>
  );
}

export default App;
