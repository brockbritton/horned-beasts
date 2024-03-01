
import { Form } from 'react-bootstrap';

function BeastFilter() {
    return (
        <div style={{padding:"20px"}}>
            <Form.Label htmlFor="numHorns">Sorting by Number of Horns</Form.Label>
            <Form.Select style={{width:"max-content", margin:"auto"}} name='numHorns' aria-label="Default select example">
                <option>All Beasts</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">One Hundred</option>
            </Form.Select>
        </div>
        
    );
}

export default BeastFilter;