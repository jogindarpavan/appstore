import "./index.css";

const ProductCard = (props) => {
  const { details, getId } = props;
  const { id, title, image, price, rating } = details;
  const onClickId = () => {
    getId(id);
  };
  return (
    <li onClick={onClickId}>
      <img src={image} alt={title} />
      <p className="title-text">{title}</p>
      <div className="text-box">
        <p>Rs: {price}</p>
        <p>{rating}</p>
      </div>
    </li>
  );
};

export default ProductCard;