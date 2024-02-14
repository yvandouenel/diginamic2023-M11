import { useOutletContext } from "react-router-dom";
const VeloMobile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  return (
    <section>
      <h3>{props.veloMobile.model}</h3>
      {isLoggedIn ?
        <button
          onClick={() => {
            props.handleClickDeleteVeloMobile(props.veloMobile);
          }}
          className="btn btn-danger">Supprimer</button> : <p>Pas connecté</p>}
      <img src={`/images/velosmobiles/${props.veloMobile.photo}`} alt="" />
      <p>{props.veloMobile.description}</p>
    </section>
  );
}

export default VeloMobile;