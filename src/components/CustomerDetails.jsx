import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal'
import classes from '../assets/css/ProductDetails.module.css'

export default function CustomerDetails() {
  const customer = useLoaderData();
  
  if (!customer) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>No se pudo encontrar el cliente</h1>
          <p>Desafortunadamente, el cliente requerido no fue encontrado.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>      
        <p className={classes.author}>ID: {customer.id}</p>
        <p className={classes.text}>Nombre: {customer.name}</p>
        <p className={classes.text}>Email: {customer.email}</p>
      </main>
    </Modal>
  );  
}
