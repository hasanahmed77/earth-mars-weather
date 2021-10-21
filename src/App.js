import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Flex } from "@chakra-ui/react";
import Home from './components/ui/Home';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Flex 
        height="100vh" 
        idth="100%"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>    

        </Switch>
      </Flex>
    </Router>

  );
}

export default App;
