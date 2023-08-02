import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="sticky inset-x-0 top-0 z-30 w-full transition-all">
        {/* border-b border-gray-200 bg-white/75 backdrop-blur-lg */}
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-3 md:px-2 py-2">
          {/*  px-2.5 md:px-20 */}
          <div className="flex h-14 items-center justify-between">
            <a href="/">
              <Image
                src="/hyremi_logo.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100px", height: "100%" }} // optional
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
