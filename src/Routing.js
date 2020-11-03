import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import Meditate from './Meditate/Meditate';
import Diary from './Diary/Diary';



function Routing(props){
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/diary">
                <Diary/>
            </Route>
            <Route path="/meditate">
                <Meditate/>
            </Route>
        </Switch>
    )
}

export default Routing;