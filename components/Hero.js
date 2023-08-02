import Image from "next/image";

const Hero = () => {
  return (
    <div className="container max-h-max w-full max-w-screen-xl flex flex-col justify-center items-center mx-auto space-y-6 py-10 relative">
      <h1
        className="w-full lg:max-w-3xl text-4xl lg:text-5xl font-bold text-center"
        style={{ textWrap: "balance" }}
      >
        Your Rules, Your Career, Take Control
      </h1>
      <p className="w-full max-w-md text-center">
        Work on your terms. Effortlessly attract clients with your works and
        services. Leave the administrative tasks to us, while you shine at what
        you do best!
      </p>

      <Image
        src="/interface.png"
        width={0}
        height={0}
        sizes="100vw"
        className="m-0 p-0"
        style={{ width: "auto", height: "auto" }} // optional
        alt=""
      />

      {/* <Image
        src="/avatar.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "420px" }} // optional
        alt=""
      />

      <Image
        className="absolute hidden md:block md:left-[110px] lg:left-[170px] top-[220px] transition-transform duration-300 hover:scale-110 cursor-pointer"
        src="/profile_card_robert.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "140px" }} // optional
        alt=""
      />

      <Image
        className="absolute hidden md:block md:left-[80px] lg:left-[120px] top-[420px] transition-transform duration-300 hover:scale-110 cursor-pointer"
        src="/profile_card_jennifer.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "140px" }} // optional
        alt=""
      />

      <Image
        className="absolute hidden md:block md:right-[40px] lg:left-2/3 transition-transform duration-300 hover:scale-110 cursor-pointer"
        src="/profile_card_swinnerton.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "140px" }} // optional
        alt=""
      />

      <Image
        className="absolute hidden md:block md:right-[18px] lg:left-3/4 top-2/3 transition-transform duration-300 hover:scale-110 cursor-pointer"
        src="/profile_card_aaron.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "140px" }} // optional
        alt=""
      /> */}
    </div>
  );
};

export default Hero;
