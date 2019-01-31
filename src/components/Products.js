import React from "react";
import { Link } from "react-router-dom";
import ProductsData from "../data/products.json";
import Like from "../components/common/Like";
import Shared from "../services/shared";

let finalData = ProductsData;;
class Products extends React.Component {
    // getting the selected product and passing to product page
    constructor(props) {
        super(props)
        this.onloadfun();
        this.state = {
            showCategory: 'All'
        };
    }

    selectProduct(product) {
        Shared.selectProduct = product;
    }

    // Like for each product
    handleLike(product) {
        let products = ProductsData;
        const index = products.indexOf(product);
        // products[index] = { ...products[index] };
        products[index].liked = !products[index].liked;
        this.setState({ products });
        // Shared.likeProduct = product;
    }

    onloadfun() {
        console.log(this.props.selectedCategory);
        const filterby = this.props.selectedCategory;
        //finalData = ProductsData.filter(e=> e.category == this.props.filterBy);

        if (filterby === "All") {
            finalData = ProductsData;
        } else {
            finalData = ProductsData.filter(e => e.category == filterby);
        }
    }

    render() {
        const filterby = this.props.selectedCategory;
        const imageURL = "../images/products/";
        this.onloadfun();
        return (
            <div className="collections-all-eachwrap">
                {finalData.map((product) => {
                    return (
                        <div className="collections-all-eachwrap-each" key={product.id}>
                            <div className="col-img" onClick={() => this.selectProduct(product)}>
                                <Link to={`/product/${product.id}`}>
                                    <img alt={product.name} src={`${imageURL}${product.coverimg}`} className="img-fluid" />
                                </Link>
                                <Like liked={product.liked} onClick={() => this.handleLike(product)} />
                            </div>
                            <div className="details">
                                <h2>{product.name}</h2>
                                <h3><span>Rs.</span>{product.price}</h3>
                                <div className="actions">
                                    <Link to={`/product/${product.id}`}>
                                        <button className="btn-border" onClick={() => this.selectProduct(product)}>
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}



export default Products;