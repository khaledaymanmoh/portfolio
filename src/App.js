//Style Sheet
import './App.css';
//Libraries
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"
//Components
import About from './pages/About';
import MyWork from './pages/MyWork';
import Contacts from './pages/Contacts';
import Nav from './components/Nav';
//Used color palette https://colorhunt.co/palette/144399
function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <About />
          </Route>
          <Route path='/work'>
            <MyWork />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
