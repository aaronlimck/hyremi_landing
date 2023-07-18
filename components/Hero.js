import Image from "next/image";

const Hero = () => {
  return (
    <div className="dynamicViewPort w-full max-w-screen-xl flex flex-col justify-center items-center mx-auto space-y-4">
      <h1 className="text-5xl font-bold text-center leading-snug">
        Revolutionize knowledge work
        <br />
        Connect. Showcase. Prosper
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
