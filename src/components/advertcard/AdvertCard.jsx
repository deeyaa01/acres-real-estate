import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdvertCard extends Component {
  numberWithSpaces = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
 
  render() {
    const { advert } = this.props;
    const advertImage = ["https://i.ibb.co/N2x0dRs/Photo-of-a-modern-custom-single-level-suburban-home-on-a-sunny-summer-day.jpg",
    "https://i.ibb.co/c1w3kJq/house5.jpg",
    "https://i.ibb.co/5GM7CfX/house4.jpg",
    "https://i.ibb.co/vsdTLHZ/house3.jpg",
    "https://i.ibb.co/vzV5VPD/Small-blue-gray-mobile-home-with-a-front-and-side-porch-It-has-a-white-porch-railing-out-in-the-coun.jpg",
    "https://i.ibb.co/GVxf9LX/Traditional-home-with-natural-wood-siding-and-stone-exterior.jpg",
    "https://i.ibb.co/rGnvbxb/house2.jpg"];
    
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-3">
        <div className="card h-100">
          <img
            className="card-img-top"
            style={{ height: "300px", width: "100%", objectFit:"fill" }}
            //src={advertImage}
            src={advertImage[Math.floor((Math.random() * 7) + 1)]}
            //style={styles.imageStyle}
            alt={`${advert.isForRent ? "For rent:" : "For Sale:"} ${
              advert.address
            }, ${advert.city}, ${advert.postcode}`}
          />
          <div className="card-body d-flex flex-column">
            <h4 className="card-text mt-auto">
              {advert.address}, {advert.city}
            </h4>
            <p className="card-text font-weight-bold" style = {{color:"#FFAC12"}}>
              {this.numberWithSpaces(advert.price)}{" "}
              {advert.isForRent ? "INR/month" : "INR"}
            </p>
            <h6 className="card-subtitle mb-2 text-muted">{advert.city}</h6>
            <Link to={`/advert/${advert.id}`} className="btn" style = {{background: "#271A00", color: "#FFF"}}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
