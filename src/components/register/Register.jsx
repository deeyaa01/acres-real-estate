import React, { Component, Fragment } from "react";
import { createUser } from "../../actions/user";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import './Register.css';
let baseUrl = "";
if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:4000";
} else {
  baseUrl = "https://shielded-journey-92023.herokuapp.com";
}

const initialState = {
  username: "",
  email: "",
  phoneNumber: "",
  password: "",
  repeatPassword: "",
  role: "",
  showPrivateMenu: false,
  showCompanyMenu: false,
  error: "",
  companyName: "",
  companyArr: [],
  companySelected: false,
  kvkNumber: 0
};

class SignUpForm extends Component {
  state = initialState;

  signUpValidation = e => {
    e.preventDefault();
    if (!this.state.role) {
      return this.setState({
        ...this.state,
        error: "Please select account type you want create"
      });
    }
    if (!this.state.password || this.state.password.length <= 6) {
      return this.setState({
        ...this.state,
        error: "Invalic Password. Password should be 6 characters or longer."
      });
    }
    if (this.state.password !== this.state.repeatPassword) {
      return this.setState({
        ...this.state,
        password: "",
        repeatPassword: "",
        error: "Passwords do not match. Enter passwords again."
      });
    }
    this.canSignUp();
  };

  canSignUp = () => {
    this.props.createUser(this.state);
    this.setState(initialState);
    this.props.history.push("/user");
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRadioButton = e => {
    this.setState({
      role: e.target.value
    });
  };

  /*showPrivPersMenu = () => {
    this.setState({
      ...this.state,
      showPrivateMenu: true,
      showCompanyMenu: false,
      error: "",
      role: "privatePerson"
    });
  };*/

  showMenuForCompany = () => {
    this.setState({
      ...this.state,
      showPrivateMenu: false,
      showCompanyMenu: true,
      error: "",
      role: ""
    });
  };

  searchAgency = () => {
    axios
      .get(`${baseUrl}/agency/findby?name=${this.state.companyName}`)
      .then(res => {
        this.setState({
          ...this.state,
          companyArr: res.data
        });
      })
      .catch(err => console.log(err));
  };

  selectCompany = companyName => {
    this.setState({
      ...this.state,
      companyArr: [],
      companySelected: true,
      error: "",
      companyName
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container mt-2">
          {this.state.error ? (
            <div className="alert alert-warning" role="alert">
              {this.state.error}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="d-flex flex-row justify-content-center mt-5 row align-items-center" >
          <div className="card flex-row" ><img class="card-img-left example-card-img-responsive" src="https://i.ibb.co/znDVwvH/log-in.png"/>
            <div className="card card-body p-5" style={{width: "30rem"}}>
              <h4 class = "card-title" style={{align: "center", font_weight: "3px"}}>Register</h4>
              <form onSubmit={this.signUpValidation}>
                <div className="form-group">
                  <label htmlFor="email">E-mail Address</label>
                  <input style = {{background:"#ecebeb"}}
                    type="email"
                    placeholder="your@email.com"
                    name="email"
                    className="form-control"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Name</label>
                  <input style = {{background:"#ecebeb"}}
                    type="text"
                    name="username"
                    placeholder="Your name"
                    className="form-control"
                    autoComplete="name"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                    required
                  />
                  <small className="form-text text-muted">
                    
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input style = {{background:"#ecebeb"}}
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    className="form-control"
                    value={this.state.phoneNumber}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input style = {{background:"#ecebeb"}}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    autoComplete="new-password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                    required
                  />
                  <small className="form-text text-muted">
                    Choose an appropriate password for your account.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="repeatPassword" >Confirm Password</label>
                  <input style = {{background:"#ecebeb"}}
                    type="password"
                    name="repeatPassword"
                    placeholder="Password"
                    className="form-control"
                    autoComplete="new-password"
                    value={this.state.repeatPassword}
                    onChange={e => this.handleChange(e)}
                    required
                  />
                  <small className="form-text text-muted">
                    Confirm password.
                  </small>
                </div>
                <div className = "form-group">
                  <div class="custom-control custom-checkbox">
                    <input style = {{background:"#ecebeb"}}
                      type="checkbox" 
                      class="custom-control-input" 
                      id="defaultLoginFormRemember"
                    />
                    <label class="custom-control-label" for="defaultLoginFormRemember">I agree to be contacted by Acres and others for similar properties or related services via phone, SMS, email etc.</label>
                  </div>
                </div> 
                <div className="form-group">
                  <input
                    type="submit"
                    value="Continue"
                    className="btn btn-md btn-success"
                    style = {{background: "#74B439 !important", width: "100%"}}
                  />
                </div>
              </form>
              Already have an account?
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer
  };
}

export default connect(mapStateToProps, { createUser })(SignUpForm);
