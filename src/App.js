import logo from './logo.svg';
import './App.css';
import Contact from './componement/Contact';
import {useHistory,BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ListeContact from './componement/ListeContact';
import ViewContact from './componement/ViewContact';

function App() {
  return (
    <Router>
    <div className="App">
     
     <Switch>
    
      <Route exact path = "/list">
        <ListeContact />
      </Route>
      <Route path="/voir/:id" render={(props) =>  <ViewContact {...props} />}>
        </Route>
        <Route exact path = "/">
        <Contact />
         </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
