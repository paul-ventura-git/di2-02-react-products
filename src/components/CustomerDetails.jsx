import { useLoaderData, Link } from 'react-router-dom';

import MyModal from './MyModal'
import classes from '../assets/css/ProductDetails.module.css'

export default function CustomerDetails() {
  const customer = useLoaderData();
  
  if (!customer) {
    return (
      <MyModal>
        <main className={classes.details}>
          <h1>No se pudo encontrar el cliente</h1>
          <p>Desafortunadamente, el cliente requerido no fue encontrado.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </MyModal>
    );
  }
  return (
    <MyModal myTitle="Detalles del Cliente">
      <main className={classes.details}>      
        <p className={classes.text}>ID: {customer.id}</p>
        <p className={classes.text}>Nombre: {customer.name}</p>
        <p className={classes.text}>Email: {customer.email}</p>
      </main>
    </MyModal>
  );  
}
