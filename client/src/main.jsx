import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import LogInSignUp from './pages/LogInSignUp.jsx';
import ChallengePage from './pages/ChallengePage.jsx';

const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
        {
            index: true,
            element: <Home />
        }, {
            path: '/loginsignup',
            element: <LogInSignUp />
        }, {
            path: '/dashboard',
            element: <Dashboard />
        }, {
            path: '/challengepage',
            element: <ChallengePage />
        }
    ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )
  