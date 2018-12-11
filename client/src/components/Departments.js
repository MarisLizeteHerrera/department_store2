import React from 'react';
import { Link, } from "react-router-dom";
import axios from "axios";

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, });
      })
      .catch( err => {
        console.log(err.response);
      })
  }

  renderDepartments = () => {
    return this.state.departments.map( d => (
      <Link to={`/departments/${d.id}`}>
        <li>{ d.name }</li>
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/departments/new">
          <button>New Department</button>
        </Link>
        <ul>
          { this.renderDepartments() }
        </ul>
      </div>
    )
  }
}


export default Departments