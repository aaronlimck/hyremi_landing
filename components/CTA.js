import Image from "next/image";

const CTA = () => {
  return (
    <div className="py-10 ">
      <div
        style={{ background: "#F2F0EA" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mx-auto p-10 rounded-xl overflow-clip"
      >
        <div>
          <h1 className="text-2xl font-bold mb-3">Join the waitlist</h1>
          <p>
            We’re working to launch our platform for early public access users
            by Q4 of 2023, where you can connect with like-minded individuals,
            seek support, and exchange value insights.
          </p>
        </div>
        <div className="md:relative md:mx-auto">
          <a href="https://tally.so/r/3xjo7G" target="_blank">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Get Early Access
            </button>
          </a>
          <Image
            className="hidden md:block md:absolute top-10 right-2 mb-4"
            height={200}
            width={200}
            quality={100}
            src="/finger.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
