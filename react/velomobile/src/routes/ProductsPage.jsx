import { useState } from "react";
import VeloMobile from './../components/VeloMobile';
/**
 * Composant fonction
 * @returns JSX
 */
const ProductsPage = () => {
  // Création d'un état (velosMobiles), création d'un setter correspondant
  // Assignation d'une valeur par défaut
  const [velosMobiles, setVelosMobiles] = useState([
    {
      id: 1,
      model: "lvf",
      description: "Le vélo mobile français qui a fait ses preuves",
      photo: "vm1.png",
      weight: 32
    },
    {
      id: 2,
      model: "lvq",
      description: "Le vélo mobile sportif aux performances incroyables",
      photo: "vm2.png",
      weight: 22
    }
  ]);
  return (
    <>
      <h2>Produits</h2>
      {/* Affichage de la listes des vélos mobiles */}
      {velosMobiles.map((veloMobile) => <VeloMobile veloMobile={veloMobile} />)}
    </>
  );
}

export default ProductsPage;