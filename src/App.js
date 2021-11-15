
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Banner from './Component/Banner/Banner';
import AuthProvider from './Component/Context/AuthProvider';
import PrivateRoute from './Component/Context/PrivateRoute';
import Dashboard from './Component/Dashboard/Dashboard';
import AddProducts from './Component/Dashboard/DashBoardPages/AddProducts';
import AddReview from './Component/Dashboard/DashBoardPages/AddReview';
import MyOrder from './Component/Dashboard/DashBoardPages/MyOrder';
import Pay from './Component/Dashboard/DashBoardPages/Pay';
import Explore from './Component/Explore/Exlpore';



import FAQ from './Component/FAQ/FAQ';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Productadd from './Component/Productadd';
import Purchase from './Component/Purchase/Purchase';
import Review from './Component/Review/Review';

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

            <PrivateRoute path='/explore'>
              <Explore></Explore>
            </PrivateRoute>


            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/pay'>
              <Pay></Pay>
            </Route>


            <Route path='/dashboard'>
              <Dashboard></Dashboard>

            </Route>
            <Route path='/purchase/:id'>
              <Purchase></Purchase>
            </Route>

            <Route path='/review'>
              <Review></Review>

            </Route>
            <Route path='/faq'>
              <FAQ></FAQ>
            </Route>
            <Route path='/myorder'>
              <MyOrder></MyOrder>
            </Route>
            <Route path='/addProducts'>
              <Productadd></Productadd>
            </Route>

            <Route path='/addreview'>
              <AddReview></AddReview>

            </Route>

          </Switch>






          <Footer></Footer>


        </Router>


      </AuthProvider>

    </div>
  );
}

export default App;
