import './App.css';
import { Outlet, Link } from "react-router-dom";
import logo from './assets/logovelomobile.png';
import { useState } from 'react';
import { IoIosLogIn } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { PiPersonSimpleBike } from "react-icons/pi";

/**
 * Gère l'affichage du composant App
 * App appelle ici le composant Title avec deux arguments sous la forme de clés/valeurs 
 * en utilisant la syntaxe des balises HTML et de leurs attributs
 * @returns JSX
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let pathLogged = isLoggedIn ? '/logout' : '/login'
  function logInOutLink(login) {
    if (login) {
      return (<><CiLogout />Déconnexion</>);
    } else return (<><IoIosLogIn />Connexion</>);
  }
  return (
    <div className="App">
      <header>
        <nav>
          <ul className='mt-4'>
            <li></li>
            <li className='products-link'>
              <Link to={`/products`}><PiPersonSimpleBike />Produits</Link>
            </li>
            <li className='login-out-link'>
              <Link to={pathLogged}>{isLoggedIn ? logInOutLink(true) : logInOutLink(false)}</Link>
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
