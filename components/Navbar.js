"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to check the scroll position and set isScrolled state
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamically construct the class name based on the isScrolled state
  const navClassName = `inset-x-0 top-0 z-30 w-full transition-all ${
    isScrolled
      ? "fixed border-b border-gray-200 bg-white/75 backdrop-blur-lg"
      : ""
  }`;

  return (
    <nav>
      <div className={navClassName}>
        <div className="mx-auto w-full max-w-screen-xl px-4 px-3 py-2">
          <div className="flex h-14 items-center justify-between">
            <a href="/">
              <Image
                src="/hyremi_logo.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "90px", height: "100%" }} // optional
                alt="hyremi_logo"
              />
            </a>

            <a href="https://tally.so/r/3xjo7G" target="_blank">
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
              >
                Join Waitlist
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
