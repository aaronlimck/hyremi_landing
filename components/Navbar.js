import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div class="sticky inset-x-0 top-0 z-30 w-full transition-all">
        <div class="mx-auto w-full max-w-screen-xl px-4 py-4">
          {/*  px-2.5 md:px-20 */}
          <div class="flex h-14 items-center justify-between">
            <a href="/">
              <Image
                src="/hyremi_logo.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100px", height: "100%" }} // optional
              />
            </a>

            <a href="https://tally.so/r/3xjo7G" target="_blank">
              <button
                type="button"
                className="text-white bg-gray-900 font-medium rounded-lg text-sm pointer-cursor px-5 py-2.5"
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
