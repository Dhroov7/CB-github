import React, { Component } from "react";

class App extends Component {
  state = {};

  handleSubmit = () => {
    this.props.history.push('/result?username=' + this.state.username);
  }

  handleChange = (e) => {
    this.setState({username: e.target.value})
  }

  render() {
    return (
      <div>
        <div className="row mt-3">
          <div className="col">
            <a href="/CB-github">
              <img
                alt="CB logo"
                src="https://codingblocks.com/assets/images/cb/cblogo.png"
              />
            </a>
          </div>
          <div className="col-8"></div>
          <div className="col">
            <h6 id="username">
              {this.props.username ? (
                <a href={this.props.userUrl}>Hey, {this.props.username}</a>
              ) : null}
            </h6>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-10">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Search"
                      name="username"
                      value={this.props.username}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    className="btn btn-secondary"
                    value="Submit"
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

export default App;
