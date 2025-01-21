import Footer from "./Footer";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

const Home = () => {
  return (
    <>
      <main className="main">
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
};
export default Home;
