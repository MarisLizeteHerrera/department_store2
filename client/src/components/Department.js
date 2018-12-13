import React from 'react';
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Card, Image, Icon, } from 'semantic-ui-react'
import ItemCard from "../styles/ItemCard";
import styled from "styled-components";

class Department extends React.Component {
  state = { department: {}, items: [] };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => this.setState({ department: res.data, }))
    axios.get(`/api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data, }))
  }

  handleDelete = () => {
    const { id, } = this.props.match.params;
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        this.props.history.push("/departments");
      })
  }


  renderItems = () => {
    return this.state.items.map( i => (
        <ItemCard key={i.id} { ...i } remove={this.removeItem} />
    ));
  }

  removeItem = (id) => {
    const remove = window.confirm("Are you sure you want to delete this item?");
    const dId = this.props.match.params.id;
    if (remove)
      axios.delete(`/api/departments/${dId}/items/${id}`)
      .then( res => {
        const items = this.state.items.filter( i => {
          if (i.id !== id)
          return i;
        })
        this.setState({ items, });
      })
  }

  render() {
    const { id, name } = this.state.department;

    return (
      <div>
        <h1>{ name }</h1>

          <ButnStyle>

            <Link to={`/departments/${id}/edit`}>
              <Button color='green'><Icon name='pencil' />Edit</Button>
            </Link>
              <Button color='red' onClick={this.handleDelete}><Icon name='trash' />Delete</Button>

          </ButnStyle>

        <Card.Group itemsPerRow={5}>
          { this.renderItems() }
        </Card.Group>

        <ButnStyle>
          <Button color='green'>+</Button>
        </ButnStyle>
      </div>
    )
  }
}

const ButnStyle = styled.div`
  margin-bottom: 2%;
  margin-top: 2%;



`;






export default Department