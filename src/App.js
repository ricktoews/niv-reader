import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import Main from './Main';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/:param_book/:param_chapter" component={Main} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default withRouter(App);
