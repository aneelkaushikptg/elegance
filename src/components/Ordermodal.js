import React from 'react';
import Shared from "../services/shared";
import { Link } from "react-router-dom";

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {
                prodname: '',
                name: '',
                email: '',
                mobile: '',
                message: '',
                size: '',
                location: ''
            }
        }
        this.handleOrderForm = this.handleOrderForm.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
    }
    placeOrder(e) {
        // e.preventDefault();
        const orderList = this.state.order;
        fetch("https://script.google.com/macros/s/AKfycbySJcUklaoZbEcduLoVeWSsLijMfM17lQz_G-Y_hQ/exec",
            {
                method: "post",
                //make sure to serialize your JSON body
                body: JSON.stringify(orderList)
            })
            .then(function (response) {
                return response.json();
            }).then(function (myJson) {
                console.log(JSON.stringify(myJson));
            });
    }

    handleOrderForm(e) {
        const order = this.state.order;
        order[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ order });
    }

    render() {
        const currentproduct = Shared.selectProduct;
        return (
            <div className="ordermodal">
                <div className="ordermodal-inner">
                    <div className="ordermodal-inner-head">
                        <div className="ordermodal-inner-head-left">
                            <h1>{this.props.text}</h1>
                        </div>
                        <div className="ordermodal-inner-head-right">
                            <button onClick={this.props.closePopup}><i className="fi flaticon-cancel"></i></button>
                        </div>
                    </div>
                    <div className="ordermodal-inner-body">
                        <form className="row" name="order">
                            <div className="col-md-8 formwrap form-elements">
                                <form id="gform" method="post"
                                    action="https://script.google.com/macros/s/AKfycbySJcUklaoZbEcduLoVeWSsLijMfM17lQz_G-Y_hQ/exec">
                                    <div id="thankyou_message">Thankyou for Shopping with us</div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label for="prodname">Product Title</label>
                                            <input type="text" name="prodname" disabled value={currentproduct.name} className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="fullname">Full Name*</label>
                                            <input type="text" name="name" value={this.state.order.name} className="form-control" onChange={this.handleOrderForm} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="mobile">Mobile Number*</label>
                                            <input type="text" name="mobile" value={this.state.order.mobile} class="form-control" maxlength="10" minlength="10" onChange={this.handleOrderForm} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="emailid">Email Address*</label>
                                            <input type="text" name="email" value={this.state.order.email} className="form-control" onChange={this.handleOrderForm} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="location">Location*</label>
                                            <input type="text" className="form-control" value={this.state.order.location} name="location" onChange={this.handleOrderForm} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="size">Select Size*</label>
                                            <select className="form-control" name="size" value={this.state.order.size} onChange={this.handleOrderForm} >
                                                <option className="hidden">Please select the Size</option>
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>xl</option>
                                                <option>XXL</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="message">Any Specifications</label>
                                            <textarea className="form-control" name="message" value={this.state.order.message} onChange={this.handleOrderForm} ></textarea>
                                        </div>
                                    </div>
                                    <div className="ordermodal-inner-body-btnwrap">
                                        <button className="btn bgbtn" type="submit">Place Order</button>
                                        <Link className="btn borderbtn" to="/collections">Continue Shopping</Link>
                                    </div>


                                </form>
                            </div>

                            <div className="col-md-4">
                                <img alt={currentproduct.name} src={currentproduct.coverimg} className="img-fluid" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default ModalComponent;