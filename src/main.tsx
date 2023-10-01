import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateInviteePage from './components/create-invitee/create-invitee-page';

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/invitee', element: <CreateInviteePage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
