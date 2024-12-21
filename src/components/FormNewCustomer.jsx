import { Link, Form as MainForm } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import MyModal from './MyModal'

export default function FormNewCustomer() {
  return (
    <MyModal myTitle="Nuevo Cliente">
      <MainForm method="post">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control name="name" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Teléfono:</Form.Label>
          <Form.Control name="phone" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email:</Form.Label>
          <Form.Control name="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Dirección:</Form.Label>
          <Form.Control name="address" placeholder="" />
        </Form.Group>
        
        <br />
        <div style={{  display: "flex", justifyContent: "flex-end",  gap: "1rem"}}>
          <button className="btn btn-light">
            <Link className="nav-link" to='..'>
              Cancelar
            </Link>
          </button>
          <button className="btn btn-primary">Enviar</button>
        </div>
        <br />
      </MainForm>
    </MyModal>
  )
}
