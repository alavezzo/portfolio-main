import React, { useState } from 'react';
import { VStack } from "@chakra-ui/react"
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';


function App() {

  

  const [home, setHome] = useState(true)

  return (
 
    <Router>
    <VStack minHeight={"100vh"} bg={useColorModeValue('platinum', 'darkPurple')} p={10}>
      <Header home={home} setHome={setHome} />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer home={home} ></Footer>
    </VStack>
    </Router>
  );
}

export default App;
