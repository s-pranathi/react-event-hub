import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
