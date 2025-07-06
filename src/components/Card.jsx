const Card = ({ classId, img, title, desc, sessionPrice, alt }) => {
  return (
    <div className={`${classId} card`}>
      <img className="card-img" src={img} alt={alt} />
      <div className="card-text">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
        <span className="card-price">{sessionPrice}</span>
      </div>
    </div>
  );
};

export default Card;
