import {
  BrowserRouter as Router, Route, Link, useParams,
  Switch
} from 'react-router-dom';

import './App.css';
import Services from './Components/Services/Services';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Login from './Components/Login/Login';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Readmore from './Components/Readmore/Readmore';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/Services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute exact path="/readmore">
              <Readmore></Readmore>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
