
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './Component/Banner/Banner';
import AuthProvider from './Component/Context/AuthProvider';
import PrivateRoute from './Component/Context/PrivateRoute';

import Purchase from './Component/Explore/Purchase';

import FAQ from './Component/FAQ/FAQ';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="App">

      <AuthProvider>


        <Router>

          <Header></Header>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/topbanner'>
              <Banner></Banner>
            </Route>

            <PrivateRoute path='/purchase'>
              <Purchase></Purchase>
            </PrivateRoute>


            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/faq'>
              <FAQ></FAQ>
            </Route>

          </Switch>





          <Footer></Footer>


        </Router>


      </AuthProvider>

    </div>
  );
}

export default App;
