import React from 'react';
import Layout from './hoc/layout';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/home';
const Routes = () =>{
  return (
    <Layout>
        <Switch>
          <Route exact component={Home} path="/" />
        </Switch>
    </Layout>
  )

}

export default Routes;
