import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
      <div className="custom-hero-gradient p-4 sm:p-6 md:p-8 shadow-lg max-w-7xl w-full rounded-lg md:rounded-xl">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
