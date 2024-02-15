const FormPutVeloMobile = ({ veloMobile }) => {
  console.log(`veloMobile dans FormPutVeloMobile`, veloMobile);
  return (
    <>
      <h3>Formulaire de modif </h3>
      <form
        onSubmit={(event) => {

        }}
        action="">
        <label htmlFor="model">Modèle</label>
        <input type="text" id="model" name="model" value={veloMobile.model} />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10">{veloMobile.description}</textarea>
        <label htmlFor="weight" >Poids</label>
        <input type="text" name="weight" id="weight" value={veloMobile.weight} />
        <label htmlFor="photo" >Photo</label>
        <input type="text" id="photo" name="photo" value={veloMobile.photo} />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default FormPutVeloMobile;