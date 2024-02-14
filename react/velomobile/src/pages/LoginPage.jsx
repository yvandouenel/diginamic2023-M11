import RemoteData from "../services/RemoteData";
import { useOutletContext, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  const navigate = useNavigate();
  return (
    <section>
      <h2>Identification</h2>
      <form
        onSubmit={(event) => {
          console.log(`Formulaire soumis`);
          event.preventDefault();
          // Create a FormData object from the form
          const formData = new FormData(event.target);
          console.log(`formData`, formData.entries());

          const login = formData.get("login");
          const pwd = formData.get("pwd");
          console.log(`login`, login, "pwd", pwd);
          //event.target.reset();
          // Vérification du l'utilisateur via un service
          RemoteData.isLogged(login, pwd)
            .then((data) => {
              console.log(`data ?`, data);
              setIsLoggedIn(data);
              if (data) {
                console.log(`redirection vers la page d'accueil`);
                navigate('/');
              }
            });

        }}
      >
        <label htmlFor="login">Identifiant</label>
        <input type="text" id="login" name="login" />
        <label htmlFor="pwd">Mot de passe</label>
        <input type="text" id="pwd" name="pwd" />
        <button type="submit">Envoyer</button>
      </form>
    </section>


  );
}

export default LoginPage;