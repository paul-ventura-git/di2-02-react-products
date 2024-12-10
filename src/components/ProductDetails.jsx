import { useLoaderData } from 'react-router-dom';

export default function ProductDetails() {
  const product = useLoaderData();
  return (
    <div>ProductDetails
      <p>{product.id}</p>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
    </div>
  )
}
