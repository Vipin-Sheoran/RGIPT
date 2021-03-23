import React from 'react';
import './App.css';
import Header from './Header'
import Body from './Body'
import Timetable from 'timetable-generator'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import B2chemicals from './B2chemicals'
import B2petroleums from './B2petroleums'
import Chepreview from './Chepreview'
import B3chemicals from './B3chemicals'
import B3petroleums from './B3petroleums'
import B4chemicals from './B4chemicals'
import B4petroleums from './B4petroleums';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/chepreview'>
        <Header/>
        <Chepreview/>
        </Route>

      <Route path='/btech2chemical'>
       <Header/>
       <B2chemicals/>
     </Route>

     <Route path='/btech3chemical'>
       <Header/>
       <B3chemicals/>
     </Route>

     <Route path='/btech4chemical'>
       <Header/>
       <B4chemicals/>
     </Route>

     <Route path='/btech4petroleum'>
       <Header/>
       <B4petroleums/>
     </Route>

     <Route path='/btech3petroleum'>
       <Header/>
       <B3petroleums/>
     </Route>

     <Route path='/btech2petroleum'>
       <Header/>
       <B2petroleums/>
     </Route>

      <Route path='*'>
     <Header/>
     <Body/>
     </Route>

     
     </Switch>
    </div>
    </Router>
  );
}

export default App;
