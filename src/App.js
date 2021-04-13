import {useState} from 'react';
import Values from 'values.js';
import './App.css';
import ColorItem from './ColorItem';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors);
      console.log(colors)
    } catch(err) {
      setError(true)
      console.log(err)
    }
  }

  return (
    <>
      <header>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={color} 
            onChange={ e => {
              setColor(e.target.value)
              setError(false)
              console.log(color)
            }}
            placeholder="#abcdef(16진수 color)"
            className={error ? "error":""}
          />
          <button className="btn">Generate</button>
        </form>
      </header>
    
      <section className="colors">
        {
          list.map((color, index) => {
            return <ColorItem key={index} color={color} index={index} />
          })
        }
      </section>
    </>
  );
}

export default App;
