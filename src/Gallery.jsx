
import HornedBeast from "./HornedBeast";
import BeastFilter from './BeastFilter.jsx'
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react'

function Gallery(props) {

  const [filteredBeasts, setFilteredBeasts] = useState(props.beastData);
  const handleChange = (value) => {
    if (value == "All Beasts") {
      setFilteredBeasts(props.beastData);
    } else {
      setFilteredBeasts(props.beastData.filter(obj => obj.horns == value));
    }
  }

  return (
    <>
      <BeastFilter onChange={handleChange} />
      <Container>
        <Row xs={2} sm={3} md={4} lg={5}>
            {filteredBeasts.map(obj => {  
              return (<HornedBeast 
              key={obj._id}
              hb_object={obj} 
              horns={obj.horns}
              onClick={props.onClick} />) 
            })}
        </Row>
      </Container>
    </>
    
  );
}

export default Gallery