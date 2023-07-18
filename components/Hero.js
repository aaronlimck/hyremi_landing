import Image from "next/image";

const Hero = () => {
  return (
    <div className="container max-h-max w-full max-w-screen-xl flex flex-col justify-center items-center mx-auto space-y-4 py-10">
      <h1
        className="w-full lg:max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
        style={{ textWrap: "balance" }}
      >
        Revolutionize knowledge work Connect. Showcase. Prosper
      </h1>
      <p className="w-full max-w-md text-center">
        Showcase your work and services to attract clients effortlessly. Let us
        handle administrative tasks so you can focus on what you excel at.
      </p>

      <Image
        src="/avatar.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "420px" }} // optional
      />
    </div>
  );
};

export default Hero;
