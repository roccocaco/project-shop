function Card({ infos }) {
  return (
      <div className="card">
        <div className="card-top">
          <img src={infos.thumb} alt="" />
        </div>
        <div className="card-body">
          <h3>{infos.title}</h3>
          <h5>{infos.tam}</h5>
          <h4>{infos.price}</h4>
        </div>
      </div>
  );
}

export default Card;
