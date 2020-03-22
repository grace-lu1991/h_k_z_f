import React,{Component} from 'react';
import {HashRouter as Router,Route,Redirect } from 'react-router-dom';
import Home from "./pages/home";
import MapFound from "./pages/mapFound";
import CitySelect from "./pages/citySelect";
class App extends Component {
  state = {  }
  render() { 
    return ( 
<div className='App'>
 <Router>
   {/* {home页下面是tabbar的四个页面} */}
   <Route component={Home} path="/home"></Route>
   <Route path='/' exact>
     {/* {重定向} */}
     <Redirect to='/home'></Redirect>
   </Route>
   <Route component={MapFound} path="/mapFound" exact></Route>
   <Route component={CitySelect} path="/citySelect" exact></Route>
 </Router>
</div>
     );
  }
}
 
export default App;


