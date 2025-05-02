import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function HeroSection() {
  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-10 py-10 bg-white">
      <div className="w-full max-w-7xl rounded-xl">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row custom-gradient-bg rounded-3xl shadow-lg text-white py-10 px-6 sm:px-12 lg:px-20 mt-8 gap-10">
          {/* Text Section */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl font-poppins sm:text-4xl lg:text-5xl font-bold leading-tight">
              Unleash the full Potential of AI
            </h1>
            <p className="mt-4 font-poppins text-base sm:text-lg">
              AI Ally is a versatile assistant that utilizes state-of-the-art
              natural language processing to provide real-time support and
              assistance across various domains.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-6 mt-6">
              <button className="flex items-center justify-center font-poppins cursor-pointer gap-4 bg-[#66FF66] py-3 px-8 rounded-full text-black text-lg sm:text-xl">
                Get the App
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <p className=" font-poppins text-lg sm:text-xl mt-2 sm:mt-0">
                More
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold">4.8</p>
                <p className="text-sm sm:text-base">Rating on Appstore</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">700k+</p>
                <p className="text-sm sm:text-base">Active Users</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center items-center">
            <img
              src="images/image1.png"
              alt="AI Visual"
              className="max-w-full h-auto rounded-lg shadow-lg w-3/4 sm:w-2/3 lg:w-full"
            />
          </div>
        </div>

        {/* Features Section */}
        <Features />
        {/* Testimonial Section */}
        <Testimonials />
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}

export default HeroSection;
