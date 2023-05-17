
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Banner from './Component/Banner/Banner';
import Contact from './Component/ContactUs/Contact';
import AuthProvider from './Component/Context/AuthProvider';
import PrivateRoute from './Component/Context/PrivateRoute';
import Dashboard from './Component/Dashboard/Dashboard';
import AddProducts from './Component/Dashboard/DashBoardPages/AddProducts';
import AddReview from './Component/Dashboard/DashBoardPages/AddReview';
import MakeAdmin from './Component/Dashboard/DashBoardPages/MakeAdmin';
import ManageOrders from './Component/Dashboard/DashBoardPages/ManageOrders';
import ManageProduct from './Component/Dashboard/DashBoardPages/ManageProduct';
import MyOrder from './Component/Dashboard/DashBoardPages/MyOrder';
import Pay from './Component/Dashboard/DashBoardPages/Pay';
import DeliveryStatus from './Component/DeliveryStatus/DeliveryStatus';
import Explore from './Component/Explore/Exlpore';
import FAQ from './Component/FAQ/FAQ';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
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

            <Route path='/Register'>
              <Register></Register>
            </Route>


            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>

            </PrivateRoute>
            <Route path="/purchase/:productId">
              <Purchase></Purchase>
            </Route>
            <Route path="/contactUs">
              <Contact></Contact>

            </Route>

            <Route path='/review'>
              <Review></Review>

            </Route>

            <Route path="/manageProducts">
              <ManageProduct></ManageProduct>
            </Route>

            <Route path="/manageOrders">
              <ManageOrders></ManageOrders>

            </Route>
            <Route path='/faq'>
              <FAQ></FAQ>
            </Route>
            <Route path='/myorder'>
              <MyOrder></MyOrder>
            </Route>
            <Route path='/deliverystatus/:OrderId'>
              <DeliveryStatus></DeliveryStatus>

            </Route>
            <Route path='/addProducts'>
              <Productadd></Productadd>
            </Route>

            <Route path='/admin'>
              <MakeAdmin></MakeAdmin>
            </Route>

            <Route path='/addreview'>
              <AddReview></AddReview>

            </Route>


          </Switch>


          {/* <Subscriber></Subscriber> */}



          <Footer></Footer>


        </Router>


      </AuthProvider>

    </div>
  );
}

export default App;
