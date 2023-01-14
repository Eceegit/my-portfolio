import About from "./components/About";
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
        <SocialIcons />
      </div>
  );
}

export default App;
