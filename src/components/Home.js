import React from "react";
import { Link } from 'react-router-dom';
import ProductsData from "../data/products.json";
import Shared from "../services/shared";

class Home extends React.Component {
    selectProduct(product) {
        Shared.selectProduct = product;
    }

    //handling finalprice in looping
    onloadGetFinalPrice() {
        ProductsData.forEach((item) => {
            const discountedPrice = (item.price * item.discount) / 100;
            item.finalprice = Math.round(item.price - discountedPrice);
        })
    }

    render() {
        this.onloadGetFinalPrice();
        const imageURL = "../images/products/";
        return (
            <div className="home">
                <div className="home-hero">
                    <div className="titles">
                        <h2>Offering designer pieces from Unique collections.</h2>
                        <Link to="/collections" className="btn btn-border">
                            Discover
               </Link>
                    </div>
                </div>

                <div className="home-shop">
                    <div className="container">
                        <h2>New Arrivals</h2>
                        <div className="row">
                            <ul>
                                {
                                    ProductsData.slice(0, 4).map((product) => {
                                        // if (product.arrival === "new" && product.qty > 0) {
                                        if (product.arrival === "new") {
                                            return (
                                                <li key={product.id} onClick={() => this.selectProduct(product)} className="col-md-3 col-6">
                                                    <div className="imgwrap">
                                                        {product.discount > 0 && (<div className="discountag">{product.discount}%</div>)}
                                                        <Link to={`/product/${product.id}`}>
                                                            <img alt={product.name} src={`${imageURL}${product.coverimg}`} className="img-fluid" />
                                                        </Link>
                                                    </div>
                                                    <h3>{product.name}</h3>
                                                    <h4><span>₹{product.price}</span> <span className="finalprice">₹{product.finalprice}</span></h4>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;