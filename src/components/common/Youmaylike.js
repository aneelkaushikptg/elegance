import React, { Component } from 'react';
import ProductsData from "../data/products.json";
import { Link } from "react-router";

export class Youmaylike extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="headmedium">You may Like</h2>
                <div className="container maylike">
                    <ul>
                        {
                            ProductsData.slice(0, 4).map((product) => {
                                if (product.arrival === "new") {
                                    return (
                                        <li key={product.id}>
                                            <Link to={`/product/${product.id}`}>
                                                <img alt={product.name} src={product.coverimg} className="img-fluid" />
                                            </Link>
                                            <h3>{product.name}</h3>
                                            <h4><span>$</span>{product.price}</h4>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

