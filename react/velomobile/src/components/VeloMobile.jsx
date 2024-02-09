const VeloMobile = (props) => {
  return (
    <section>
      <h3>{props.veloMobile.model}</h3>
      <img src={`/images/velosmobiles/${props.veloMobile.photo}`} alt="" />
      <p>{props.veloMobile.description}</p>
    </section>
  );
}

export default VeloMobile;