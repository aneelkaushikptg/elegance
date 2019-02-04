import React from "react";
import { Link } from "react-router-dom";
import Shared from "../services/shared";
import Like from "../components/common/Like";
import Ordermodal from "../components/Ordermodal";
import { WhatsappMessage } from 'react-message-router';
import ProductsData from "../data/products.json";
import { TabContent, TabPane, Nav, NavItem, NavLink, Table, Row, Col } from 'reactstrap';
import classnames from 'classnames';

let productsdata;
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            showPopup: false,
            activeTab: '1'
        };
        productsdata = ProductsData;
    }

    // for reactstrap tabs
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    // order popup 
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        const imageURL = "../images/products/";
        // const product = find(ProductsData, ['id', parseInt(this.props.match.params.id)]);
        let currentproduct = {};
        let images1 = [];
        if (Shared.selectProduct) {
            currentproduct = Shared.selectProduct;
            images1 = currentproduct.images;
            console.log(images1);
        } else {
            // alert("Hi");
            window.location.pathname = "/collections";
        }

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
                                <span>Rs.{currentproduct.price}</span> <span className="finalprice">Rs.{currentproduct.finalprice}</span>
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
                                        color: '#fff', background: '#2CA25F',fontweight: '500', fontfamily: 'Crete Round',
                                        padding: '8px 25px', textalign: 'center', marginRight: '20px', border: 'none',
                                        borderRadius: '25px', float: 'left', fontSize: '1rem',fontWeight:'600'
                                    }}
                                />
                                <Like liked={currentproduct.liked} onClick={() => this.handleLike(currentproduct)} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 product-two">
                        <img alt={currentproduct.name} src={`${imageURL}${currentproduct.coverimg}`} className="img-fluid" />
                    </div>
                    <div class="product-extradetails">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}>More Images
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}>Shipping &amp; Return
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="6">
                                        {images1.map((image) => {
                                            return <img alt={image} src={`${imageURL}${image}`} className="img-fluid" />
                                        })
                                        }
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <div className="shippingdetails">
                                    <p>
                                        We provide the cash on delivery service,where our courier partners
                                        have the provisions to allow such a form of collection.Please ensure
                                        your delivery address is correct when you check out on your purchase,
                                        based on which you may or may not get a COD option.
                                    </p>
                                    <p>
                                        NOTE: There might be a slight variation in the shade of the actual product
                                        and the image shown on the screen, due to the screen resolution and photography
                                        effects.
                                    </p>
                                    <h4>Duration:</h4>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Within India</th>
                                                <th>Outside India</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">7 - 10 Business Days</td>
                                                <td>10 - 15 Business Days</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <h4>Return:</h4>
                                    <p>
                                        Return/Exchange: If you are not completely satisfied with your purchase,
                                        simply select the option of return/exchange within 15 days of receiving your
                                        order from your order details page and we will process your return, no questions
                                         asked.
                                    </p>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div >
        );
    }
}

export default Product;