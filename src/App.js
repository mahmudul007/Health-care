
import './App.css';
import Uppernav from './pages/Header/Uppernav';
import Header from './pages/Header/Header';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Mainfile from './pages/Home/Main/Mainfile';
import Services from './pages/Home/Services/Services';
import About from './pages/AboutUs/About';
import Notfound from './pages/Notfound/Notfound';
import Doctors from './pages/Home/Doctors/Doctors';
import Login from './pages/Home/Profile/Login';
import AuthProvider from './context/AuthProvider';
import Footer from './pages/Footer/Footer';
import Booking from './pages/Booking/Booking';
import Private from './PrivateRoute/Private';
import Care from './pages/Home/Patientcare/Care';
import Singleservice from './pages/Home/Services/Singleservice';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Uppernav></Uppernav>
          <Header></Header>


          <Switch>
            <Route exact path="/">
              <Mainfile></Mainfile>

            </Route>
            <Route path="/home">
              <Mainfile></Mainfile>
              <Footer></Footer>

            </Route>

            <Route path="/service">
              <Services></Services>
            </Route>


            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/doctor">
              <Doctors></Doctors>


            </Route>
            <Private path="/booking">
              <Booking></Booking>
            </Private>
            <Private path="/care">
              <Care></Care>
            </Private>
            <Route exact path="/single/:id">
              <Singleservice>
              </Singleservice>
            </Route>

            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>



        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
