import React from "react";
import { Card, Image, Button,  Icon, } from "semantic-ui-react";
import styled from "styled-components";
import { Link, } from "react-router-dom";


const ItemCard = ({ remove, department_id, id, name, price}) => (
  <CardStyle>
    <Card.Content>
      <Card.Header textAlign='center'>{name}</Card.Header>
      <Card.Description >${price}</Card.Description>
      <Card.Description >some frikken description of this item for sale bla bla bla bla bla bla bla lb alb albla lbllal ldkf</Card.Description>
    </Card.Content>
    <Card.Content extra>

    <ButnStyle className='ui two buttons'>
      <Link to={`/departments/${department_id}/items/${id}/edit`}>
        <Button basic color='green'><Icon name='pencil' />Edit</Button>
      </Link>
      <Button basic color='red' onClick={() => remove(id)}><Icon name='trash' />Delete</Button>
    </ButnStyle>



    </Card.Content>
  </CardStyle>
)

const CardStyle = styled(Card)`
  padding: 1%;
`;
const ButnStyle = styled.div`

`;

export default ItemCard;