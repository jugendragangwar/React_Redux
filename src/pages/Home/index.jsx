import { FaFacebookF, FaTwitter, FaPinterestP, FaRedditAlien } from 'react-icons/fa';
import React from 'react';


const index = () => {

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
    <div className="container">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Quick<span className="text-indigo-600">Toolz</span>
          </h2>
          <h3 className="text-xl md:text-3xl mt-10">Coming Soon</h3>
          <p className="text-md md:text-xl mt-10">
            <a className="hover:underline" href="#">Quicktoolz</a> is a website to provide simple
            productivity tools for your daily needs online for free.
          </p>
        </div>

        <div className="flex flex-wrap mt-10 justify-center">
          {/* Facebook */}
          <div className="m-3">
            <a
              href="#"
              title="Quicktoolz On Facebook"
              className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center justify-center"
            >
              <FaFacebookF className="mr-2" />
              Facebook
            </a>
          </div>

          {/* Twitter */}
          <div className="m-3">
            <a
              href="#"
              title="Quicktoolz On Twitter"
              className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center justify-center"
            >
              <FaTwitter className="mr-2" />
              Twitter
            </a>
          </div>

          {/* Pinterest */}
          <div className="m-3">
            <a
              href="#"
              title="Quicktoolz On Pinterest"
              className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center justify-center"
            >
              <FaPinterestP className="mr-2" />
              Pinterest
            </a>
          </div>

          {/* Reddit */}
          <div className="m-3">
            <a
              href="#"
              title="Quicktoolz On Reddit"
              className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-orange-500 hover:bg-orange-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center justify-center"
            >
              <FaRedditAlien className="mr-2" />
              Reddit
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default index;
