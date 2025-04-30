import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faBolt,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="bg-[#1a1818] rounded-2xl shadow-lg pt-20 pb-10 px-4 sm:px-10 mt-10">
      <h1 className="font-bold text-3xl sm:text-4xl text-white text-center sm:text-left">
        Choose your favorite plan
      </h1>

      {/* Subscription level section — hidden on mobile */}
      <div
        id="pricing"
        className="hidden sm:flex justify-between items-center bg-[#252323] text-white rounded-2xl p-6 mt-8"
      >
        <h1 className="text-xl w-auto">Subscription level</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-[#bbf99c] text-black rounded-xl px-4 py-2">
            <span className="font-medium">Basic</span>
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <div className="flex items-center gap-2 bg-[#cbbafc] text-black rounded-xl px-4 py-2">
            <span className="font-medium">Advanced</span>
            <FontAwesomeIcon icon={faBolt} />
          </div>
          <div className="flex items-center gap-2 bg-[#ebcb7c] text-black rounded-xl px-4 py-2">
            <span className="font-medium">Premium</span>
            <FontAwesomeIcon icon={faCrown} />
          </div>
        </div>
      </div>

      {/* Mobile view: individual cards */}
      <div id="pricing" className="sm:hidden mt-6 grid gap-6">
        {/* Basic */}
        <div className="bg-[#252323] p-5 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-3 bg-[#bbf99c] text-black w-fit px-4 py-2 rounded-lg">
            <span className="font-semibold">Basic</span>
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <p>
            Number of Users: <strong>1</strong>
          </p>
          <p>
            Customer Support: <strong>Online</strong>
          </p>
          <p>
            Monthly Requests: <strong>1000</strong>
          </p>
          <p>
            Data Packages: <strong>1 GB</strong>
          </p>
          <p>
            Flexible Cancellation: <strong>Available</strong>
          </p>
          <p className="text-xl font-bold mt-3">$9.99</p>
        </div>

        {/* Advanced */}
        <div className="bg-[#252323] p-5 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-3 bg-[#cbbafc] text-black w-fit px-4 py-2 rounded-lg">
            <span className="font-semibold">Advanced</span>
            <FontAwesomeIcon icon={faBolt} />
          </div>
          <p>
            Number of Users: <strong>Up to 5</strong>
          </p>
          <p>
            Customer Support: <strong>Priority</strong>
          </p>
          <p>
            Monthly Requests: <strong>5000</strong>
          </p>
          <p>
            Data Packages: <strong>5 GB</strong>
          </p>
          <p>
            Flexible Cancellation: <strong>Available</strong>
          </p>
          <p className="text-xl font-bold mt-3">$19.99</p>
        </div>

        {/* Premium */}
        <div className="bg-[#252323] p-5 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-3 bg-[#ebcb7c] text-black w-fit px-4 py-2 rounded-lg">
            <span className="font-semibold">Premium</span>
            <FontAwesomeIcon icon={faCrown} />
          </div>
          <p>
            Number of Users: <strong>Unlimited</strong>
          </p>
          <p>
            Customer Support: <strong>Premium</strong>
          </p>
          <p>
            Monthly Requests: <strong>Unlimited</strong>
          </p>
          <p>
            Data Packages: <strong>10 GB</strong>
          </p>
          <p>
            Flexible Cancellation: <strong>Available</strong>
          </p>
          <p className="text-xl font-bold mt-3">$39.99</p>
        </div>
      </div>

      {/* Desktop/tablet view: comparison table */}
      <div className="hidden sm:block mt-10 overflow-x-auto">
        <div className="min-w-[700px] divide-y divide-[#333] text-white text-sm sm:text-base">
          {[
            ["Number of Users", "1", "Up to 5", "Unlimited"],
            ["Customer Support", "Online", "Priority", "Premium"],
            ["Monthly Requests", "1000", "5000", "Unlimited"],
            ["Data Packages", "1 GB", "5 GB", "10 GB"],
            ["Flexible Cancellation", "Available", "Available", "Available"],
            ["Monthly Cost", "$9.99", "$19.99", "$39.99"],
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-4 py-4 px-2">
              {row.map((col, i) => (
                <p
                  key={i}
                  className={`${i === 0 ? "text-left" : "text-center"} ${
                    idx === 5 && i !== 0 ? "text-xl font-bold" : ""
                  }`}
                >
                  {col}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-10 py-16">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Try it right now
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
          Download the AI Ally on the AppStore and Google Play
          <br className="hidden sm:block" />
          and discover the world of artificial intelligence! Enjoy
          <br className="hidden sm:block" />
          innovative AI technologies directly on your device.
        </p>
        <img
          src="images/avatar3.png"
          alt="avatar"
          className="mt-8 w-40 sm:w-48 md:w-56 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Footer;
