import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Enroll from './pages/Enroll.jsx';
import TakeAttendance from './pages/TakeAttendance.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "enroll",
    element: <Enroll/>,
  },
  {
    path: "takeAttendance",
    element: <TakeAttendance/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
