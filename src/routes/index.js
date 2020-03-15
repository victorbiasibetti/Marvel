import React from 'react';
import { Switch, Route} from 'react-router-dom'

import App from '../pages/App'
import Char from '../pages/Char'

export default function Routes() {
  return (
    <Switch>
      <Route  path="/" exact component={App}/>
      <Route  path="/char/:id" component={Char}/>
    </Switch>
  );
}
