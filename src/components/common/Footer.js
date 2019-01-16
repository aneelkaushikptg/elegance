import React from "react";
import { Link } from "react-router-dom";
//import Instafeed from 'react-instafeed';

class Footer extends React.Component {
    render() {
        // const instafeedTarget = 'instafeed';
        return (
            <div className="footer">
                <div className="footer-subscribe">
                    <h2>Subscribe to our Updates</h2>
                    <p>Get updated on new releases and promotions</p>
                    <form>
                        <input type="text" className="form-control" placeholder="Email Address" />
                        <button className="btn-prime" type="submit">
                            Submit
                    </button>
                    </form>
                </div>

                <div className="container footer-insta">
                    <div className="row">
                        <div className="col-12 col-md-6 footer-insta-left">
                            <h2>We are on Instagram</h2>
                            <h3>Follow Us </h3>
                            <p>To get the latest Updates to your Social account.</p>
                            <a href={"http://" + "www.instagram.com/aarohielegance"} target="_blank" className="followus">
                                Follow Us now
                             </a>
                        </div>
                        <div className="col-12 col-md-6 footer-insta-right">
                            {/* <div id={instafeedTarget}> 
                            <Instafeed
                                    limit='10'
                                    get='user'
                                    ref='instafeed'
                                    resolution='thumbnail'
                                    sortBy='most-liked'
                                    target={instafeedTarget}
                                    template="<div class='instaimg'><a href='{{link}}' target='_blank'><img src='{{image}}'/><div>{{likes}}</div>
                                    </a></div>"
                                    userId='8732700903'
                                    clientId='86dca64ad9f745258acc708e00f4141d'
                                    accessToken='8732700903.1677ed0.bb2c987efd7d4fa283f8d6fbd389b16b'
                                /> 
                        </div>*/}
                        </div>
                    </div>
                </div>

                <div className="footer-foot">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 footlogo">
                                Aarohi Elegance
                        </div>
                            <div className="col-5 copy">
                                &copy; All Rights Reserved @ Aarohi elegeance 2018
                        </div>
                            <div className="col-4">
                                <ul>
                                    <li>
                                        <Link to={`/home`}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={`/about`}>About</Link>
                                    </li>
                                    <li>
                                        <Link to={`/collections`}>Collections </Link>
                                    </li>
                                    <li>
                                        <Link to={`/contact`}>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Footer;