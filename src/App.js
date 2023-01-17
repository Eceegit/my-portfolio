import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import SocialIcons from "./components/SocialIcons";


function App() {
  return (
      <div>
        <Navigation />/
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialIcons />
      </div>
  );
}

export default App;
