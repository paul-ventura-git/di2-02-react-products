import { Link, Form as MainForm, useLoaderData } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import MyModal from './MyModal'

export default function DeleteCustomer() {
  const customer = useLoaderData();
  return (
    <MyModal myTitle="¿Está seguro que desea eliminar el cliente actual?">
    <MainForm method="post">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{display: "none"}}>
        <Form.Label></Form.Label>
        <Form.Control name="id" placeholder="" defaultValue={customer.id}/>
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
