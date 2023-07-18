import logo from './logo.svg';
import './App.css';
import Layout
 from './components/Layout';
import { BrowserRouter as Router , Route , Routes , Navigate } from 'react-router-dom';
import Home from './containers/home'
import Signin from './containers/signin';
import SignUp from './containers/signup'
import Products from './containers/products'
import Orders from './containers/orders'
import PrivateRoute from './components/HOC/privateRoute';
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './redux/actions/auth';
function App() {
  const dispatch = useDispatch()
  const {auth} = useSelector(state=>state)

  useEffect(()=>{
    if(!auth?.authenticate){
      dispatch(isUserLoggedIn())
    }
  },[])


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' extact element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
