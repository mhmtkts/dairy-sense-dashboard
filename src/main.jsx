import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import DashboardPage from './pages/DashboardPage';
import './index.css';
import './i18n.js';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import PlaceholderPage from './pages/PlaceholderPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'reports',
        element: <PlaceholderPage title="Raporlar Sayfası" />,
      },
      {
        path: 'protocols',
        element: <PlaceholderPage title="Protokoller Sayfası" />,
      },
      {
        path: 'events',
        element: <PlaceholderPage title="Tanımlanmış Olaylar Sayfası" />,
      },
      {
        path: 'agenda',
        element: <PlaceholderPage title="Ayarlar Sayfası" />,
      },
      {
        path: 'users',
        element: <PlaceholderPage title="Kullanıcılar Sayfası" />,
      },
      {
        path: 'treatments',
        element: <PlaceholderPage title="Tedariler Sayfası" />,
      },
      {
        path: 'chats',
        element: <PlaceholderPage title="Ajanda Sayfası" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);