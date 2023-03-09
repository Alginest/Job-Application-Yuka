import { Container, CssBaseline } from "@material-ui/core";

import "./App.css";
import Footer from "./components/Footer/Footer";
// Components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MobileHead from "./components/MobileHead/MobileHead";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <Header />
      <MobileHead />
      <Hero />
      <Container>
        <Shop />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
