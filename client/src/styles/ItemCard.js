import React from "react";
import { Card, Image, Button,  Icon, } from "semantic-ui-react";
import styled from "styled-components";



const ItemCard = ({ id, name, price}) => (
<CardStyle>
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>${price}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'><Icon name='pencil' />Edit</Button>
          <Button basic color='red'><Icon name='trash' />Delete</Button>
        </div>
      </Card.Content>
    </Card>
</CardStyle>
)

const CardStyle = styled.div`
  padding: 1%;

`;

export default ItemCard;