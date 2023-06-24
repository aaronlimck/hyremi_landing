import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center justify-between container max-w-7xl w-full max-auto py-10">
        <Image height={10} width={90} src="/hyremi_logo.png" alt="Hymre_logo" />
        <a href="https://tally.so/r/3xjo7G" target="_blank">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
          >
            Get Early Access
          </button>
        </a>
      </div>

      <div
        style={{
          background: "url(/background.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="container max-w-5xl w-full mx-auto sm:px-12 space-y-2 md:space-y-6 pt-20 pb-10 overflow-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
            No more navigating the freelance landscape alone
          </h1>
          <p className="text-base sm:text-lg text-slate-500 text-center font-medium max-w-2xl mx-auto">
            Build by and for freelancers. Connect, showcase, and thrive in our
            vibrant community. Join now and redefine your freelance journey.
          </p>
          <Image
            className="mx-auto -rotate-[20deg] overflow-x-hidden"
            height={400}
            width={400}
            src="/hero_image.svg"
            alt=""
          />
        </div>
      </div>

      <div className="container max-w-7xl w-full mx-auto py-10">
        <div className="mb-24 space-y-2 md:space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-left md:text-center ">
            How are we different?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 text-left md:text-center font-medium max-w-lg mx-auto">
            We have made it our priority to place freelancers at the forefront
            of everything we do. Designed to cater to your needs and your
            success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-6">
          <div className="p-2 sm:px-6 sm:pb-6">
            <Image
              className="-mt-12 mx-auto mb-3"
              height={200}
              width={200}
              quality={100}
              src="/community.svg"
              alt=""
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Vibrant Community</h2>
              <p className="text-base text-slate-600 font-medium">
                Connect with like minded individuals, seek support and exchange
                value insights. We believe in the power of collaboration and the
                potential for freelancers to learn from one another.
              </p>
            </div>
          </div>
          <div className="p-2 sm:px-6 sm:pb-6">
            <Image
              className="-mt-12 mx-auto mb-6"
              height={200}
              width={200}
              quality={100}
              src="/opportunities.svg"
              alt=""
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Discover Opportunities</h2>
              <p className="text-base text-slate-600 font-medium">
                Explore a wide range of opportunities effortlessly, sorted by
                categories or with the help of our robust search filters. Take
                control and select the project that perfectly aligns with your
                preferences and goals.
              </p>
            </div>
          </div>
          <div className="p-2 sm:px-6 sm:pb-6">
            <Image
              className="-mt-12 mx-auto mb-4"
              height={200}
              width={200}
              quality={100}
              src="/money.svg"
              alt=""
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Make more money</h2>
              <p className="text-base text-slate-600 font-medium">
                No talent fees. Keep what you earn! At our core belief, we value
                your efforts and acknowledge that you deserve to retain all you
                have earn from your projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl w-full mx-auto py-20 space-y-24">
        {/* L1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-24">
          <div className="space-y-2 p-2 sm:px-6 sm:pb-6">
            <h2 className="text-2xl font-semibold">Showcase your works</h2>
            <p className="text-base text-slate-600 font-medium">
              We design your profiles to showcase your talents and past work. We
              believe that your skills and experiences are the most important
              factors that clients are interested in. Our design approach is
              centred around highlighting your expertise, allowing you to
              present a compelling portfolio that truly demonstrates your
              capabilities.
            </p>
          </div>
          <Image
            className="mx-auto order-first md:order-none"
            height={286}
            width={468}
            quality={100}
            src="/profile.png"
            alt=""
          />
        </div>
        {/* L2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-24">
          <Image
            className="mx-auto w-full h-auto"
            height="0"
            width="0"
            sizes="100vw"
            quality={80}
            src="/collab.png"
            alt=""
          />
          <div className="space-y-2 p-2 sm:px-6 sm:pb-6">
            <h2 className="text-2xl font-semibold">
              Collab is just one click away
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Easily collaborate with fellow freelancers on our platform to work
              on projects that require a diverse set of skills. We understand
              that no one can possess every skill, which is why we&apos;ve made it
              effortless for you to connect and collaborate with other talented
              freelancers.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ background: "#F2F0E9" }}
        className="container max-w-5xl mx-auto rounded-xl p-12 overflow-clip"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-2xl font-bold">Join the waitlist</h2>
            <p className="text-base text-slate-600 font-medium">
              We&apos;re working to launch our platform to early access users by Q3
              of 2023, where you can connect with like minded individuals, seek
              support and exchange value insights.
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

      <div className="text-center py-6">
        <p className="text-sm text-gray-600">
          Copyright © 2023 HyreMi. All rights reserved.
        </p>
      </div>
    </>
  );
}
