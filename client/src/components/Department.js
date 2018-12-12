import React from 'react';
import axios from "axios";
import { Link, } from "react-router-dom";



class Department extends React.Component {
  state = { department: {}, items: [] };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
    axios.get(`/api/departments/${id}/items`)
      .then( res => {
        this.setState({ items: res.data, });
      })
  }

  handleDelete = () => {
    const { id, } = this.props.match.params;
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        this.props.history.push("/departments");
      })
  }

  //items

  renderItems = () => {
    return this.state.items.map( i => (
      <Link to={`/items/${i.id}`}>
        <li>{ i.name } - ${ i.price }</li>
      </Link>
    ));
  }

  render() {
    const { id, name } = this.state.department;

    return (
      <div>
        <h1>{ name }</h1>
        <br />
        <Link to={`/departments/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={this.handleDelete}>Delete</button>
        <ul>
          { this.renderItems() }
        </ul>
      </div>
    )
  }
}

export default Department