import "./App.css";
import { HeroSection } from "./modules/HeroSection";
import { Overview } from "./modules/Overview";
import { Experience } from "./modules/Overview/Experience";
// import { Header } from "./modules/NavBar";

function App() {
  return (
    <div className="bg-[#F2F2F2] w-full mx-auto">
      {/* <Header /> */}
      <HeroSection />
      <Overview />
      <Experience />
    </div>
  );
}

export default App;
