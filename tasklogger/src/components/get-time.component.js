import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tidate: new Date().toLocaleString(),
    };
  }

  render() {
    return (
      <div>
        <h3 className="col-10 md-5 m-5">
          Current Date & Time:
          <span>
            <label> {this.state.tidate} </label>
          </span>
        </h3>
      </div>
    );
  }
}
