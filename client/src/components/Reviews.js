/*
      TO DO LIST

  1. Import React
  2. Create Reviews class
  3. Export default Reviews
  4. Render Reviews headline
  5. componentWillReceiveProps(newProps)
    - Axios call to the api/items/id/reviews to save in state
  6. Display reviews under headline
  7. Display each review
*/

import React from "react";
import axios from "axios";
import { Segment, Rating } from 'semantic-ui-react';

class Reviews extends React.Component {
  state = { reviews : [] }

  componentWillReceiveProps(newProps) {
    const { id } = newProps;
    // id is item id
    axios.get(`/api/items/${id}/reviews`)
      .then(res => {
        this.setState({ reviews: res.data, })
        console.log(this.state.reviews);
      }).catch(err => {
        console.log('Error: ' + err)
    });
  }

  displayReviews = () => {
    return this.state.reviews.map(review => (
      <Segment key={review.id}>
        <h2><Rating rating={review.rating} maxRating ={5} icon='heart' disabled /> {review.title} </h2> 
        <p>By {review.author}</p>
        <h3>{review.body}</h3>
      </Segment>
    ));
  }

  render () {
    return(
      <div>
        <h1>Review</h1>
        { this.displayReviews() }
      </div>
    )
  }
}
export default Reviews; 