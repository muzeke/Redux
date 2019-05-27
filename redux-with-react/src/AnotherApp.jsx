import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { connect } from "react-redux";

class AnotherApp extends Component {
  render() {
    return (
      <div className="AnotherApp">
        <div className="card" style={{ width: 300 }}>
          <div>
            <span className="badge badge-default m-2">A: {this.props.a}</span>
          </div>
          <button
            onClick={() => this.props.updateA(this.props.b)}
            className="btn btn-primary m-2 btn-sm"
          >
            Update A
          </button>
        </div>

        <div className="card" style={{ width: 300 }}>
          <div>
            <span className="badge badge-default m-2">B: {this.props.b}</span>
          </div>
          <button
            onClick={() => this.props.updateB(this.props.a)}
            className="btn btn-primary m-2 btn-sm"
          >
            Update B
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    a: state.reducerA.a,
    b: state.reducerB.b
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateA: b =>
      dispatch({
        type: "UPDATE_A",
        b: b
      }),
    updateB: a =>
      dispatch({
        type: "UPDATE_B",
        a: a
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnotherApp);
