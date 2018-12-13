import React from 'react';
import { Link, } from "react-router-dom";
import axios from "axios";
import { Card, Button,  } from 'semantic-ui-react'

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
      <Card>
        <Card.Content>
          <Card.Header>{d.name}</Card.Header>
          <Card.Description>{d.description}</Card.Description>
        </Card.Content>
        <Card.Content textAlign="center">
          <Link to={`/departments/${d.id}`}>
            <Button color="blue">
              View
            </Button>
          </Link>
        </Card.Content>
      </Card>
    ))
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