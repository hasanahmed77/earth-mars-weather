import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Flex } from "@chakra-ui/react";

import Home from './components/ui/Home';
import Header from './components/Header';
import Earth from './components/ui/Earth';


function App() {
  return (
    <Router>
      <Flex 
        height="100vh" 
        width="100%"
        flexDirection="column"
        overflow="hidden"
      >
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>  

          <Route exact path="/earth">
            <Earth />
          </Route>   

        </Switch>
      </Flex>
    </Router>

  );
}

export default App;
