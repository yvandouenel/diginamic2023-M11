const FormPostVeloMobile = ({ handleSubmitFormPostVeloMobile }) => {
  return (
    <form
      onSubmit={(event) => {
        handleSubmitFormPostVeloMobile(event)
      }}
      action="">
      <label htmlFor="model">Modèle</label>
      <input type="text" id="model" name="model" />
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" cols="30" rows="10"></textarea>
      <label htmlFor="weight">Poids</label>
      <input type="text" name="weight" id="weight" />
      <label htmlFor="photo">Photo</label>
      <input type="text" id="photo" name="photo" />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormPostVeloMobile;