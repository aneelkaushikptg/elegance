import React from "react";
import Products from "./Products"
//import ProductsData from "../data/products.json";
//import Slider from 'react-rangeslider'
//import 'react-rangeslider/lib/index.css'

class Collections extends React.Component {
    constructor(props) {
        super(props);
        // this.filterProduct = this.filterProduct.bind(this);
        this.state = {
            showCategory: 'All'
        }
    }

    handleCategoryChange(e) {
        this.setState({
            showCategory: e.target.value
        })
        //console.log(this.state.showCategory);
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
                        <div className="filters" role="group" aria-label="Filter by Options">
                            <select className="form-control" onChange={this.handleCategoryChange.bind(this)} >
                                <option value="All">All</option>
                                <option value="designer">Designer Wear</option>
                                <option value="casual">Casual Wear</option>
                                <option value="party">Party Wear</option>
                            </select>

                        </div>
                    </div>
                    <Products selectedCategory={this.state.showCategory} />
                </div>
            </div>
        );
    }
}
export default Collections;