import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

;

function App() {

  return (
    <div className="App">
      
      <Navbar> </Navbar>
      <h1 className='text-4xl font-bold underline'>This is a big header</h1>
      <p>This is a paragraph</p>
      <Pricing> </Pricing>
    </div>
  );
}

export default App;
