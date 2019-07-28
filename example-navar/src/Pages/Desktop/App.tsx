import * as React from 'react';

import { cssin } from '../../cssin';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const App: React.FC<IProps> = () => {
  return (
    <div className={cssin`center! h=100vh`}>
      <h2>App</h2>
    </div>
  );
};
