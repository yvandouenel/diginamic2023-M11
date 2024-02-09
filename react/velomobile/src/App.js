import './App.css';
import { Outlet, Link } from "react-router-dom";
import logo from './assets/logovelomobile.png';
import { useState } from 'react';
/**
 * Gère l'affichage du composant App
 * App appelle ici le composant Title avec deux arguments sous la forme de clés/valeurs 
 * en utilisant la syntaxe des balises HTML et de leurs attributs
 * @returns JSX
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let pathLogged = isLoggedIn ? '/logout' : '/login'
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li></li>
            <li>
              <Link to={`/products`}>Produits</Link>
            </li>
            <li>
              <Link to={pathLogged}>{isLoggedIn ? "Déconnexion" : "Connexion"}</Link>
            </li>
          </ul>
        </nav>
        <Link to={'/'}><img src={logo} alt="Logo vélomobile - retour accueil" /></Link>
        <h1>Vélomobile : l'alternative à la voiture</h1>
      </header>
      <main>
        {/* Outlet indique l'endroit où vont s'afficher les composants définis dans les routes enfants */}
        <Outlet context={[isLoggedIn, setIsLoggedIn]} />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
