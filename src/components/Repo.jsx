import React, { Component } from "react";

class Repo extends Component {
  state = {
  };
  render() {
    return (
      <div>
        <li className="list-group-item mb-4">
          <a href={this.props.content.html_url} target="_blank">
            <div className="row">
              <div className="col-6">{this.props.content.name}</div>
              <div className="col"></div>
              <div className="col-2">
                <i className="fas fa-star"></i>{this.props.content.stargazers_count}
              </div>
            </div>
          </a>
        </li>
      </div>
    );
  }
}

export default Repo;
