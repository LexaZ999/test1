import * as ReactDOMClient from 'react-dom/client';
import './App.scss';
import init from './init.jsx';

const application = document.getElementById('app');

const root = ReactDOMClient.createRoot(application);
root.render(init());
