import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Productdetails from './productDetails'
import Productlist from './productList'
import Navbarex from './nav.jsx'
import MyCarousel from './carousel.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Productlist/>
  },
  {
    path: "/product-details/:id",
    element:<Productdetails/>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Navbarex/>
   <MyCarousel/>
  <RouterProvider router={router} />
  </StrictMode>
)