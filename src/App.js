import React from 'react';
import SignIn from './Components/Login/SignIn'
import Header from './Components/Header/Header'
import MenuNavActivity from './Components/Menu-Navigation/MenuNavActivity'
import Dashboard from './Components/Dashboard/Dashboard'
import Promotions from './Components/Promotions/Promotions'


function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
          <MenuNavActivity />
          <Dashboard />
          <Promotions />
      </div>
      {/*<SignIn />*/}
    </div>
  );
}

export default App;
