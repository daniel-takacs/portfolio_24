import React from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <section className="bg-neutral-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center space-y-4 border-neutral-300">
      <p className="text-neutral-800 text-lg md:text-2xl font-semibold">
        Ready to bring your ideas to life? <br className="sm:block hidden" />
        Discover how we can create something extraordinary together.
      </p>
      <Link to="/contact" className="btn inline-block bg-neutral-50 text-neutral-900 font-bold py-2 px-6 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out">
        Reach Out
      </Link>
    </section>
  );
};

export default Connect;
