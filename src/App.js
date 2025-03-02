import logo from './logo.svg';
import './App.css';
import { RouterProvider, Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Product } from './components/Product-Page/Product';
import { Blog } from './components/Blog-Page/Blog';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='/' element={ <Landing /> }/>
        <Route path=':id' element={ <Product /> }/>
        <Route path='/blog' element={ <Blog /> }/>
        <Route path='/blog/:id' element={ <Landing /> } />
    </Route>
  ));


  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;