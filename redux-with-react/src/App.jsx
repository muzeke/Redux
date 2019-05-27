import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Age: <span>{this.props.age}</span>
        </div>
        <button
          className="btn btn-sm btn-primary m-2"
          onClick={this.props.handleIncrement}
        >
          Increment
        </button>
        <button
          onClick={this.props.handleDecrement}
          className="btn btn-sm btn-primary m-2"
        >
          Decrement
        </button>
        <hr />
        {this.props.loading && <img src={logo} className="App-logo" />}
        <div className="card" style={{ width: "18rem", margin: "0px auto" }}>
          <ul className="list-group">
            {this.props.history.map((item, id) => (
              <li
                onClick={() => this.props.handleRemove(item)}
                key={item.id}
                className="list-group-item"
              >
                Age: {item.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch(actionCreator.ageUp(1)),
    handleDecrement: () => dispatch(actionCreator.ageDown(1)),
    handleRemove: item => {
      dispatch({
        type: "REMOVE_HISTORY_ITEM",
        key: item.id
      });
    }
  };
}; //mapDispatchToProps

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
