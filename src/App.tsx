import React, { Suspense } from "react";
import './App.css';
import Loadable from 'react-loadable';
import Loader from './layout/Loader'
import Aux from "./hoc/_Aux";
import { Switch, Route } from 'react-router-dom';
import routes from "./core/routes";
import ScrollToTop from "./layout/ScrollToTop";

const AdminLayout = Loadable({
  loader: () => import('./layout/AdminLayout'),
  loading: Loader
});

function App() {
  
const menu = routes.map((route, index) => {
    return (route.component) ? (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={props => (
                <route.component {...props} />
            )} />
    ) : (null);
  });
  
  return (
    <Aux>
      <ScrollToTop>
        <Suspense fallback={<Loader/>}>
          <Switch>
            {/* {menu} */}
            <Route path="/" component={AdminLayout} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Aux>
  );
}

export default App;
