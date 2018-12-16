// import { Item } from "semantic-ui-react";
// import axios from "axios";
// import Reviews from "./Reviews";


// class Item extends React.Component {

//   componentDidMount() {
//     const { url } = this.props.match
//     axios.get(`api/${url}`)
//       .then( res => this.setState({ items: res.data }))
//   }






//   render(){
//     const { name, price } = this.state.item;
//     const { match: { params: {id}} } = this.props;

//     return(
//       <div>
//         <h1> {name} </h1>
//         <p> {price} </p>

//         <div>
//           <h1> Reviews </h1>
//         </div>
//         <Reviews id={id} />
//       </div>
//     )
//   }
// }



export default Item;