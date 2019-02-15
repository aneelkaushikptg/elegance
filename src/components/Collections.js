import React from "react";
import Products from "./Products"
//import ProductsData from "../data/products.json";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import * as firebase from 'firebase';

class Collections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horizontal: 60,
            showCategory: 'All',
            showByGender: 'All'
        }
    }

    // getting the change of category type
    handleCategoryChange(e) {
        this.setState({
            showCategory: e.target.value
        })
    }

    // getting the change of sortby type
    handleSortChange(e) {
        this.setState({
            showByGender: e.target.value
        })
    }

    // getting the change of price slider
    handleChangeHorizontal = value => {
        this.setState({
            horizontal: value
        })
        console.log(value);
    };

    render() {
        const { horizontal } = this.state
        const horizontalLabels = {
            0: '0',
            25: '25000',
            50: '50000',
            75: '75000',
            100: '100000'
        }

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
                            <div className="row">
                                <div className="col-md-3">
                                    <label>Choose Category</label>
                                    <select name="categorytype" className="form-control" onChange={this.handleCategoryChange.bind(this)} >
                                        <option value="All">All</option>
                                        <option value="designer">Designer Wear</option>
                                        <option value="casual">Casual Wear</option>
                                        <option value="party">Party Wear</option>
                                    </select>
                                </div>
                                <div className="col-md-7 rangeSlider">
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={horizontal}
                                        labels={horizontalLabels}
                                        onChange={this.handleChangeHorizontal} />
                                </div>
                                <div className="col-md-2">
                                    <label>Gender</label>
                                    <select name="sortby" className="form-control" onChange={this.handleSortChange.bind(this)} >
                                        <option value="All">All</option>
                                        <option value="Women">Women</option>
                                        <option value="Kids">Kids</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Products db={firebase} selectedCategory={this.state.showCategory} rangeFilter={this.state.horizontal} sortByGender={this.state.showByGender} />
                </div>
            </div>
        );
    }
}
export default Collections;