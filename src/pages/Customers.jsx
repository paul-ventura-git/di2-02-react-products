import { Outlet, Link, useLoaderData } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";

import '../assets/css/Customers.module.css'

export default function Customers() {
  const customers = useLoaderData();
  return (
    <div className="my-container">
      <Outlet></Outlet>
      <div className="container">
        <br></br>
        <br></br>
        <h1>Clientes</h1>
        <br></br>
        
        <Link className="nav-link" to="/customers/create-customer">
          <Button variant="warning"><AiOutlineFileAdd />Nuevo Cliente</Button>
        </Link>        

        <br></br>
        <br></br>
        <Table responsive className="table-hover table-striped table-responsive">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>              
              <th>Telefono</th>
              <th>E-mail</th>
              <th>Dirección</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((item)=>{
                let editarCliente = 'edit-customer/'+item.id;
                let eliminarCliente = 'eliminar/'+item.id;
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={item.id}><FaEye /></Link>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={editarCliente}><FaEdit /></Link>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={eliminarCliente}><FaTrash /></Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
