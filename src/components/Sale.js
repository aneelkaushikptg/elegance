import React from "react";
import { Link } from "react-router-dom";
import ProductsData from "../data/products.json";
import Like from "../components/common/Like";
import Shared from "../services/shared";

export class Sale extends React.Component {
    // getting the selected product and passing to product page
    selectProduct(product) {
        Shared.selectProduct = product;
    }

    // Like for each product
    handleLike(product) {
        const products = ProductsData;
        const index = products.indexOf(product);
        products[index].liked = !products[index].liked;
        this.setState({ products });
    }

    onloadGetFinalPrice() {
        //handling finalprice in looping
        ProductsData.forEach((item) => {
            const discountedPrice = (item.price * item.discount) / 100;
            item.finalprice = Math.round(item.price - discountedPrice);
        })
    }

    render() {
        const imageURL = "../images/products/";
        this.onloadGetFinalPrice();
        return (
            <div className="container collections">
                <div className="inner-head collectionshead">
                    <h1>Clearance Sale</h1>
                    <p>Nothing haunts us like the things we didn't buy</p>
                </div>
                <div className="collections-actions"></div>
                <div className="collections-all">
                    <div className="collections-all-eachwrap">
                        {ProductsData.map((product) => {
                            if (product.sale === true) {
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
                                            <h3><span>₹{product.price}</span> <span className="finalprice">₹{product.finalprice}</span></h3>
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
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
