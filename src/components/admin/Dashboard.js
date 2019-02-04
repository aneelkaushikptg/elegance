import React from "react";
import { Tabs, Tab, Table, Button, ButtonGroup } from 'react-bootstrap';
import ProductsData from "../../data/products.json";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    //handling finalprice in looping
    onloadGetFinalPrice() {
        ProductsData.forEach((item) => {
            const discountedPrice = (item.price * item.discount) / 100;
            item.finalprice = Math.round(item.price - discountedPrice);
        })
    }

    /**** ADD PRODUCT ****/
    selectSize() {
        console.log(this.state.active)
        this.setState = ({
            active: true,
        })
    }

    render() {
        const imageURL = "../images/products/";
        this.onloadGetFinalPrice();
        return (
            <div className="container dash">
                <h3>test</h3>
                <div className="dash-counts">
                    <div className="dash-counts-each">
                        <h3>Orders</h3>
                        <h4>231</h4>
                    </div>
                    <div className="dash-counts-each">
                        <h3>Sale</h3>
                        <h4>$1093</h4>
                    </div>
                    <div className="dash-counts-each">
                        <h3>Pending Orders</h3>
                        <h4>32</h4>
                    </div>
                </div>
                <div className="dash-tabs">
                    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                        <Tab eventKey={1} title="Top Selling">
                            <div className="topselling">
                                <div className="dash-tabs-inner">
                                    <h4>Top Selling Products</h4>
                                </div>
                                <div className="row">
                                    {
                                        ProductsData.slice(0, 4).map((product) => {
                                            if (product.arrival === "new") {
                                                return (
                                                    <div key={product.id} className="col-md-3 col-6 topselling-each">
                                                        <div className="imgwrap">
                                                            <img alt={product.name} src={`${imageURL}${product.coverimg}`} className="img-fluid" />
                                                        </div>
                                                        <h3>{product.name}</h3>
                                                        <h4><span>₹{product.price}</span> <span className="finalprice">₹{product.finalprice}</span></h4>
                                                    </div>
                                                )
                                            }
                                        })}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Products">
                            <div className="dash-tabs-inner">
                                <h4>List of Products</h4>
                            </div>
                            <div className="prods">
                                <Table striped bordered condensed hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Size Available</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Description</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Green Shirt</td>
                                            <td> S,M,XL</td>
                                            <td>$42</td>
                                            <td>10%</td>
                                            <td>Short Dress in patterned jersey with narrow shoulder straps that cross and tie at the back, a double-layered</td>
                                            <td><button className="btn">X</button> <button className="btn editbtn">Edit</button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Black Shirt</td>
                                            <td>S,M,L,XL</td>
                                            <td>$39</td>
                                            <td>0</td>
                                            <td>Short Dress in patterned jersey with narrow shoulder straps that cross and tie at the back, a double-layered</td>
                                            <td><button className="btn">X</button> <button className="btn editbtn">Edit</button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button className="btn bgbtn" type="button">Save Changes</button>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Add Product">
                            <div className="dash-tabs-inner">
                                <h4>Add a Product</h4>
                            </div>
                            <div className="addprod">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="prodName" className="form-control" placeholder="Product Name *" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="prodprice" className="form-control" placeholder="Product Price*" />
                                        </div>
                                        <div className="col-md-6">
                                            <ButtonGroup bsSize="small">
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>XS</Button>
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>S</Button>
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>L</Button>
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>XL</Button>
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>XXL</Button>
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>XXXL</Button>
                                            </ButtonGroup>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <textarea name="txtMsg" className="form-control" placeholder="Description*"></textarea>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <button type="submit" name="addprod" className="btn bgbtn" onClick={this.addProduct}>Add Product</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Tab>
                        <Tab eventKey={4} title="Orders">
                            <div className="dash-tabs-inner">
                                <h4>List of Orders</h4>
                            </div>
                            <div className="prods">
                                <Table striped bordered condensed hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Date</th>
                                            <th>Product Name</th>
                                            <th>Size</th>
                                            <th>Status</th>
                                            <th>Customer Name</th>
                                            <th>Location</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2</td>
                                            <td>4 Dec 2018</td>
                                            <td>Green Shirt</td>
                                            <td>S</td>
                                            <td>
                                                <select>
                                                    <option value="Working">Working</option>
                                                    <option value="Shipped">Shipped</option>
                                                    <option value="Delivered">Delivered</option>
                                                </select>
                                            </td>
                                            <td>Andrew</td>
                                            <td>Australia</td>
                                            <td>812567839</td>
                                            <td>andrewgroass@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>7 Dec 2018</td>
                                            <td>Black Blue Shirt</td>
                                            <td>M</td>
                                            <td>
                                                <select>
                                                    <option value="Working">Working</option>
                                                    <option value="Shipped">Shipped</option>
                                                    <option value="Delivered">Delivered</option>
                                                </select>
                                            </td>
                                            <td>Komali</td>
                                            <td>Canada</td>
                                            <td>8900078002</td>
                                            <td>komalikandadai@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>2 Dec 2018</td>
                                            <td>White Grey Shirt</td>
                                            <td>XL</td>
                                            <td>
                                                <select>
                                                    <option value="Working">Working</option>
                                                    <option value="Shipped">Shipped</option>
                                                    <option value="Delivered">Delivered</option>
                                                </select>
                                            </td>
                                            <td>Aneel Kaushik</td>
                                            <td>Hyderabad</td>
                                            <td>9700078025</td>
                                            <td>aneelkauhsikk@gmail.com</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button className="btn bgbtn" type="button">Save Changes</button>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}
