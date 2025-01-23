import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";

function PopupModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Body  className='p-5  rounded-lg '>
                <h4>Subscribe to Our Newsletter</h4>
                <p>
                    Stay updated with the latest news and offers by subscribing to our newsletter.
                </p>
                    <Form>
                     <div className='d-flex gap-3'>
                         <Form.Group className="mb-3 w-50" controlId="formGroupEmail">
                             <Form.Label>Email address</Form.Label>
                             <Form.Control type="email" placeholder="Enter email" />
                         </Form.Group>
                         <Form.Group className="mb-3 w-50" controlId="formGroupPassword">
                             <Form.Label>Password</Form.Label>
                             <Form.Control type="password" placeholder="Password" />
                         </Form.Group>
                     </div>
                    </Form>
                    <button type="submit" className="btn btn-primary">Subscribe</button>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default PopupModal;
