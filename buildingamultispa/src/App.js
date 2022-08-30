import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';



function App() {

  return (
    <Layout>
      <Switch>

        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>


        <Route exact path="/quotes" >
          <AllQuotes />
        </Route>

        <Route path="/quotes/:quoteId" >
          <QuoteDetail />
        </Route>

        <Route path="/new-quote" >
          <NewQuote />
        </Route>
        {/* lezem nheta ekher shi deyman */}
        {/* /:quoteId  or  * */}
        <Route path="*" >
          <NotFound />
        </Route>


      </Switch>
    </Layout>
  );
}

export default App;






