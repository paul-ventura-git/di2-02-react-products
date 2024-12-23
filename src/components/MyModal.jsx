import { useState } from 'react';

import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom';

export default function MyModal({ children, ...props }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate('..')
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title style={{paddingLeft: "1rem", paddingRight: "1rem"}}>{props.myTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ children }</Modal.Body>
      </Modal>
    </>
  )
}
