
import Home from './screens/Home';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import ShopScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route exact path="/">
            {<Redirect to="/rewari" />}
          </Route>
          <Route path="/:city" component={Home} exact></Route>
          <Route path="/:city/:id" component={ShopScreen} exact></Route>
          <Route path="/1/2/product" component={ProductScreen} exact></Route>
          {/* <Route path="/" component={Home} exact></Route> */}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
