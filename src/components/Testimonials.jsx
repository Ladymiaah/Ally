function Testimonials() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 mt-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-6 text-center md:text-left">
        <h1 id="testimonial" className="text-2xl sm:text-3xl font-bold">
          Testimonials
        </h1>
        <p className="text-sm sm:text-base">
          Don't take our word for it - hear from our satisfied clients who have
          experienced the transformative impact of our AI text tool.
        </p>
        <p className="text-sm sm:text-base">
          Learn how this powerful tool has revolutionized their work and
          accelerated their success.
        </p>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row gap-6">
        <div className="bg-[#bbf99c] rounded-2xl py-6 px-6 sm:px-8 text-base sm:text-lg flex-1">
          <p>
            "The excellent voice recognition quality of AI Ally app makes it
            perfect for dictation and note taking. I have never come across such
            accuracy before"
          </p>
          <img src="images/avatar.png" alt="avatar" className="mt-5" />
        </div>

        <div className="bg-[#cbbafc] rounded-2xl py-6 px-6 sm:px-8 text-base sm:text-lg flex-1">
          <p>
            "With the help of AI Ally, my work has become much easier and
            efficient. It provides quick and accurate answers to any questions I
            come across"
          </p>
          <img src="images/avatar1.png" alt="avatar1" className="mt-5" />
        </div>

        <div className="bg-[#B3E5FC] rounded-2xl py-6 px-6 sm:px-8 text-base sm:text-lg flex-1">
          <p>
            "I love how AI Ally personalizes to my needs and offers
            recommendations and solutions based on my preferences and behaviors"
          </p>
          <img src="images/avatar2.png" alt="avatar2" className="mt-5" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
