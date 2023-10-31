import React from "react";

import heroBackground from "../Assets/img1.jpg";
import about from "../Assets/about.jpg";
import cardio from "../Assets/cardio.jpg";
import strength from "../Assets/Strenght.jpg";
import bot from "../Assets/bootcamp.jpg";
import { useState } from "react";

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="min-h-screen bg-black
    "
    >
      <nav className=" border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="text-3xl font-bold text-green-700">
            SLAM
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen}
            onClick={handleToggleClick}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0   ">
              <li>
                <a
                  href="#"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover-bg-white hover-text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="#service"
              className="text-gray-300 hover-bg-white hover-text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Service
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover-bg-white hover-text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div
          className="absolute inset-0 bg-black
         opacity-50"
        ></div>
        <div className="container mx-auto text-left relative z-10 ">
          <h1 className="text-3xl text-green-700 font-extrabold mb-2 ml-8 mt-8">
            Your Dream Body is One Workout Away
          </h1>
          <p className="text-xl text-white font-semibold mb-4 ml-36 mt-4">
            Beginner--Master
          </p>
          <a
            href="#"
            className="bg-green-700 text-black py-2 px-6 mt-8 ml-40 rounded-full text-lg hover:bg-yellow-600"
          >
            Join Us
          </a>
        </div>
      </header>

      {/* About Section */}
      <section
        className="bg-black
       py-16"
        id="about"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10">
            <img
              src={about}
              alt="About"
              className="max-w-full rounded-md shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <h2 className="text-4xl text-white font-bold mb-4">
              We Provide the Best Quality
              <br />
              Services Ever
            </h2>
            <p className="text-white mb-6">
              Welcome to <span className="text-green-700 font-bold">SLAM</span>{" "}
              Fitness Center, where fitness meets passion and dedication. Our
              state-of-the-art facility is designed to empower individuals of
              all fitness levels on their journey to a healthier, stronger self.
              With a commitment to excellence, our experienced trainers provide
              personalized guidance and support, ensuring you reach your fitness
              goals effectively and safely. Whether you're looking to shed a few
              pounds, build muscle, or improve your overall well-being, Slam
              Fitness Center is the place where transformations happen.
            </p>
            <a
              href="#"
              className="bg-green-700 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      {/* Service Section */}
      <section
        className="bg-black
       py-16"
        id="service"
      >
        <div className="container mx-auto">
          <div className="text-center pb-8">
            <h2 className="text-4xl text-white font-bold">Our Services</h2>
            <p className="text-white mt-1 ">
              At <span className="text-green-700 font-bold">SLAM</span> Fitness
              Center, we offer a diverse range of training options to cater to
              your fitness needs, from cardio to strength, and Bootcamp – we've
              got you covered
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="bg-white pb-2 text-center rounded-md shadow-lg shadow-white">
              <div className="text-dark p-8">
                <div className="mb-4">
                  <img
                    src={cardio}
                    alt="Construction"
                    className="w-96 h-64 mx-auto rounded-md"
                  />
                </div>
                <h3 className="text-2xl text-black font-semibold">Cardio</h3>
                <p className="text-black">
                  Cardio workouts at Slam Fitness Center boost stamina and heart
                  health. Burn calories, improve endurance, and enjoy dynamic,
                  heart-pumping sessions with our expert trainers
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="bg-green-700 text-white mt-2 py-2 px-6 rounded-full text-lg hover:bg-yellow-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white pb-2 text-center rounded-md shadow-lg shadow-white">
              <div className="text-dark p-8">
                <div className="mb-4">
                  <img
                    src={strength}
                    alt="Interior Design"
                    className="w-96 h-64 mx-auto rounded-md"
                  />
                </div>
                <h3 className="text-2xl text-black font-semibold">
                  Strength Training
                </h3>
                <p className="text-black">
                  Experience muscle-building results with strength training at
                  Slam Fitness Center. Our tailored programs help you gain
                  strength, tone your body, and achieve your fitness goals.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="bg-green-700 text-black mt-2 py-2 px-6 rounded-full text-lg hover:bg-yellow-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="bg-white
             pb-2 text-center rounded-md shadow-lg shadow-white"
            >
              <div className="text-dark p-8">
                <div className="mb-4">
                  <img
                    src={bot}
                    alt="Flat Promoters"
                    className="w-96 h-64 mx-auto rounded-md"
                  />
                </div>
                <h3 className="text-2xl text-black font-semibold">
                  Bootcamp Training
                </h3>
                <p className="text-black">
                  Unleash your inner warrior with Slam Fitness Center's Bootcamp
                  training. Join our high-intensity, results-driven sessions for
                  a full-body transformation and improved endurance
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="bg-green-700 text-black  py-2 px-6 rounded-full text-lg hover:bg-yellow-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="bg-black
       py-16"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white font-bold mb-6">Contact Us</h2>
          <p className="text-white text-lg mb-8">
            Contact us today to book your membership and take the first step
            towards a healthier, stronger you. Our team is here to assist you
            every step of the way
          </p>
          <form
            action="#"
            className="bg-white rounded-lg p-6 shadow-lg mx-auto max-w-screen-md"
          >
            <div className="mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-yellow-500"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-yellow-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                rows="3"
                className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-yellow-500"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <a
              href="#"
              className="bg-green-700 text-black  py-2 px-6 rounded-full text-lg hover:bg-yellow-600"
            >
              Send Now
            </a>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-green-700">All Right Reserved By @www.slam.com</p>
        </div>
      </footer>
    </div>
  );
}
