import React from "react";
//components
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Testimony from "./components/Testimonial/Testimony"
import Why from "./components/Why/Why"
import Team from "./components/Team/Team"
import Contact from "./components/Contact/Contact"
import Blog from "./components/Blog/Blog"
import Project from "./components/Project/Project"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
      <Header /> 
      <Banner />
      <About />
      <Services />
      <Testimony />
      <Why />
      <Team />
      <Contact />
      <Blog />
      <Project />
      <Footer />
    </>
  );
}

export default App;
