import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Welcome from './pages1/Welcome';
import Products from './pages1/Products';
import MainHeader from './components1/MainHeader';
import ProductDetail from './pages1/ProductDetail';

function App() {
  return (
    <div>

      <header>
        <MainHeader />
      </header>


      <main>
        <Switch>
          <Route path="/welcome" >
            <Welcome />
          </Route>

          <Route path="/products" exact >
            <Products />
          </Route>

          {/* dynamic segment :productId */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>

        </Switch>
      </main>


    </div>

  );
}

export default App;
