import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto w-full max-w-screen-xl flex flex-row justify-between py-6">
      <p className="text-gray-600 text-sm">
        © Hyremi. 2023 - All rights reserved.
      </p>
      <div className="flex flex-row space-x-4">
        <a
          href="https://www.linkedin.com/company/hyremi"
          target="_blank"
          className="cursor-pointer"
        >
          <Image
            src="/linkedin.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "24px", height: "24px", opacity: "80%" }} // optional
          />
        </a>
        <a
          href="https://www.tiktok.com/@hyremi"
          target="_blank"
          className="cursor-pointer"
        >
          <Image
            src="/tiktok.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "24px", height: "24px", opacity: "80%" }} // optional
          />
        </a>
        <a
          href="https://www.instagram.com/hyremisg/"
          target="_blank"
          className="cursor-pointer"
        >
          <Image
            src="/instagram.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "24px", height: "24px", opacity: "80%" }} // optional
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
