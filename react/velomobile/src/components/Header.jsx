import { Link } from "react-router-dom";
import logo from './../assets/logovelomobile.png';
import { IoIosLogIn } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { PiPersonSimpleBike } from "react-icons/pi";
import { useState } from 'react';

const Header = ({ isLoggedIn }) => {

  const [openCloseMenuBurger, setOpenCloseMenuBurger] = useState("inactive");
  let pathLogged = isLoggedIn ? '/logout' : '/login'
  function logInOutLink(login) {
    if (login) {
      return (<><CiLogout /><span>Déconnexion</span></>);
    } else return (<><IoIosLogIn /><span>Connexion</span></>);
  }
  function openCloseMenuBurgerClass() {
    const classAction = openCloseMenuBurger === "inactive" ? "active" : "inactive";
    console.log(`dans openCloseMenuBurgerClass`, classAction);
    setOpenCloseMenuBurger(classAction);
  }
  return (
    <header>
      <nav id="nav">
        <ul className='mt-4'>
          <li className='products-link'
            onClick={openCloseMenuBurgerClass}>
            <Link to={`/products`}><PiPersonSimpleBike /><span>Produits</span></Link>
          </li>
          <li className='login-out-link'
            onClick={openCloseMenuBurgerClass}>
            <Link to={pathLogged}>{isLoggedIn ? logInOutLink(true) : logInOutLink(false)}</Link>
          </li>
        </ul>
        <div id="icons"
          onClick={openCloseMenuBurgerClass}></div>
      </nav>

      <Link to={'/'}><img src={logo} alt="Logo vélomobile - retour accueil" /></Link>
      <h1>Vélomobile : l'alternative à la voiture</h1>
    </header>
  );
}

export default Header;