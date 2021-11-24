import React, { Component, Fragment } from "react";

export default class AdvertForm extends Component {
  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.submitNewAdvert}>
          <div className="row pl-3">
            {this.props.formValues.isForSale ? (
              <button
                className="btn btn-sm btn-success mr-3"
                type="button"
                onClick={() => this.props.forRentForSale("sale")}
              >
                For Sale
              </button>
            ) : (
              <button
                className="btn btn-sm btn-warning mr-3"
                style= {{background: "#FFAC12", color:"#000"}}
                type="button"
                onClick={() => this.props.forRentForSale("sale")}
              >
                For Sale
              </button>
            )}
            {this.props.formValues.isForRent ? (
              <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={() => this.props.forRentForSale("rent")}
              >
                For Rent
              </button>
            ) : (
              <button
                type="button"
                style= {{background: "#FFAC12", color:"#000"}}
                className="btn btn-sm"
                onClick={() => this.props.forRentForSale("rent")}
              >
                For Rent
              </button>
            )}
          </div>
          {!this.props.formValues.isForRent && !this.props.formValues.isForSale ? (
            <div className="row pl-3 mb-3">
              <small className="text-danger"></small>
            </div>
          ) : (
            ""
          )}
          <h5>Tell us about your property</h5>
          <div className="row mb-3 mt-3">
            <label htmlFor="price" className="col-12 col-md-6">
              Price{this.props.formValues.isForSale
                ? "INR"
                : this.props.formValues.isForRent
                ? "INR/month"
                : ""} <span className="text-danger">*</span>
              <input
                type="number"
                name="price"
                className="form-control"
                min="10000"
                step="1000"
                value={this.props.formValues.price}
                onChange={this.props.handleChange}
                required
              />
              
            </label>
            <label htmlFor="postcode" className="col-12 col-md-6">
              City<span className="text-danger">*</span>
              <input
                type="text"
                name="city"
                className="form-control"
                value={this.props.formValues.city}
                onChange={this.props.handleChange}
                placeholder="City"
                required
              />
            </label>
          </div>
          <div className="row mb-3">
            <label htmlFor="postcode" className="col-12 col-md-8">
              Address<span className="text-danger">*</span>
              <input
                type="text"
                name="address"
                className="form-control"
                value={this.props.formValues.address}
                onChange={this.props.handleChange}
                placeholder="Address"
                required
              />
            </label>
            <label htmlFor="postcode" className="col-12 col-md-4">
              Pincode<span className="text-danger">*</span>
              <input
                type="text"
                name="postcode"
                className="form-control"
                value={this.props.formValues.postcode}
                onChange={this.props.handleChange}
                placeholder="Pincode"
                required
              />
            </label>
          </div>
          <div className="row mb-3">
            <label htmlFor="constructionYear" className="col-6">
              Construction Year <span className="text-danger">*</span>
              <input
                type="number"
                className="form-control"
                name="constructionYear"
                min="0"
                step="1"
                value={this.props.formValues.constructionYear}
                onChange={this.props.handleChange}
              />
            </label>
            <label htmlFor="renovationYear" className="col-6">
              Renovation Year <span className="text-danger">*</span>
              <input
                type="number"
                className="form-control"
                name="renovationYear"
                min="0"
                step="1"
                value={this.props.formValues.renovationYear}
                onChange={this.props.handleChange}
              />
            </label>
          </div>
          <h5>Area</h5>
          <p>Total area covered by your property</p>
          <div className="row mb-3">
            <label htmlFor="sqrMeter" className="col-6 col-md-4">
              Square Meter <span className="text-danger">*</span>
              <input
                type="number"
                className="form-control"
                name="sqrMeter"
                min="1"
                step="1"
                value={this.props.formValues.sqrMeter}
                onChange={this.props.handleChange}
                required
              />
            </label>
            <label htmlFor="cubicMeter" className="col-6 col-md-3">
              Cubic Meter <span className="text-danger">*</span>
              <input
                type="number"
                className="form-control"
                name="cubicMeter"
                min="1"
                step="1"
                value={this.props.formValues.cubicMeter}
                onChange={this.props.handleChange}
              />
              </label>
          </div>
          <h5>Room Details</h5>
          <div className="row mb-3">
            <label htmlFor="numberOfRooms" className="col-6 col-md-3">
                Bedrooms <span className="text-danger">*</span>
                <input
                  type="number"
                  className="form-control"
                  name="nrOfRooms"
                  min="1"
                  step="1"
                  value={this.props.formValues.nrOfRooms}
                  onChange={this.props.handleChange}
                />
            </label>
            <label htmlFor="numberOfBathrooms" className="col-6 col-md-3">
                Bathrooms <span className="text-danger">*</span>
                <input
                  type="number"
                  className="form-control"
                  name="nrOfBathrooms"
                  min="1"
                  step="1"
                  value={this.props.formValues.nrOfBathrooms}
                  onChange={this.props.handleChange}
                />
            </label>
            <label htmlFor="numberOfOtherRooms" className="col-6 col-md-3">
                Other rooms <span className="text-danger">*</span>
                <input
                  type="number"
                  className="form-control"
                  name="nrOfOtherRooms"
                  min="1"
                  step="1"
                  value={this.props.formValues.nrOfOtherRooms}
                  onChange={this.props.handleChange}
                />
            </label>
          </div>
          <h5>Furnishing</h5>
          <div class ="form-check-inline">
          <label htmlFor="furnishing" class="form-check-label">
            <input
              style = {{height:"1em"}}
              type="radio"
              className="form-control"
              name="furnishing"
              value="furnished"
              onChange={this.props.handleChange}
            />
            Furnished
          </label>
          </div>
          <div class = "form-check-inline">
            <label htmlFor="furnishing" class="form-check-label">
              <input
                style = {{height:"1em"}}
                type="radio"
                className="form-control"
                name="furnishing"
                value="semi-furnished"
                onChange={this.props.handleChange}
              />
              Semi-furnished
            </label>
          </div>
          <div class="form-check-inline">
            <label htmlFor="furnishing" class="form-check-label">
              <input
                style = {{height:"1em", float:"left"}}
                type="radio"
                className="form-control"
                name="furnishing"
                value="unfurnished"
                onChange={this.props.handleChange}
              />
              Unfurnished
            </label>
          </div>
          <h5>Floor details</h5>
          <small>Total area covered by your property</small>
          <div className="row mb-3" style={{padding:"1px"}}>
            <label htmlFor="numberOfFloors" className="col-6 col-md-3">
              Number of Floors <span className="text-danger">*</span>
              <input
                type="number"
                className="form-control"
                name="nrOfFloors"
                min="1"
                step="1"
                value={this.props.formValues.nrOfFloors}
                onChange={this.props.handleChange}
              />
            </label>
            <label htmlFor="locatedOnFloor" className="col-6 col-md-3">
              Property Floor <span className="text-danger">*</span>
              <input
                type="number"
                className="form-control"
                name="locatedOnFloor"
                min="0"
                step="1"
                value={this.props.formValues.locatedOnFloor}
                onChange={this.props.handleChange}
              />
              </label>
            </div>
            {/*<label htmlFor="monthlyPayment" className="col-6 col-md-3">
              Monthly Payments <span className="text-danger">*</span>
              <input
                type="number"
                className="form-control"
                name="monthlyContribution"
                min="0"
                step="1"
                value={this.props.formValues.monthlyContribution}
                onChange={this.props.handleChange}
              />
            </label>
            <label htmlFor="energyLabel" className="col-6 col-md-3">
              Energy Label
              <input
                type="text"
                className="form-control"
                name="energyLabel"
                maxLength="1"
                value={this.props.formValues.energyLabel}
                onChange={this.props.handleChange}
                required
              />
            </label>
          </div>
          <div className="row mt-3">
            <label htmlFor="heating" className="col-12 col-md-6">
              Heating
              <input
                type="text"
                className="form-control"
                name="heating"
                value={this.props.formValues.heating}
                onChange={this.props.handleChange}
              />
            </label>
            <label htmlFor="warmWater" className="col-12 col-md-6">
              Warm Water
              <input
                type="text"
                className="form-control"
                name="warmWater"
                value={this.props.formValues.warmWater}
                onChange={this.props.handleChange}
              />
            </label>
          </div>
          <div className="row mt-3">
            <label htmlFor="storage" className="col-12 col-md-6">
              Storage
              <input
                type="text"
                className="form-control"
                name="storage"
                value={this.props.formValues.storage}
                onChange={this.props.handleChange}
              />
            </label>

            <label htmlFor="parking" className="col-12 col-md-6">
              Parking
              <input
                type="text"
                className="form-control"
                name="parking"
                value={this.props.formValues.parking}
                onChange={this.props.handleChange}
              />
            </label>
            </div>*/}
          <div className="col-12">
            <div className="row mt-3">
              <label htmlFor="description">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="7"
                name="description"
                value={this.props.formValues.description}
                onChange={this.props.handleChange}
                placeholder="Description"
                required
              />
            </div>
            </div>
          <div className="col-12 mt-3">
            <input className="btn btn-success" type="submit" value="Add New" />
          </div>
        </form>
      </Fragment>
    );
  }
}
