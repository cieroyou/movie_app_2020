import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./components/Navigation"
import './App.css'


function App(){
  return( 
  <HashRouter>
    {/* Navigation.js에 Link를 사용했으므로 HashRouter 안에 Navigation 컴포넌트가 존재해야한다. */}
    <Navigation/>
    {/* exact = {true} 를 추가함으로써, /about 라우트 렌더링시 Home 까지 같이 두개가 렌더링 되는 문제를 해결 */}
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
  </HashRouter>
  )
}

export default App;