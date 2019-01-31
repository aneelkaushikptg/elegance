import React from "react";
import { Link } from "react-router-dom";
import Shared from "../services/shared";
import Like from "../components/common/Like";
import Ordermodal from "../components/Ordermodal";
import { WhatsappMessage } from 'react-message-router';
import ProductsData from "../data/products.json";
let productsdata;
class Product extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ProductsData: []
    //     };
    // }

    // componentDidMount() {
    //     const { match: { params } } = this.props;
    //     this.setState({ ProductsData: ProductsData });
    // }

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
        productsdata = ProductsData;
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        const imageURL = "../images/products/";

        // const product = find(ProductsData, ['id', parseInt(this.props.match.params.id)]);
        let currentproduct = {};
        if (Shared.selectProduct) {
            currentproduct = Shared.selectProduct;
        } else {
            // alert("Hi");
            window.location.pathname = "/collections";
        }

        //ProductsData[this.props.params.id]
        //console.log(currentproduct);
        // const { showModal } = this.state;
        return (
            <div className="container">
                {this.state.showPopup ? (
                    <Ordermodal text="Place your order" closePopup={this.togglePopup.bind(this)} />
                ) : null}

                <div className="product" key={currentproduct.id}>
                    <div className="col-12 col-md-8 product-one">
                        <div className="product-one-content">
                            <Link to={`/collections`} className="back"><i className="fi flaticon-left-arrow"></i> Back to Collections</Link>
                            <h1>{currentproduct.name}</h1>
                            <div className="price">
                                <span>Rs.</span> {currentproduct.price}
                            </div>
                            <p>Short Dress in patterned jersey with narrow shoulder straps that cross and tie at the back,
                                a double-layered bodice at the front, seam at the waist and gently flared.</p>
                            <h3>Fabric: {currentproduct.fabric}</h3>
                            <h3>Sizes Available</h3>
                            <ul>
                                {currentproduct.sizes.XS ? <li><button type="button" className="btn" >XS</button></li> : null}
                                {currentproduct.sizes.S ? <li><button type="button" className="btn" >S</button></li> : null}
                                {currentproduct.sizes.L ? <li><button type="button" className="btn" >L</button></li> : null}
                                {currentproduct.sizes.XL ? <li><button type="button" className="btn" >XL</button></li> : null}
                                {currentproduct.sizes.XXL ? <li><button type="button" className="btn" >XXL</button></li> : null}
                                {/* {currentproduct.sizes.length === 0 && <p>Out of Stock Please order this to grab one</p>} */}
                            </ul>
                            <div className="product-one-actions">
                                <button className="btn bgbtn" onClick={this.togglePopup.bind(this)}>Order This</button>
                                <WhatsappMessage
                                    label="Whatsapp us!" // Required
                                    number='+919700078025'
                                    textBody={`Hello! Want this ${currentproduct.name}`}
                                    // textBody=<img src={`${imageURL} ${currentproduct.coverimg}`} />
                                    style={{
                                        color: '#fff', background: '#2CA25F', padding: '10px 15px',
                                        borderRadius: '10px'
                                    }}
                                />
                                <Like liked={currentproduct.liked} onClick={() => this.handleLike(currentproduct)} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 product-two">
                        <img alt={currentproduct.name} src={`${imageURL}${currentproduct.coverimg}`} className="img-fluid" />
                    </div>
                </div>
            </div >
        );
    }
}

export default Product;