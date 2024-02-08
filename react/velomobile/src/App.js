import './App.css';
import Title from './components/Title';
import { Outlet } from "react-router-dom";

/**
 * Gère l'affichage du composant App
 * App appelle ici le composant Title avec deux arguments sous la forme de clés/valeurs 
 * en utilisant la syntaxe des balises HTML et de leurs attributs
 * @returns JSX
 */
function App() {
  return (
    <div className="App">
      <header>
        navbar
        logo
        <h1>Vélomobile : l'alternative à la voiture</h1>
      </header>
      <main>
        {/* Outlet indique l'endroit où vont s'afficher les composants définis dans les routes enfants */}
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
