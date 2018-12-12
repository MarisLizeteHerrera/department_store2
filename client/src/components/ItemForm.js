import React from 'react';
import axios from "axios";
import { Link, } from "react-router-dom";


class ItemForm extends React.Component {
  state = { name: "", price: "" };

  componentDidMount() {

    const { id } = this.props.match.params;
    if (id)
      axios.get(`/api/items/${id}`)
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
    const item = { ...this.state };
    const { id, department_id } = this.props.match.params;
    if (id) {
      axios.put(`/api/departments/${department_id}/items/${id}`, item )
        .then( res => {
          this.props.history.push(`/items/${id}`)
        })
    } else {
      axios.post(`/api/departments/${id}/items`, item)
        .then( res => {
          this.props.history.push(`/departments/${id}`)
        })
    }
  }

  render() {
    const { name, price} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price"
          value={price}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    )
  }
}



export default ItemForm