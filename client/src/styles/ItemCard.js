import React from "react";
import { Card, Image, Button,  Icon, } from "semantic-ui-react";
import styled from "styled-components";
import { Link, } from "react-router-dom";
import axios from "axios";


const ItemCard = ({ remove, department_id, id, name, price}) => (
  <CardStyle>
    <Image as={Link} to={`/departments/${department_id}/items/${id}`} src='https://assets.adidas.com/images/w_600,f_auto,q_auto/e3284ee412224146a722a91200fe1f34_9366/Obuv_POD-S3_1_nachova_B37469_01_standard.jpg' />
    <Card.Content as={Link} to={`/departments/${department_id}/items/${id}`}>
      <Card.Header textAlign='center'>{name}</Card.Header>
      <Card.Description >${price}</Card.Description>
      <Card.Description >some frikken description of this item for sale bla bla bla bla bla bla bla lb alb albla lbllal ldkf</Card.Description>
    </Card.Content>
    <Card.Content extra>
    <ButnStyle className='ui two buttons'>
        <Button 
          as={Link} to={`/departments/${department_id}/items/${id}/edit`} 
          basic color='green'>
          <Icon name='pencil' />
            Edit
        </Button>

        <Button
          onClick={() => remove(id)}
          basic color='red' >
          <Icon name='trash' />
          Delete
        </Button>
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


// class ItemCard extends React.Component {
//   state = { name: '', price: '' }

//   componentDidMount() {
//     const { department_id, id } 
//     axios.get(`/api/departments/${department_id}/items/${id}`)

//   }
// 
  
// 

//   render() {
//     return(
//       {this.displayItem}
//     )
//   }
// }