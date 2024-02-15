import { useEffect, useState } from "react";
import VeloMobile from '../components/VeloMobile';
import FormPostVeloMobile from '../components/FormPostVeloMobile';
import RemoteData from "../services/RemoteData";
import { useOutletContext } from "react-router-dom";
/**
 * Composant fonction
 * @returns JSX
 */
const ProductsPage = () => {
  // Création d'un état (velosMobiles), création d'un setter correspondant
  // Assignation d'une valeur par défaut
  const [velosMobiles, setVelosMobiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  useEffect(() => {
    console.log(`Appel du service qui va aller charger les données`);
    if (errorMsg !== undefined) {
      RemoteData.loadVelosMobiles()
        .then((remoteVelosMobiles) => {
          console.log(`remoteVelosMobiles : `, remoteVelosMobiles);
          // Modification du state qui va impliquer un rechargement de la vue
          // c'est à dire le rappel de render
          setVelosMobiles(remoteVelosMobiles);
        })
        .catch(error => {
          console.log(`Erreur attrapée dans useEffect : `, error);
          setErrorMsg(error.toString());
        });
    }
  }, [errorMsg]);


  function handleClickDeleteVeloMobile(veloMobileToDelete) {
    console.log(`Dans DeleteVeloMobile- vélomobile à supprimer :`, veloMobileToDelete);
    //const copyVelosMobiles = velosMobiles.filter((vm) => vm !== veloMobileToDelete)
    /*  const copyVelosMobiles = [...velosMobiles];
     // Recherche de l'index de veloMobileToDelete
     const index = copyVelosMobiles.indexOf(veloMobileToDelete);
     // Suppression du veloMobile cliqué
     copyVelosMobiles.splice(index, 1); */
    // Doit modifier l'état velosMobiles via setVelosMobiles
    setVelosMobiles(velosMobiles.filter((vm) => vm !== veloMobileToDelete));

    // Appel du service "RemoteData" pour exécuter une requête http avec le verbe DELETE
    RemoteData.deleteVeloMobile(veloMobileToDelete.id);
  }
  function handleSubmitFormPostVeloMobile(event) {
    event.preventDefault();
    console.log(`Formulaire d'ajout soumis`);
    // Create a FormData object from the form - event.target est une référence vers le formulaire
    const formData = new FormData(event.target);
    const newVeloMobile = {
      id: 100,
      model: formData.get("model"),
      description: formData.get("description"),
      weight: formData.get("weight"),
      photo: formData.get("photo"),
    }
    // il faut maintenant ajouter un object au state velosMobiles
    const copyVelosMobiles = [...velosMobiles, newVeloMobile];

    setVelosMobiles(copyVelosMobiles);
    event.target.reset();
    // Ajout de ce nouvel objet veloMobile via une requête http POST
    delete newVeloMobile.id;
    RemoteData.postVeloMobile(newVeloMobile)
      .then(data => {
        console.log(`data dans productsPage`);
      })
      .catch(error => {
        console.error(error);
        // Affichage de l'erreur
        setErrorMsg("Une erreur s'est produite lors de l'ajout d'un vélomobile");
        // Suppression du message d'erreur au bout de 5 secondes
        setTimeout(() => {
          setErrorMsg(undefined);
        }, 5000);
      });
  }
  // Programmation asynchrone : le code suivant ne va s'exécuter qu'après le premier chargement 
  // (render) du composant (ici ProductsPage). Ce hook (la fonction) va également s'exécuter si 
  // l'état errorMsg est modifié

  console.log(`dans ProductsPage`);
  return (
    <>
      <h2>Produits</h2>

      {isLoggedIn && (
        <FormPostVeloMobile handleSubmitFormPostVeloMobile={handleSubmitFormPostVeloMobile} />
      )}
      {errorMsg && (
        <h3 className="text-danger">{errorMsg}</h3>
      )}
      {/* Affichage de la listes des vélos mobiles sous condition que velosMobiles est "truely" */}
      {velosMobiles && velosMobiles.map((veloMobile) =>
        <VeloMobile veloMobile={veloMobile} handleClickDeleteVeloMobile={handleClickDeleteVeloMobile} />)}
    </>
  );
}

export default ProductsPage;