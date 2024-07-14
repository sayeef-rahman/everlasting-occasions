import "./App.css";
import { HeroSection } from "./modules/HeroSection";
// import { Header } from "./modules/NavBar";
import { Overview } from "./modules/Overview";

function App() {
  return (
    <div className="bg-[#F2F2F2] w-full mx-auto">
      {/* <Header /> */}
      <HeroSection />
      <Overview />
    </div>
  );
}

export default App;
