import React from 'react';
import ReactDOM from 'react-dom';

import { If } from './condition';

const App = () => {
  return (
    <div>
      <If condition={true}>
        This is true!
      </If>
      <If condition={false}>
        This is falsey!
      </If>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);