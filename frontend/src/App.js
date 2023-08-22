import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header/>
        <main>
          <Container>
            Welcome to Event Hub!
          </Container>
        </main>
      <Footer/>  
    </>
  );
}

export default App;
