import React from 'react';
import { Link, } from "react-router-dom";
import axios from "axios";
import { Card, Button, Image  } from 'semantic-ui-react'
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
      <Card as={Link} to={`/departments/${d.id}`}>
        <Card.Content>
          <Image src='https://assets.adidas.com/images/w_600,f_auto,q_auto/bd870e284b1e437985b7a8ff00f58854_9366/POD-S3_1_Shoes_Orange_B37364_01_standard.jpg' />
          <br />
          <br />
          <Card.Header textAlign='center'>{d.name}</Card.Header>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <ButnStyle>
          <Link to="/departments/new">
            <Button color='black'>+ New Department</Button>
          </Link>
        </ButnStyle>
        <Card.Group itemsPerRow={4}>
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