import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TodoApp from './TodoApp';

ReactDOM.render(<TodoApp />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
