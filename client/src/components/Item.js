import React from 'react';
import { Link, } from "react-router-dom";
import axios from "axios";
import ItemForm from './ItemForm';
import { Button, Container, Header, Segment,} from 'semantic-ui-react';

//NOT WORKING
// class Item extends React.Component {
//   state = { item: {} };

//   componentDidMount() {
//     const { id, } = this.props.match.params;
//     axios.get(`/api/departments/${id}`)
//       .then( res => {
//         this.setState({ department: res.data, });
//       })
//     axios.get(`/api/departments/${id}/items`)
//       .then( res => {
//         this.setState({ items: res.data, });
//       })
//   }

//   handleDelete = () => {
//     const { id, } = this.props.match.params;
//     axios.delete(`/api/departments/${id}`)
//       .then( res => {
//         this.props.history.push("/departments");
//       })
//   }

//   //items



//   render() {
//     const { id, name } = this.state.department;

//     return (
//       <div>
//         <h1>{ name }</h1>
//         <br />
//         <Link to={`/departments/${id}/edit`}>
//           <button>Edit</button>
//         </Link>
//         <button onClick={this.handleDelete}>Delete</button>
//       </div>
//     )
//   }
// }

//OTHER ATTEMPT
class Item extends React.Component {
  state = { item: [], };

  componentDidMount() {
    const{ department_id, id } = this.props.match.params;
    axios.get(`/api/departments/${department_id}/items/${id}`)
      .then( res => {
        this.setState({ item: res.data, })
      })
  }

  handleDelete = () => {
    const { department_id, id } = this.props.match.params;
    axios.delete(`/api/departments/${department_id}/items/${id}`)
      .then( res => {
        this.props.history.push(`/departments/${department_id}`)
      })
  }

  render() {
    const { id, name, price, department_id } = this.state.item;
    return(
      <Container>
        <Segment.Group>

            <Header floated="right">
              <Button.Group widths="2">
                <Link to={`/departments/${department_id}/items/${id}/edit`}><Button color="blue">Edit</Button></Link>
                <Button color="red" onClick={this.handleDelete}>Delete</Button>
              </Button.Group>
            </Header>

          <p style={{ fontWeight: "bolder", fontSize: "16px"}}>Price: ${price}</p>

        </Segment.Group>
      </Container>
    )
  }
}

export default Item
