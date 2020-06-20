import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';


function Routes(){
    return (
    <Router>
      <div>
        <Switch>
           <Route path="/" component = {Home} />
           <Route path="/tutorials/" component={About} />
        </Switch>
      </div>
    </Router>
    )
}