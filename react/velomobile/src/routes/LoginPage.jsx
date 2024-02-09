const LoginPage = () => {
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