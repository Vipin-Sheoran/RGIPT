import React,{useState} from 'react'
import Preview from './PEpreview'
import { Modal, Button } from "react-bootstrap";

function Example({preview}) {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    
  
    return (
      <>
        <Button onClick={() => setLgShow(true)}>Preview</Button>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            </Modal.Title>
          </Modal.Header>
          <Modal.Body><Preview></Preview></Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default Example