import { Component } from "react";
import ProductCard from "../ProductCard";
import ProductItemDetails from "../ProductItemDetails";
import "./index.css";

class AllProductsSection extends Component {
  state = { productsList: [], isProduct: false, id: 1 };

  getId = (id) => {
    this.setState((prev) => ({ id: id }));
    this.setState({ isProduct: true });
  };

  componentDidMount = () => {
    this.getDetailsList();
  };

  getDetailsList = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data = await response.json();
    const updatedData = data.map((each) => ({
      id: each.id,
      title: each.title,
      price: each.price,
      description: each.description,
      category: each.category,
      image: each.image,
      rating: each.rating.rate,
    }));
    this.setState({ productsList: updatedData });
  };

  render() {
    const { productsList, isProduct, id } = this.state;
    return (
      <div className="main-container">
        {isProduct ? (
          <ProductItemDetails key={id} productId={id} />
        ) : (
          <ul>
            {productsList.map((each) => (
              <ProductCard key={each.id} getId={this.getId} details={each} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default AllProductsSection;