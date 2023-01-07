import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./styles/app.scss"
import User from "./pages/User/User";
import UserDetails from "./pages/User/UserDetails";

import {UserProvider} from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Login/> }/>
        <Route exact path='/dashboard' element ={<User/>}/>
        <Route path='/users' element ={<User/>}/>
        <Route path='/users/:id' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
