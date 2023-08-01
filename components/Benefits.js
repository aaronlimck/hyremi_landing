"use client";

import BenefitsCard from "./BenefitsCard";
import { Hub, Workfolio, ServiceMenu, Payment } from "./Icons";

const Benefits = () => {
  return (
    <div className="container w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 py-16">
      <div className="w-full lg:w-2/5 p-0 sm:p-4 lg:p-0">
        <p className="uppercase font-semibold text-sm mb-3">Core Features 🔥</p>
        <h1 className="text-4xl font-semibold leading-snug mb-4">
          One Platform, Infinite Possibilities!
        </h1>
        <p className="max-w-[460px]">
          Simplifying your journey with a unified space to connect, collaborate,
          and support each other - no more isolation! Showcase your expertise,
          find opportunities, and communicate seamlessly on one platform.
        </p>
      </div>
      <div className="w-full lg:w-3/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <BenefitsCard
            icon={<Hub />}
            heading="Hub"
            description="Connect and collaborate with like-minded professionals in Hub. Expand your network, share ideas, and grow together."
          />
          <BenefitsCard
            icon={<Workfolio />}
            heading="Workfolio"
            description="Effortlessly exhibit your past work and accomplishments without the hassle of creating a website."
          />
          <BenefitsCard
            icon={<ServiceMenu />}
            heading="Service Menu"
            description="Empower potential clients with transparency and make it effortless for them to explore and engage you."
          />
          <BenefitsCard
            icon={<Payment />}
            heading="Simplified Payment"
            description="Effortlessly request and receive payments without complications. Say goodbye to billing and tracking hassles."
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
