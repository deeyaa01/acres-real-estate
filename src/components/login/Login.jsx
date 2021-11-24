import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/user";
import { Link } from "react-router-dom";
import './Login.css';

const initialState = {
  email: "",
  password: ""
};

class LoginForm extends Component {
  state = initialState;

  login = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
    this.setState(initialState);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    if (this.props.user) {
      this.props.history.push("/user");
    }
  }

  componentDidUpdate() {
    if (this.props.user) {
      this.props.history.push("/user");
    }
  }

  render() {
    return (
      <Fragment>
        <div className="d-flex flex-row justify-content-center mt-5 row align-items-center" >
          <div className="card flex-row" ><img class="card-img-left example-card-img-responsive" src="https://i.ibb.co/znDVwvH/log-in.png"/>
            <div className="card card-body p-5" style={{width: "30rem"}}>
              <h4 class = "card-title" style={{align: "center", font_weight: "3px"}}>Login</h4>
              <form onSubmit={this.login}>
                <div className="form-group">
                  <label htmlFor="username">E-mail Address</label>
                  <input style = {{background:"#ecebeb"}}
                    type="text"
                    name="email"
                    placeholder="your@email.com"
                    className="form-control"
                    value={this.state.email}
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
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Continue"
                    className="btn btn-md btn-success"
                  />
                </div>
                <div className = "form-group">
                  <div class="custom-control custom-checkbox">
                    <input 
                      type="checkbox" 
                      class="custom-control-input" 
                      id="defaultLoginFormRemember"
                    />
                    <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                  </div>
                </div> 
              </form>
              Don't have an account?
              <Link to="/register">Register now</Link>
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

export default connect(mapStateToProps, { loginUser })(LoginForm);
