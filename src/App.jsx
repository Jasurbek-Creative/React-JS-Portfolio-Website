import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import NewAbout from "./components/newAbout/NewAbout";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import NewContact from "./components/newContact/NewContact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Header />
      <Nav />
      <NewAbout />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <NewContact />
      <Footer />
      <h1>The End</h1>
      <h5>Jasic Author</h5>
    </>
  );
};

export default App;
