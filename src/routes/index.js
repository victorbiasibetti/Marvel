import React from 'react';
import { Switch, Route} from 'react-router-dom'

import App from '../pages/app'
import Char from '../pages/char'

export default function Routes() {
  return (
    <Switch>
      <Route  path="/" exact component={App}/>
      <Route  path="/char/:id" component={Char}/>
    </Switch>
  );
}
