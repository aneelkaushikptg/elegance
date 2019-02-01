import React from "react";
import { Link } from "react-router-dom";
import ProductsData from "../data/products.json";
import Like from "../components/common/Like";
import Shared from "../services/shared";

let finalData = ProductsData;
class Products extends React.Component {
    // getting the selected product and passing to product page
    constructor(props) {
        super(props)
        this.onloadfun();
        this.state = {
            horizontal: 60,
            showCategory: 'All',
            showBySort: 'Latest'
        }
    }

    //fetch selectedproduct
    selectProduct(product) {
        Shared.selectProduct = product;
    }

    // Like for each product
    handleLike(product) {
        let products = ProductsData;
        const index = products.indexOf(product);
        products[index].liked = !products[index].liked;
        this.setState({ products });
        // Shared.likeProduct = product;
    }

    onloadfun() {
        //console.log(this.props.selectedCategory);
        const filterby = this.props.selectedCategory;
        const rangefilter = this.props.rangeFilter;
        const sortbyGender = this.props.sortByGender;

        // filtering by individual Category
        if (filterby === "All" && rangefilter == 60 && sortbyGender === "All") {
            finalData = ProductsData;
            //sorting data for Category only
        } else if (filterby !== "All" && rangefilter >= rangefilter && sortbyGender === "All") {
            finalData = [];
            ProductsData.forEach(e => {
                if (e.category <= filterby) {
                    finalData.push(e);
                }
            })
        }
        //sorting data for Range only
        else if (filterby === "All" && rangefilter >= rangefilter && sortbyGender === "All") {
            finalData = [];
            ProductsData.forEach(e => {
                if (e.range <= rangefilter) {
                    finalData.push(e);
                }
            })
        }
        //sorting data for Gender only
        else if (filterby === "All" && rangefilter === 60 && sortbyGender != "All") {
            finalData = [];
            ProductsData.forEach(e => {
                if (e.gender === sortbyGender) {
                    finalData.push(e);
                }
            })
        }
    }

    render() {
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