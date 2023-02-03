import React, { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom';
import Login from './login';
import Sheet from './sheet';
import { socketConnection } from './socket';

const Layout: React.FC = () => {
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    socketConnection.connect(() => {
      setConnected(true);
    });
  }, []);

  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "spreadsheet/:id", element: <Sheet /> }
  ]);

  if (!connected) {
    routes = <div className='connecting-div'>
      <div className='connecting-message'>Connecting...</div>
    </div>
  }
  return routes;
}

export default Layout