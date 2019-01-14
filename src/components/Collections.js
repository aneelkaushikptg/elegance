import React from "react";
import Products from "./Products"
import ProductsData from "../data/products.json";

class Collections extends React.Component {
    // show party wear
    // handleParty(product) {
    //   console.log(product);
    //   let tempArray = [];
    //   // if(product=='All'){
    //   // }else{}
    //   {
    //     ProductsData.map((item) => {
    //       if (item.category === product) {
    //         tempArray.push(item);
    //       }
    //     })
    //     console.log(tempArray);
    //     //ProductsData = tempArray;
    //   }
    // }

    constructor(props) {
        super(props);
        this.filterProduct = this.filterProduct.bind(this);
    }

    filterProduct(e) {
        alert('clicked')
    }

    render() {
        return (
            <div className="container collections">
                <div className="inner-head collectionshead">
                    <h1>Collections</h1>
                    <p>Nothing haunts us like the things we didn't buy</p>
                </div>
                <div className="collections-actions"></div>
                <div className="collections-all">
                    <div className="collections-all-types">
                        <div className="btn-group" role="group" aria-label="Filter by Options">
                            {ProductsData.reduce((prd, product) => {
                                // if (prd.length) {
                                //   prd.push(product.category)
                                // }
                                if (prd.indexOf(product.category) === -1) {
                                    prd.push(product.category)
                                }
                                return prd;
                            }, []).map(product =>
                                <button type="button" className="btn" key={product} onClick={this.filterProduct}>{product}</button>
                            )}
                        </div>
                    </div>
                    <Products />
                </div>
            </div>
        );
    }
}

export default Collections;