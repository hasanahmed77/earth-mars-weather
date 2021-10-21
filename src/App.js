import './App.css';
import { Flex } from "@chakra-ui/react";
import Home from './components/ui/Home';
import Header from './components/Header';


function App() {
  return (
    <Flex 
      height="100vh" 
      idth="100%"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Header />
      <Home />
    </Flex>
  );
}

export default App;
