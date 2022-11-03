/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

const BasicLayout = ({ route }: { route?: any }) => {
  console.log('route :>> ', route);
  return (
    <>
      <header>
        <p>
          <Link to="/">Homne</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </header>
      <main>{renderRoutes(route.routes)}</main>
    </>
  );
};

export default BasicLayout;
