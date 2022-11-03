import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Loading from '@/components/Loading';
import App from './App';

import './global.scss';
import 'uno.css';

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById('root'),
);
