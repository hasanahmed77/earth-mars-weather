import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Flex } from "@chakra-ui/react";

import Home from './components/ui/Home';
import Header from './components/Header';
import Earth from './components/ui/Earth';
import Mars from './components/ui/Mars';
import Weather from './components/ui/Weather';


function App() {
  return (
    <Router>
      <Flex 
        height="100vh" 
        width="100%"
        flexDirection="column"
        overflow="hidden"
        backgroundColor="white"
      >
        <Header />
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>  

          <Route exact path="/earth">
            <Earth />
          </Route>   

          <Route exact path="/mars">
            <Mars />
          </Route>   

        </Switch>
      </Flex>
    </Router>

  );
}

export default App;
