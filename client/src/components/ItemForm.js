import React from 'react';
import axios from "axios";
import { Link, } from "react-router-dom";
import { Form, Button, } from "semantic-ui-react"
import styled from "styled-components";

class ItemForm extends React.Component {
  state = { name: "", price: "" };

  componentDidMount() {
    const { department_id, id } = this.props.match.params;
    if (id)
      axios.get(`/api/departments/${department_id}/items/${id}`)
        .then( res => {
          const { name, price } = res.data;
          this.setState({ name, price });
        })
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { department_id, id } = this.props.match.params;
    if (id)
      axios.put(`/api/departments/${department_id}/items/${id}`, { ...this.state })
        .then( res => this.props.history.push(`/departments/${department_id}`))
    else
      axios.post(`/api/departments/${department_id}/items`, { ...this.state })
        .then( res => this.props.history.push(`/departments/${department_id}`))
  }

  render() {
    const { name, price} = this.state;
    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Item Name</label>
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </Form.Field>

        <Form.Field>
          <label>Price</label>
          <input
            name="price"
            placeholder="Price"
            value={price}
            onChange={this.handleChange}
            required
          />
        </Form.Field>
        <ButnStyle>
         <Button color='black'>Submit</Button>
        </ButnStyle>
      </FormStyle>
    )
  }
}


const FormStyle = styled(Form)`
  padding: 1%;
`;
const ButnStyle = styled.div`
margin-bottom: 1%;
margin-top: 1%;
`;


export default ItemForm