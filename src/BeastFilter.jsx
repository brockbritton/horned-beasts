
import { Form } from 'react-bootstrap';

function BeastFilter(props) {
    return (
        <Form style={{padding:"20px"}} onChange={(e) => {props.onChange(e.target.value)}}>
            <Form.Label htmlFor='numHorns'>Sorting by Number of Horns</Form.Label>
            <Form.Select style={{width:"max-content", margin:"auto"}} name='numHorns' id='numHorns'>
                <option value={null}>All Beasts</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
                <option value={100}>One Hundred</option>
            </Form.Select>
        </Form>
    );
}

export default BeastFilter;