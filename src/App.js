
// function App() {
//   return (
//      <div>Helloo</div>
//   );
// }

 
// export default App;


 
// import Signup from './components/Signup'
// import Login from './components/Login';
import {useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Admin from './components/Admin';
import Calender from './components/Calender';
// import Calender2 from './components/Calender2';
// import {AuthProvider, AuthContext} from './context/AuthContext'
// import PrivateRoute from './components/PrivateRoute';
// import Profile from './components/Profile';


function App() {
  // const { currentUser } = useContext(AuthContext);
  return (
    // <Router>
    //   {/* <AuthProvider> */}
    //     <Switch>
    //         {/* <Route path="/" component={Login}/>
    //         <Route path="/signup" component={Signup}/> */}
            
            
    //         {/* <PrivateRoute path="/profile/:id" component={Profile}/>
    //         <PrivateRoute path="/" component={Feed}/> */}
    //   </Switch>
    //   {/* </AuthProvider> */}
     
    // </Router>
    // <Admin/>
    <Admin/>
    

  );
}

export default App;
