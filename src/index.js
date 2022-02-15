import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/base.css';
import App from './pages/App';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
    <App />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

