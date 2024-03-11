import { Component } from "react";
import "./index.css";

class ProductItemDetails extends Component {
  state = { productData: {} };

  componentDidMount = () => {
    this.getProductData();
  };

  getUpdates = (data) => ({
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    image: data.image,
    rating: data.rating.rate,
  });

  getProductData = async () => {
    const { productId } = this.props;
    const url = `https://fakestoreapi.com/products/${productId}`;
    const response = await fetch(url);
    const productData = await response.json();
    const formatData = this.getUpdates(productData);
    this.setState({ productData: formatData });
  };

  render() {
    const { productData } = this.state;
    const {
      title,
      price,
      description,
      category,
      image,
      rating,
    } = productData;
    return (
      <div className="card-container">
        <div className="left-container">
          <img className="image-size" src={image} alt={title} />
        </div>
        <div className="right-container">
          <div className="text-page">
            <p>{title}</p>
            <p>Rating: {rating}</p>
            <p>{description}</p>
            <p>Category: {category}</p>
          </div>
          <div className="cart-page">
            <p className="price-text">Rs: {price}</p>
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy">Buy Now</button>
            <button className="wishlist">Add to Wishlist</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItemDetails;