import React, { Component } from "react";
import App from "../App";
import Repo from "./Repo";
import axios from "axios";
import qs from 'query-string';

class Repos extends Component {
  constructor() {
    super();  
    this.state = {
      repos: [],
      currentList: [],
      userQuery: "",
      start: 0,
      showPrevButton: false,
      showNextButton: false,
      totalPages: 0,
      page: 0
    };
  }

  componentDidMount() {
    const username = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).username;
    this.setState({userQuery: username})
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        this.setState({ repos: response.data });
        this.setState({
          currentList: this.state.repos.slice(this.state.start, 10)
        });
        this.setState({ showNextButton: true });
        this.setState({ start: this.state.start + 10 });
        this.setState({totalPages: response.data.length / 10});
        this.setState({page: 1});
      });
  }

  render() {
    return (
      <div>
        <App username={this.state.userQuery} userUrl={'https://github.com/' + this.state.userQuery}/>
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col">
            <ul>
              {this.state.currentList.map(repo => (
                <Repo content={repo} key={repo.id} />
              ))}
            </ul>
          </div>
          <div className="col-3"></div>
        </div>

        <div className="row mt-5">
          <div className="col-5"></div>
          <div className="col">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {this.state.showPrevButton ? (
                  <li className="page-item" id="previousButton">
                    <button onClick={this.prevList} className="page-link">
                      Previous
                    </button>
                  </li>
                ) : null}

                {this.state.showNextButton ? (
                  <li className="page-item" id="nextButton">
                    <button onClick={this.nextList} className="page-link">
                      Next
                    </button>
                  </li>
                ) : null}
              </ul>
            </nav>
          </div>
          <div className="col-3"></div>
        </div>
        <div></div>
      </div>
    );
  }

  prevList = () => {
    this.setState({
      currentList: this.state.repos.slice(
        this.state.start - 20,
        this.state.start - 10
      )
    });
    this.setState({ start: this.state.start - 10 });
    this.setState({page: this.state.page - 1});

    if (this.state.page > 1) {
      this.setState({ showPrevButton: true });
    } else {
      this.setState({ showPrevButton: false });
    }
    this.setState({ showNextButton: true });
  };

  nextList = () => {
    this.setState({
      currentList: this.state.repos.slice(
        this.state.start,
        this.state.start + 10
      )
    });
    this.setState({ start: this.state.start + 10 });
    this.setState({page: this.state.page + 1});

    if (this.state.page < this.state.totalPages) {
      this.setState({ showNextButton: true });
    } else {
      this.setState({ showNextButton: false });
    }
    this.setState({ showPrevButton: true });
  };
}

export default Repos;
