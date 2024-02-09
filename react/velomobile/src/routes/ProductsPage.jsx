import { useEffect, useState } from "react";
import VeloMobile from './../components/VeloMobile';
import RemoteData from "../services/RemoteData";
/**
 * Composant fonction
 * @returns JSX
 */
const ProductsPage = () => {
  // Création d'un état (velosMobiles), création d'un setter correspondant
  // Assignation d'une valeur par défaut
  const [velosMobiles, setVelosMobiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");


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
      {errorMsg}
      {/* Affichage de la listes des vélos mobiles sous condition que velosMobiles est "truely" */}
      {velosMobiles && velosMobiles.map((veloMobile) => <VeloMobile veloMobile={veloMobile} />)}
    </>
  );
}

export default ProductsPage;