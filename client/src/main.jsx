import { ChakraProvider } from '@chakra-ui/react';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ChallengePage from './pages/ChallengePage.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignupForm from './components/SignUpForm.jsx';

const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <Home />
        }, {
            path: '/login',
            element: <LoginForm />
        }, {
          path: '/signup',
          element: <SignupForm />
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
  