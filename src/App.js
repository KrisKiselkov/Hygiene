import logo from './logo.svg';
import './App.css';
import { RouterProvider, Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Landing } from './components/Landing';
import { ProductPage } from './components/Product-Page/ProductPage';
import { Blog } from './components/Blog-Page/Blog';
import { BlogPage } from './components/Blog-Page/BlogPage';
import { Product } from './components/Product-Page/Product';
import Layout from './components/Layout';
import { Subscriptions } from './components/Subscriptions-Page/Subscriptions';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
    </Route>
  ));


  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;