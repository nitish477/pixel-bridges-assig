import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LexStack from './view/LexStack/LexStack';
import Dashboard from './view/Dashboard/Dashboard';
import LeaderBoard from "./view/LeaderBoard/LeaderBoard"
import Trade from './view/Trade/Trade';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path:"/lexstack",
    element: <LexStack />
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard />
  },
  {
    path: "/trade",
    element: <Trade />
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

