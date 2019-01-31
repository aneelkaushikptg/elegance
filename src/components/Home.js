import React from "react";
import { Link } from 'react-router-dom';
import ProductsData from "../data/products.json";
import Shared from "../services/shared";

class Home extends React.Component {

    selectProduct(product) {
        Shared.selectProduct = product;
    }

    render() {
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

                <div className="container home-identity">
                    <div className="home-identity-left col-12 col-md-7">
                        <h4>Our Identity</h4>
                        <h2>Behind the brand</h2>
                        <p>Drawing inspiration from art, architecture, and global culture, Aarohi Elegance
                          designs with elegant sophistication, a refined statement that beautifies
                  women and glorifies their personality.</p>
                        <Link to="/about" className="btn btn-border m-t-20">
                            knowmore
                  </Link>
                    </div>
                    <div className="home-identity-right col-md-5 d-none d-sm-block">
                        <img src={require('../images/identity.jpg')} className="img-fluid" alt="Identity" />
                    </div>
                </div>

                <div className="home-shop">
                    <div className="container">
                        <h2>New Arrivals</h2>
                        <div className="row">
                            <ul>
                                {
                                    ProductsData.slice(0, 4).map((product) => {
                                        if (product.arrival === "new") {
                                            return (
                                                <li key={product.id} onClick={() => this.selectProduct(product)} className="col-md-3 col-6">
                                                    <div className="imgwrap">
                                                        <Link to={`/product/${product.id}`}>
                                                            <img alt={product.name} src={`${imageURL}${product.coverimg}`} className="img-fluid" />
                                                        </Link>
                                                    </div>
                                                    <h3>{product.name}</h3>
                                                    <h4><span>Rs.</span>{product.price}</h4>
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