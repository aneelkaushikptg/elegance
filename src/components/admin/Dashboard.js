import React from "react";
import { Tabs, Tab, Table, Button, ButtonGroup } from 'react-bootstrap';
import ProductsData from "../../data/products.json";
import ordersData from "../admin/admindata/orders.json";
import ImageUploader from 'react-images-upload';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            pictures: []
        }
        this.onDrop = this.onDrop.bind(this);
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        const addedDate = "Current Date= " + date;
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
        this.setState = ({
            active: true,
        })
        console.log(this.state.active)
    }

    //upload images
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    //added date
    addedDate() {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        this.addedDate = "Current Date= " + date;
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
                                <h4>List of All Products</h4>
                            </div>
                            <div className="prods">
                                <Table striped bordered condensed hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Image</th>
                                            {/* <th>Date Added</th> */}
                                            <th>Product Name</th>
                                            <th>Sizes Available</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Sale Price</th>
                                            <th>Description</th>
                                            <th>Fabric</th>
                                            <th>Sale</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ProductsData.map((product) => {
                                            return (
                                                <tr key={product.id}>
                                                    <td>{product.id}</td>
                                                    <td><img alt={product.name} src={`${imageURL}${product.coverimg}`} className="smallimg" /></td>
                                                    {/* <td>{this.addedDate}</td> */}
                                                    <td>{product.name}</td>
                                                    <td>
                                                        {product.sizes.map(sizes => (
                                                            <span className="sizeavb" key={sizes}>{sizes}</span>
                                                        ))}
                                                    </td>
                                                    <td>{product.price}</td>
                                                    <td>{product.discount}%</td>
                                                    <td>{product.finalprice}</td>
                                                    <td>{product.description}</td>
                                                    <td>{product.fabric}</td>
                                                    <td>{product.sale}</td>
                                                    <td><button className="btn">X</button> <button className="btn editbtn">Edit</button></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                                <button className="btn bgbtn" type="button">Save Changes</button>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Add Product">
                            <div className="dash-tabs-inner">
                                <h4>Add a New Product</h4>
                            </div>
                            <div className="addprod">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="prodName" className="form-control" placeholder="Product Name *" />
                                            <input type="text" name="prodprice" className="form-control" placeholder="Product Price*" />
                                            <input type="text" name="discount" className="form-control" placeholder="Discount*" />
                                            <input type="text" name="fabric" className="form-control" placeholder="Fabric*" />
                                            <ButtonGroup bsSize="small m-b-20">
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>XS</Button>
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>S</Button>
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>L</Button>
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>XL</Button>
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>XXL</Button>
                                                <Button onClick={() => this.selectSize()} className={this.state.active ? 'active' : null}>XXXL</Button>
                                            </ButtonGroup>
                                            <label>Category</label>
                                            <select className="form-control">
                                                <option vlaue="casual">Casual</option>
                                                <option vlaue="designer">Designer</option>
                                                <option vlaue="party">Party</option>
                                            </select>
                                            <label>Gender</label>
                                            <select className="form-control">
                                                <option vlaue="women">Women</option>
                                                <option vlaue="kids">Kids</option>
                                            </select>
                                            <label>For Sale</label>
                                            <select className="form-control">
                                                <option vlaue="true">Yes</option>
                                                <option vlaue="false">No</option>
                                            </select>
                                            <label>Arrival</label>
                                            <select className="form-control">
                                                <option vlaue="old">Old</option>
                                                <option vlaue="new">New</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <textarea name="txtMsg" className="form-control" placeholder="Description*"></textarea>
                                            <ImageUploader
                                                withIcon={true}
                                                buttonText='Choose images'
                                                onChange={this.onDrop}
                                                imgExtension={['.jpg', '.gif', '.png']}
                                                maxFileSize={5242880}
                                                singleImage={false}
                                                withPreview={true}
                                            />
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
                                            <th>Prod Image</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Size</th>
                                            <th>Status</th>
                                            <th>Customer Name</th>
                                            <th>Location</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ordersData.map((order) => {
                                            return (
                                                <tr key={order.id}>
                                                    <td>{order.id}</td>
                                                    <td>{order.date}</td>
                                                    <td><img alt={order.name} src={`${imageURL}${order.coverimg}`} className="smallimg" /></td>
                                                    <td>{order.name}</td>
                                                    <td>{order.price}</td>
                                                    <td>{order.size}</td>
                                                    <td>
                                                        <select>
                                                            <option value="Working">Working</option>
                                                            <option value="Shipped">Shipped</option>
                                                            <option value="Delivered">Delivered</option>
                                                        </select>
                                                    </td>
                                                    <td>{order.customer}</td>
                                                    <td>{order.location}</td>
                                                    <td>{order.contact}</td>
                                                    <td>{order.email}</td>
                                                </tr>
                                            );
                                        })}
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
