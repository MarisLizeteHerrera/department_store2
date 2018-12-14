import React from 'react';
import { Link, } from "react-router-dom";
import axios from "axios";
import { Card, Button,  } from 'semantic-ui-react'
import styled from "styled-components";

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
          <Card.Header textAlign='center'>{d.name}</Card.Header>
        </Card.Content>
        <Card.Content extra textAlign='center'>
          <ButnStyle>
            <Link to={`/departments/${d.id}`}>
              <Button color="blue">
                View
              </Button>
            </Link>
          </ButnStyle>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <ButnStyle>
          <Link to="/departments/new">
            <Button color='green'>+ New Department</Button>
          </Link>
        </ButnStyle>
        <Card.Group itemsPerRow={5}>
          { this.renderDepartments() }
        </Card.Group>
      </div>
    )
  }
}


const ButnStyle = styled.div`
  margin-top: 1%;
  margin-bottom: 1%;



`;

export default Departments