import React, { Component , createContext , useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

export const ContextForDashboard = createContext([]);
export const ContextForUserInfo = createContext([]);

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500')); 

// class App extends Component {
  
//   render() {

//     return (
      
      
//     );
//   }
// }

// export default App;

const App = () => {
  const [dashboardBeSetToDefaultOrNot,setDashboardBeSetToDefaultOrNot] = useState(true);
  const [userEmail,setUserEmail] = useState("");
  const [userPassword,setUserPassword] = useState("");
  const [userName,setUserName] = useState("");
  const [userJob,setUserJob] = useState("");
  const [autofillUserData,setAutofillUserData] = useState(false);
  return (   
    <div>
      <ContextForUserInfo.Provider value={[[autofillUserData,setAutofillUserData],[userName,setUserName],[userJob,setUserJob],[userEmail,setUserEmail],[userPassword,setUserPassword]]}>
        <ContextForDashboard.Provider value={[dashboardBeSetToDefaultOrNot,setDashboardBeSetToDefaultOrNot]}>  
          <HashRouter>
              <React.Suspense fallback={loading}>
                <Switch>
                  <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                  <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
                  <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                  <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
                  <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
                </Switch>
              </React.Suspense>
          </HashRouter>
        </ContextForDashboard.Provider>
      </ContextForUserInfo.Provider>
    </div>
  );
};

export default App;