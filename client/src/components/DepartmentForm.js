import React from 'react';
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react'
import styled from "styled-components";

class DepartmentForm extends React.Component {
  state = { name: "", };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
    .then( res=> this.setState({name: res.data.name}))
  }


  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state };
    const { id } = this.props.match.params;
    if (id) {
      axios.put(`/api/departments/${id}`, department )
        .then( res => {
          this.props.history.push(`/departments/${id}`)
        })
    } else {
      axios.post("/api/departments", department)
        .then( res => {
          this.props.history.push("/departments")
        })
    }
  }

  render() {
    const { name, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Department Name</label>
          <input
            name="name"
            placeholder= "name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </Form.Field>

        <ButnStyle>
          <Button color='black'>Submit</Button>
        </ButnStyle>
      </Form>
    )
  }
}

const ButnStyle = styled.div`
  margin-bottom: 2%;
  margin-top: 2%;
`;


export default DepartmentForm