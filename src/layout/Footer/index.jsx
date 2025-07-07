import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Company
            </h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Brand Center</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Help Center
            </h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:underline">Discord Server</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Legal
            </h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Licensing</a></li>
              <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Download
            </h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:underline">iOS</a></li>
              <li><a href="#" className="hover:underline">Android</a></li>
              <li><a href="#" className="hover:underline">Windows</a></li>
              <li><a href="#" className="hover:underline">MacOS</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between border-t pt-6 text-sm text-gray-500 dark:text-gray-300 md:flex-row md:pt-8">
          <span>
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-5 md:mt-0">
            {/* Replace with actual SVGs or icon components */}
            <a href="#" className="hover:text-gray-900 dark:hover:text-white text-gray-400" aria-label="Facebook">FB</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white text-gray-400" aria-label="Discord">DC</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white text-gray-400" aria-label="Twitter">TW</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white text-gray-400" aria-label="GitHub">GH</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white text-gray-400" aria-label="Dribbble">DR</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
