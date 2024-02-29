import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function HornedBeast(props) {
    const [likes, setLikes] = useState(0);
    return (
        <Card>
            <Card.Img onClick={props.onClick} src={props.imageUrl} alt="" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                {/* <Card.Text> {props.description} </Card.Text> */}
                <Card.Text onClick={() => setLikes(likes + 1)}> Favorites: {likes} </Card.Text>
                <Button onClick={props.onClick}> Details </Button>
            </Card.Body>
        </Card>
    )
}

export default HornedBeast;