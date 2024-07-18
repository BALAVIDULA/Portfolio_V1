import About from "./components/About";
//import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="overflow-hidden relative">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
      {/*<div className="fixed bottom-0 right-0">
        <Chatbot />
      </div>*/}
    </div>
  );
}

export default App;
