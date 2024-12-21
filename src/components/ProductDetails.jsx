import { useLoaderData, Link } from 'react-router-dom';

import Modal from './MyModal'
import classes from '../assets/css/ProductDetails.module.css'

export default function ProductDetails() {
  const product = useLoaderData();
  
  if (!product) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>No se pudo encontrar el producto</h1>
          <p>Desafortunadamente, el producto requerido no fue encontrado.</p>
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
        <p className={classes.author}>ID: {product.id}</p>
        <p className={classes.text}>Title: {product.title}</p>
        <p className={classes.text}>Description: {product.description}</p>
      </main>
    </Modal>
  );
  
}
