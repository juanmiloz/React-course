import logo from './logo.svg';
import './App.css';
import { Contact } from './models/contact';
import ContactComponent from './components/pure/contact';

function App() {
  
  const contact1 = new Contact('Juan', 'Zorrilla', 'Juanmiloz@hotmail.com', true)
  //const contact2 = new Contact('Jhon', 'Cena', 'jhoncena@hotmail.com', false)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactComponent contact={ contact1 }></ContactComponent>
        {/* <ContactComponent contact={ contact2 }></ContactComponent> */}
      </header>
    </div>
  );
}

export default App;
