import { useEffect, useState } from "react";
import VeloMobile from '../components/VeloMobile';
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
  // Programmation asynchrone : le code suivant ne va s'exécuter qu'après le premier chargement (render) du composant (ici ProductsPage)
  useEffect(() => {
    console.log(`Appel du service qui va aller charger les données`);
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
  }, [])
  console.log(`dans ProductsPage`);
  return (
    <>
      <h2>Produits</h2>
      {isLoggedIn ? <p>Connecté</p> : <p>Pas connecté</p>}
      {errorMsg}
      {/* Affichage de la listes des vélos mobiles sous condition que velosMobiles est "truely" */}
      {velosMobiles && velosMobiles.map((veloMobile) =>
        <VeloMobile veloMobile={veloMobile} handleClickDeleteVeloMobile={handleClickDeleteVeloMobile} />)}
    </>
  );
}

export default ProductsPage;