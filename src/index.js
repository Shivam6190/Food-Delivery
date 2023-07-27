import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//For  routing
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './MyComponent/About';
import Contact from './MyComponent/Contact'
import BodyComponent from './MyComponent/Body';
import Error from './MyComponent/Error';
import RestaurantMenu from './MyComponent/RestaurantMenu';
import Profile from './MyComponent/Profile';



const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,


    children:[
      {
        path:"/",
        element:<BodyComponent/>
      },
      {
        path:"/about",
        element:<About/>,
        
        children : [
          {
            path:"profile",
            element:<Profile/>,
          }

        ],
      },
      
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
      
    ]
  },
]);

root.render(
<RouterProvider router={appRouter}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
