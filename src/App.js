import logo from './logo.svg';
import './App.css';
import Layout
 from './components/Layout';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './containers/home'
import Signin from './containers/signin';
import SignUp from './containers/signup'
import PrivateRoute from './components/HOC/privateRoute';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' extact element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
