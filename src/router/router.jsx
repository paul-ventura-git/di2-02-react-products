import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import Home from '../pages/Home';
import { productsLoader } from '../services/loaders/productsLoader';
import FormNewProduct from '../components/FormNewProduct';
import newProductAction from '../services/actions/newProductAction';
import ProductDetails from '../components/ProductDetails';
import { productDetailsLoader } from '../services/loaders/productDetailsLoader';
import Products from '../pages/Products';
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound'
import FormNewCustomer from '../components/FormNewCustomer';
import CustomerDetails from '../components/CustomerDetails';

import { customersLoader } from '../services/loaders/customersLoader';
import newCustomerAction from '../services/actions/newCustomerAction';
import { customerDetailsLoader } from '../services/loaders/customerDetailsLoader';
import FormEditCustomer from '../components/FormEditCustomer';
import DeleteCustomer from '../components/DeleteCustomer';
import { customerEditLoader } from '../services/loaders/customerEditLoader';
import editCustomerAction from '../services/actions/editCustomerAction';
import deleteCustomerAction from '../services/actions/deleteCustomerAction';
import { deleteCustomerLoader } from '../services/loaders/deleteCustomerLoader';

import FormEditProduct from '../components/FormEditProduct';
import { productEditLoader } from '../services/loaders/productEditLoader';
import editProductAction from '../services/actions/editProductAction';
import DeleteProduct from '../components/DeleteProduct';
import { deleteProductLoader } from '../services/loaders/deleteProductLoader';
import deleteProductAction from '../services/actions/deleteProductAction';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />,
        loader: productsLoader,
        children: [
          { path: '/products/create-product', element: <FormNewProduct />, action: newProductAction },
          { path: '/products/:id', element: <ProductDetails />, loader: productDetailsLoader},
          { path: '/products/edit-product/:id', element: <FormEditProduct />, loader: productEditLoader, action: editProductAction },
          { path: '/products/delete-product/:id', element: <DeleteProduct />, loader: deleteProductLoader, action: deleteProductAction },
        ],
      },
      {
        path: '/customers',
        element: <Customers />,
        loader: customersLoader,
        children: [
          { path: '/customers/create-customer', element: <FormNewCustomer />, action: newCustomerAction },
          { path: '/customers/:id', element: <CustomerDetails />, loader: customerDetailsLoader},
          { path: '/customers/edit-customer/:id', element: <FormEditCustomer />, loader: customerEditLoader, action: editCustomerAction},
          { path: '/customers/delete-customer/:id', element: <DeleteCustomer />, loader: deleteCustomerLoader, action: deleteCustomerAction },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/*',
    element: <NotFound />
  }
]);