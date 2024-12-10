import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import Home from '../pages/Home';
import { productsLoader } from '../services/loaders/productsLoader';
import FormNewProduct from '../components/FormNewProduct';
import newProductAction from '../services/actions/newProductAction';
import ProductDetails from '../components/ProductDetails';
import productDetailsLoader from '../services/loaders/productDetailsLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productsLoader,
        children: [
          { path: '/create-product', element: <FormNewProduct />, action: newProductAction },
          { path: '/:id', element: <ProductDetails />, loader: productDetailsLoader}
        ],
      },
    ],
  },
]);