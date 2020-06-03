import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Time = (props) => (
  <tr>
    <td>{props.time.username}</td>
    <td>{props.time.tidate}</td>
    <td>
      <Link to={"/edit/" + props.time._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteTime(props.time._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class TimesList extends Component {
  constructor(props) {
    super(props);

    this.deleteTime = this.deleteTime.bind(this);

    this.state = { times: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/times/")
      .then((response) => {
        this.setState({ times: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteTime(id) {
    axios.delete("http://localhost:5000/times/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      times: this.state.times.filter((el) => el._id !== id),
    });
  }

  timeList() {
    return this.state.times.map((currenttime) => {
      return (
        <Time
          time={currenttime}
          deleteTime={this.deleteTime}
          key={currenttime._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Time List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{this.timeList()}</tbody>
        </table>
      </div>
    );
  }
}
