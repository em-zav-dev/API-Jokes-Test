import  { useState } from 'react';
import './App.css';

const App = () => {
  const [tipo, setTipo] = useState('chiste'); // 'chiste' o 'quote'

 
  
  const [resultadoJoke, setResultadoJoke] = useState('');
  const [cargandoJoke, setCargandoJoke] = useState(false);


  const [resultadoPhrase, setResultadoPhrase] = useState('');
  const [cargandoPhrase, setCargandoPhrase] = useState(false);
 
 
  const fetchResultadoJokes = async () => {
    try {
      setCargandoJoke(true);
      const apiUrl = 'https://icanhazdadjoke.com/';
      
      const response = await fetch(apiUrl, {
      headers: { 'Accept': 'application/json' },
      });

      const data = await response.json();
      setResultadoJoke(data.joke);

    } catch (error) {
      console.error('Error al obtener el resultado:', error);
    } finally {
      setCargandoJoke(false);
    }
  };


  const fetchResultadoFrases= async () => {
    try {
      setCargandoPhrase(true);
      const apiUrl = 'https://quote-garden.onrender.com/api/v3/quotes/random';
      
      const response = await fetch(apiUrl, {
      headers: { 'Accept': 'application/json' },
      });

      const data = await response.json();
      setResultadoPhrase(data.data[0].quoteText);

    } catch (error) {
      console.error('Error al obtener el resultado:', error);
    } finally {
      setCargandoPhrase(false);
    }
  };



  return (
    <div className="container">
      <h1>Aplicación de APIs</h1>
      <hr></hr>
      <br/><br/>
      <h2>Bromas</h2>
      <img  src="./src/assets/happy-svgrepo-com.svg" width={70} height={70}/>
      {cargandoJoke && <p className="cargandoBroma">Cargando Broma...</p>}
      {resultadoJoke && <p className="resultadoBroma">{resultadoJoke}</p>}
      <button type="button" onClick={fetchResultadoJokes} disabled={cargandoJoke}>
        Obtener Chiste
      </button>

      <br/><br/>
      <hr></hr>

      <br/><br/>
      <h2>Frases</h2>
      <img  src="./src/assets/laugh-svgrepo-com.svg" width={70} height={70}/>
      {cargandoPhrase && <p className="cargandoPhrase">Cargando Frase...</p>}
      {resultadoPhrase && <p className="resultadoPhrase">{resultadoPhrase}</p>}
      <button type="button" onClick={fetchResultadoFrases} disabled={cargandoPhrase}>
        Obtener Frase
      </button>

      <br/><br/>
      <p >Notas: los resultados mostrados están en inglés </p>
    </div>
  );
};

export default App;