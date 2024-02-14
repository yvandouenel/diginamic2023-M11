import './App.css';
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';


/**
 * Gère l'affichage du composant App
 * App appelle ici le composant Title avec deux arguments sous la forme de clés/valeurs 
 * en utilisant la syntaxe des balises HTML et de leurs attributs
 * @returns JSX
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App container">
      <Header isLoggedIn={isLoggedIn} />
      <main>
        {/* Outlet indique l'endroit où vont s'afficher les composants définis dans les routes enfants */}
        <Outlet context={[isLoggedIn, setIsLoggedIn]} />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
