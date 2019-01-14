import React from "react";
import { Link } from "react-router-dom";
import ProductsData from "../data/products.json";
import Like from "../components/common/Like";
import Shared from "../services/shared";

export class Wishlist extends React.Component {
    // getting the selected product and passing to product page
    selectProduct(product) {
        Shared.selectProduct = product;
    }

    // Like for each product
    handleLike(product) {
        const products = ProductsData;
        const index = products.indexOf(product);
        // products[index] = { ...products[index] };
        products[index].liked = !products[index].liked;
        this.setState({ products });
        // console.log("clicked like", product);
    }

    render() {
        return (
            <div className="container collections">
                <div className="inner-head collectionshead">
                    <h1>Wishlist</h1>
                    <p>Nothing haunts us like the things we didn't buy</p>
                </div>
                <div className="collections-actions"></div>
                <div className="collections-all">
                    <div className="collections-all-eachwrap">
                        {ProductsData.map((product) => {
                            if (product.liked === true) {
                                return (
                                    <div className="collections-all-eachwrap-each" key={product.id}>
                                        <div className="col-img" onClick={() => this.selectProduct(product)}>
                                            <Link to={`/product/${product.id}`}>
                                                <img alt={product.name} src={product.coverimg} className="img-fluid" />
                                            </Link>
                                            <Like liked={product.liked} onClick={() => this.handleLike(product)} />
                                        </div>
                                        <div className="details">
                                            <h2>{product.name}</h2>
                                            <h3><span>$ </span>{product.price}</h3>
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
