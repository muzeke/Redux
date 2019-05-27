import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";

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
    history: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () =>
      dispatch({
        type: "AGE_UP",
        value: 5
      }),
    handleDecrement: () =>
      dispatch({
        type: "AGE_DOWN",
        value: 5
      }),
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
