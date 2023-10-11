import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventScreen from "./screens/EventScreen";
import CartScreen from './screens/CartScreen';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path='/' exact element={<HomeScreen/>}/>
              <Route path='/login' element={<p>Login Screen</p>}/>
              <Route path='/cart' element={<p>Cart Screen</p>}></Route>
              <Route path='/event/:id' element={<EventScreen/>}></Route>
              <Route path="/cart/:id" element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
