
import HornedBeast from "./HornedBeast";

import { Container, Row } from 'react-bootstrap';

function Gallery(props) {
  return (
    <Container>
      <Row xs={2} sm={3} md={4} lg={5}>
          {props.beastData.map(obj => {
            return (
              <HornedBeast 
              key={obj._id}
              title={obj.title} 
              description={obj.description} 
              imageUrl={obj.image_url} 
              onClick={props.onClick}/>  
            )
          })}
      </Row>
    </Container>
  );
}

export default Gallery