
import { Modal } from 'react-bootstrap';

function SelectedBeast(props) {
    return (
        <Modal show={props.showBool} onHide={props.onHide}>
            <Modal.Header closeButton>
            <Modal.Title> {props.selectBeast?.title} </Modal.Title>
            </Modal.Header>
            <Modal.Body fluid="true">
                <img style={{width:"100%"}} src={props.selectBeast?.image_url} ></img>
                <p style={{textAlign:"center"}}> {props.selectBeast?.description}</p>
            </Modal.Body>
        </Modal>
    )
}

export default SelectedBeast;