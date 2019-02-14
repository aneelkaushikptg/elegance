import React from "react";
// import { Link } from 'react-router-dom';

export class About extends React.Component {
    render() {
        return (
            <div className="container about">
                <div className="about-intro">
                    <div className="about-intro-img">
                        <h2>About Aarohi Elegance</h2>
                    </div>

                    <div className="container about-intro-identity">
                        <div className="about-intro-identity-left col-12 col-md-7">
                            <h4>Our Identity</h4>
                            <h2>Behind the brand</h2>
                            <p>Drawing inspiration from art, architecture, and global culture, Aarohi Elegance
                              designs with elegant sophistication, a refined statement that beautifies
                          women and glorifies their personality.</p>
                            {/* <Link to="/about" className="btn btn-border m-t-20">
                                knowmore
                           </Link> */}
                        </div>
                        <div className="about-intro-identity-right col-md-5 d-none d-sm-block">
                            <img src={require('../images/identity.jpg')} className="img-fluid" alt="Identity" />
                        </div>
                    </div>

                    <p>
                        <span>Aarohi Elegance</span>, was founded in 2018 by Komali Kandadai. Her vision was to create a friendly,
                        welcoming space that showcases the best of luxury Indian fashion for women.
                        At Aarohi Elegabce, a seasoned team of experts scrutinizes
                        the latest collections and curates key pieces for the season. In addition to
                        established labels, Aza is dedicated to discovering and introducing emerging talent from around
                        the country.
                    </p>
                    <p> <span>Aarohi Elegance</span> is your one-stop online shop for today's most daring, exciting and edgy fashion apparel.
                        Our affordable collections are all about redefining trends, design excellence and exceptional quality
                        to satisfy the needs of every aspiring fashionista. The original idea is to share the latest news and
                        fashion trends on women's clothing with fashion-forward, free-thinking girls, and we offer the fast
                        fashion worldwide.
                    </p>
                </div>

            </div>
        );
    }
}
