import { Outlet, Link, useLoaderData, useNavigate } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";

import '../assets/css/Products.module.css'

export default function Products() {
  const products = useLoaderData();
  const navigate = useNavigate();
  console.log(products);

  function closeHandler() {
    navigate('/products');
  }

  return (
    <div>
      <Outlet></Outlet>
      <div className="container">
        <br></br>
        <br></br>
        <h1>Productos</h1>
        <br></br>
        <Button variant="warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <Link className="nav-link" to="/products/create-product"><AiOutlineFileAdd /> Nuevo Producto</Link>
        </Button>

        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={closeHandler}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <Table responsive>
          <thead>
            <tr>
              <th>Nombre</th>              
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>% de Descuento</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Marca</th>
              <th>Peso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((item)=>{
                let editarProducto = 'editar/'+item.id;
                let eliminarProducto = 'editar/'+item.id;
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.discount}</td>
                    <td>{item.rating}</td>
                    <td>{item.stock}</td>
                    <td>{item.brand}</td>
                    <td>{item.weight}</td>
                    <td>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={item.id}><FaEye /></Link>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={editarProducto}><FaEdit /></Link>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={eliminarProducto}><FaTrash /></Link>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
      </div>
    </div>
  )
}
