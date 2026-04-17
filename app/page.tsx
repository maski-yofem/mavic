import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Cards from "./components/Cards";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Manifesto />
      <Cards />
      <Contact />
      <Footer />
    </>
  );
}
