import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <div className="mt-20 px-4 sm:px-6 md:px-10 py-10">
      <h1
        id="features"
        className="font-bold text-3xl md:text-4xl text-center md:text-left"
      >
        Different Destinations
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between gap-6 mt-6 text-center md:text-left">
        <p className="md:w-1/3">
          We explore the diverse ways in which this
          <br className="hidden md:block" />
          technology can revolutionize work across
          <br className="hidden md:block" />
          various industries and fields.
        </p>

        <p className="md:w-1/3">
          Discover how AI can streamline processes
          <br className="hidden md:block" />
          and elevate your work to new heights.
        </p>

        <div className="md:w-1/3 flex items-center justify-center md:justify-end gap-2 cursor-pointer">
          <p>Discover all applications</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-10">
        <div className="text-center md:text-left max-w-sm">
          <img
            src="images/student.png"
            alt="student"
            className="mx-auto md:mx-0 w-40 md:w-48"
          />
          <h1 className="font-bold text-xl mt-4">Students</h1>
          <p className="mt-2 text-gray-700">
            AI Ally can assist in research, provide learning materials and
            answer questions.
          </p>
        </div>

        <div className="text-center md:text-left max-w-sm">
          <img
            src="images/professionals.png"
            alt="professionals"
            className="mx-auto md:mx-0 w-40 md:w-48"
          />
          <h1 className="font-bold text-xl mt-4">Professionals</h1>
          <p className="mt-2 text-gray-700">
            AI Ally can provide quick access to relevant information and offer
            quick data analysis insight.
          </p>
        </div>

        <div className="text-center md:text-left max-w-sm">
          <img
            src="images/writer.png"
            alt="writer"
            className="mx-auto md:mx-0 w-40 md:w-48"
          />
          <h1 className="font-bold text-xl mt-4">Writers</h1>
          <p className="mt-2 text-gray-700">
            AI Ally can help writers by generating ideas and suggesting
            improvements in writing style.
          </p>
        </div>
      </div>
      <button className="flex items-center justify-center cursor-pointer mx-auto mt-10 gap-4 bg-[#66FF66] py-3 px-6 rounded-full text-black text-sm sm:text-lg">
        And more than 50 other destinations
      </button>
    </div>
  );
}

export default Features;
