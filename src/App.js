import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import CreateUser from './Components/CreateUser';
import { AbilityContext } from './Components/Abilities';
import { createMongoAbility } from '@casl/ability';

const ability = new createMongoAbility();

const App = () => {

  return (
    <AbilityContext.Provider value={ability}>
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route exact path='/login' element={<Login ability={ability}/>}/>
              <Route exact path='/' element={<Dashboard/>}/>
              <Route exact path='/create-user' element={<CreateUser/>}/>
          </Routes>
      </BrowserRouter>
    </AbilityContext.Provider>
  )
}

export default App
