import React from 'react';
import ReactDOM from 'react-dom';

import { If } from './condition';
import { Unless } from './condition';

const App = () => {
  return (
    <React.Fragment>
      <div>
        <code>
          {`
            <If condition={true}>
              This is true!
            </If>
          `}
        </code>
        <If condition={true}>
          This is true!
        </If>
      </div>
      <div>
        <code>
          {`
            <If condition={false}>
              This is false!
            </If>
          `}
        </code>
        <If condition={false}>
          This is falsey!
        </If>
      </div>
      <div>
        <code>
          {`
            <Unless condition={true}>
              This is true!
            </Unless>
          `}
        </code>
        <Unless condition={true}>
          This is true!
        </Unless>
      </div>
      <div>
        <code>
          {`
            <Unless condition={false}>
              This is false!
            </Unless>
          `}
        </code>
        <Unless condition={false}>
          This is falsey!
        </Unless>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);