import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Route, Switch,Redirect } from 'react-router';
import Footer from './Footer';


import Home from './Home';

import Services from './Services';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

   

const App=()=> {
  return (
    <>


      
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Services" component={Services}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect to='/' />
        <Footer/>
    
         






          
        
        </Switch>
      </>
  );
}

export default App;
