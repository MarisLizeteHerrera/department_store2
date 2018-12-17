import React from 'react';
import axios from "axios";
import styled from "styled-components";
import { Card, Image, Button, Icon, Grid, } from "semantic-ui-react";
import { Link, } from "react-router-dom";
import Reviews from "./Reviews";

class Item extends React.Component {
  state = { item: [], }

  componentDidMount() {
    const { url } = this.props.match;

    // Get the item information
    axios.get(`/api/${url}`)
      .then( res => {
        this.setState({ item: res.data });
        console.log(res.data);
      }).catch(err => {
        console.log('Error: ' + err)
    });
  }

  render() {
    const { name, price, department_id, id } = this.state.item;

    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <CardStyle>
              <Image src='https://assets.adidas.com/images/w_600,f_auto,q_auto/e3284ee412224146a722a91200fe1f34_9366/Obuv_POD-S3_1_nachova_B37469_01_standard.jpg' />
              <Card.Content>
                <Card.Header textAlign='center'>{name}</Card.Header>
                <Card.Description>${price}</Card.Description>
                <Card.Description>some frikken description of this item for sale bla bla bla bla bla bla bla lb alb albla lbllal ldkf</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <ButnStyle className='ui two buttons'>
                  <Button
                    as={Link}
                    to={`/departments/${department_id}/items/${id}/edit`}
                    basic 
                    color='green'
                  >
                    <Icon name='pencil' />
                    Edit
                  </Button>
                  <Button
                    basic
                    color='red'
                  >
                    <Icon name='trash' />
                    Delete
                  </Button>
                </ButnStyle>
              </Card.Content>
            </CardStyle>
          </Grid.Column>

          <Grid.Column width={8}>
            <Reviews {...this.state.item} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const CardStyle = styled(Card)`
  padding: 1%;
`;
const ButnStyle = styled.div`

`;



export default Item;