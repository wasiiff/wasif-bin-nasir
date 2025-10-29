"use client";

import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Preloader text="W" theme="dark" />
      ) : (
        <>
          <NavBar />
          <Home />
          <SocialLinks
        links={[
          { platform: "linkedin", href: "https://www.linkedin.com/in/wasif-bin-nasir/" },
          { platform: "github", href: "https://github.com/wasiiff" },
          { platform: "instagram", href: "https://www.instagram.com/whoiswasiff._/" },
          { platform: "x", href: "https://x.com/wasiiff_" },
          { platform: "mail", href: "mailto:wasifbinnasir@gmail.com" },
        ]}
        showOnMobile={true}
        floatingButtonColor="#007bff"
      />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;