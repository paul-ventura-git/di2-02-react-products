import { Link, Form as MainForm, useLoaderData } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import MyModal from './MyModal'

export default function FormEditCustomer() {
  const customer = useLoaderData();
  return (
    <MyModal myTitle="Editar Cliente">
    <MainForm method="put">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ID:</Form.Label>
        <Form.Control name={customer.id} defaultValue={customer.id} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control name={customer.name} defaultValue={customer.id} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Teléfono:</Form.Label>
        <Form.Control name={customer.phone} defaultValue={customer.id} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email:</Form.Label>
        <Form.Control name={customer.email} defaultValue={customer.id} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dirección:</Form.Label>
        <Form.Control name={customer.address} defaultValue={customer.id} />
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