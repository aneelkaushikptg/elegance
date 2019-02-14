import React from "react";
import { Tabs, Tab, Table, Button, ButtonGroup } from 'react-bootstrap';
import ProductsData from "../../data/products.json";
import ordersData from "../admin/admindata/orders.json";
//import ImageUploader from 'react-images-upload';
import EditProduct from '../admin/Editproduct';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            active: false,
            pictures: [],
            newproduct: {
                id: null,
                name: '',
                price: '',
                discount: '',
                fabric: '',
                qty: '',
                description: '',
                category: 'designer',
                gender: 'women',
                sale: 'no',
                range: '',
                arrival: 'new',
                liked: false,
                coverimg: '',
                images: [""],
                sizes: []
            },
            productsDataTemp: ProductsData
        }
        this.handleNewProduct = this.handleNewProduct.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    // edit product popup 
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    // new product data
    handleNewProduct(e) {
        const newproduct = this.state.newproduct;
        newproduct[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            newproduct: newproduct
        });
        console.log(newproduct);
    }

    //adding new product
    addProduct = (event) => {
        let tempData = this.state.productsDataTemp;
        tempData.push(this.state.newproduct);
        this.setState({
            productsDataTemp: tempData
        })
    }

    //handling finalprice in looping
    onloadGetFinalPrice() {
        ProductsData.forEach((item) => {
            const discountedPrice = (item.price * item.discount) / 100;
            item.finalprice = Math.round(item.price - discountedPrice);
        })
    }

    /**** ADD PRODUCT ****/
    selectSize(e) {
        let tempSizeArray = Object.assign({}, this.state);
        tempSizeArray.newproduct.sizes.push(e.currentTarget.value);
        this.setState({
            tempSizeArray,
            active: true
        })
    }

    //upload images
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        const imageURL = "../images/products/";
        this.onloadGetFinalPrice();
        return (
            <div className="container dash">
                {
                    this.state.showPopup ? (
                        <EditProduct text="Edit Product Details" closePopup={this.togglePopup.bind(this)} />
                    ) : null
                }
                <h3>Admin Panel</h3>
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
                    <div className="dash-counts-each">
                        <h3>Products</h3>
                        <h4>15</h4>
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
                                <h4>List of All Products ({ProductsData.length})</h4>
                            </div>
                            <div className="prods">
                                <div className="tablewrap"> <Table striped bordered condensed hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            {/* <th>Sizes Available</th> */}
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Sale Price</th>
                                            <th>Qty</th>
                                            <th>Description</th>
                                            <th>Fabric</th>
                                            <th>Sale</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.productsDataTemp.map((product, index) => {
                                            return (
                                                <tr key={product.id}>
                                                    <td>{index + 1}</td>
                                                    {/* <td><img alt={product.name} src={`${imageURL}${product.coverimg}`} className="smallimg" /></td> */}
                                                    <td><img alt={product.name} src={product.coverimg} className="smallimg" /></td>
                                                    <td>{product.name}</td>
                                                    {/* <td>
                                                        {product.sizes.map(sizes => (
                                                            <span className="sizeavb" key={sizes}>{sizes}</span>
                                                        ))}
                                                    </td> */}
                                                    <td>{product.price}</td>
                                                    <td>{product.discount}%</td>
                                                    <td>{product.finalprice}</td>
                                                    <td>{product.qty}</td>
                                                    <td>{product.description}</td>
                                                    <td>{product.fabric}</td>
                                                    <td>{product.sale}</td>
                                                    <td><button className="btn">X</button> <button className="btn editbtn" onClick={this.togglePopup.bind(this)}>Edit</button></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                                </div>
                                <button className="btn bgbtn" type="button">Save Changes</button>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Add Product">
                            <div className="dash-tabs-inner">
                                <h4>Add a New Product</h4>
                            </div>
                            <div className="addprod">
                                <div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" placeholder="Product Name *" value={this.state.newproduct.name}
                                                onChange={this.handleNewProduct} />
                                            <input type="text" name="price" className="form-control" placeholder="Product Price*" value={this.state.newproduct.price}
                                                onChange={this.handleNewProduct} />
                                            <input type="text" name="range" className="form-control" placeholder="Price Range*" value={this.state.newproduct.range}
                                                onChange={this.handleNewProduct} />
                                            <input type="text" name="range" className="form-control" placeholder="Price Qty*" value={this.state.newproduct.qty}
                                                onChange={this.handleNewProduct} />
                                            <input type="text" name="discount" className="form-control" placeholder="Discount*" value={this.state.newproduct.discount}
                                                onChange={this.handleNewProduct} />
                                            <input type="text" name="fabric" className="form-control" placeholder="Fabric*" value={this.state.newproduct.fabric}
                                                onChange={this.handleNewProduct} />

                                            <div className="small m-b-20">
                                                <button onClick={this.selectSize.bind(this)} className={this.state.active ? 'active' : 'btn'} value="XS">XS</button>
                                                <button onClick={this.selectSize.bind(this)} className={this.state.active ? 'active' : 'btn'} value="S">S</button>
                                                <button onClick={this.selectSize.bind(this)} className={this.state.active ? 'active' : 'btn'} value="L">L</button>
                                                <button onClick={this.selectSize.bind(this)} className={this.state.active ? 'active' : 'btn'} value="XL">XL</button>
                                                <button onClick={this.selectSize.bind(this)} className={this.state.active ? 'active' : 'btn'} value="XXL">XXL</button>
                                                <button onClick={this.selectSize.bind(this)} className={this.state.active ? 'active' : 'btn'} value="XXXL">XXXL</button>
                                            </div>

                                            <label>Category</label>
                                            <select name="category" className="form-control" onChange={this.handleNewProduct} value={this.state.newproduct.category}>
                                                {/* {this.state.newproduct.category.map(cat => (
                                                    <option key={cat.value} value={cat.value}>
                                                        {cat.name}
                                                    </option>
                                                ))} */}
                                                <option value="designer">Designer Wear</option>
                                                <option value="party">Party Wear</option>
                                                <option value="casual">Casual Wear</option>
                                            </select>

                                            <label>Gender</label>
                                            <select name="gender" className="form-control" onChange={this.handleNewProduct} value={this.state.newproduct.gender}>
                                                <option value="women">Women</option>
                                                <option value="kids">Kids</option>
                                            </select>
                                            <label>For Sale</label>
                                            <select name="sale" className="form-control" onChange={this.handleNewProduct} value={this.state.newproduct.sale}>
                                                <option value="true">Yes</option>
                                                <option value="false">No</option>
                                            </select>
                                            <label>Arrival</label>
                                            <select name="arrival" className="form-control" onChange={this.handleNewProduct} value={this.state.newproduct.arrival}>
                                                <option value="old">Old</option>
                                                <option value="new">New</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="text" className="form-control" placeholder="Cover Image*" value={this.state.newproduct.coverimg} />
                                            <textarea name="description" className="form-control" placeholder="Description*" onChange={this.handleNewProduct} value={this.state.newproduct.description}
                                            ></textarea>

                                            {/* <ImageUploader
                                                withIcon={true}
                                                buttonText='Choose images'
                                                onChange={this.onDrop}
                                                imgExtension={['.jpg', '.gif', '.png']}
                                                maxFileSize={5242880}
                                                singleImage={false}
                                                withPreview={true}
                                            /> */}
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <button type="submit" name="addprod" className="btn bgbtn" onClick={this.addProduct.bind(this.state.newproduct)}> Add Product</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={4} title="Orders">
                            <div className="dash-tabs-inner">
                                <h4>List of Orders ({ordersData.length})</h4>
                            </div>
                            <div className="prods">
                                <div className="tablewrap">
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
                                </div>
                                <button className="btn bgbtn" type="button">Save Changes</button>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div >
        );
    }
}
