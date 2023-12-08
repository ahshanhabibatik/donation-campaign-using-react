import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Donations from './Components/Donation/Donation'; // Correct path
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import DetailedCardView from './Components/DetailedCardView/DetailedCardView';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/donation',
        element: <Donations></Donations>,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: "/details/:id",
        element: <DetailedCardView></DetailedCardView>,
        loader: () => fetch('../public/formalData.json'),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer /> {/* Add ToastContainer to your app */}
  </React.StrictMode>
);
