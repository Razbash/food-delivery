import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { setupStore } from './store';

import "./css/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
