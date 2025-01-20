import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

function App() {
  return (
    <>
      <Nav />
      <main className="main">
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
