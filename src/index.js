import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import fontawesome from '@fortawesome/fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(faUser);

ReactDOM
  .render(<App />, document.getElementById('root'));
registerServiceWorker();
