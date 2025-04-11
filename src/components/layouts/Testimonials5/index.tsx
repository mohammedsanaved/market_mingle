/** @format */

import image from "../../../constants/images/image";
import { defaultTheme } from "../../../constants/theme/theme";
import PrimaryButton from "../../inputs/PrimaryButton";
import SecondaryButton from "../../inputs/SecondaryButton";
import { FiArrowUpRight } from "react-icons/fi";

const steps = [
  {
    id: "01",
    title: "Discovery & Analysis",
    description:
      "We begin by understanding your business, target audience, and objectives.",
    image: image.Approach1, // Replace with actual image paths
  },
  {
    id: "02",
    title: "Strategy Development",
    description:
      "We create a customized lead generation strategy tailored to your specific needs.",
    image: image.Approach2,
  },
  {
    id: "03",
    title: "Implementation & Execution",
    description:
      "We implement the strategy using various methodologies and cutting-edge technology.",
    image: image.Approach3,
  },
  {
    id: "04",
    title: "Monitoring & Optimization",
    description:
      "We continuously monitor key performance, analyze data, and optimize campaigns to maximize results.",
    image: image.Approach4,
  },
  {
    id: "05",
    title: "Reporting & Communication",
    description:
      "We provide regular reports and maintain open communication to ensure milestones are met.",
    image: image.Approach5,
  },
];

const Testimonials5 = () => {
  return (
    <section className='px-6 py-16 md:py-24 lg:py-28  max-w-6xl mx-auto text-center'>
      {/* Heading Section */}
      <div className='w-full flex justify-center text-center'>
        <h3
          style={{ color: defaultTheme.colors.primary }}
          className='text-6xl font-medium md:text-9xl max-w-[760px]  lg:text-10xl leading-1.2'
        >
          Our Streamlined{" "}
          <span
            className='text-[3.2rem] md:text-[4rem] lg:text-[5rem]'
            style={{
              color: defaultTheme.colors.tertiary,
              fontFamily: defaultTheme.fonts.niconne.join(","),
            }}
          >
            Approach{" "}
          </span>
          to Lead Generation
        </h3>
      </div>
      <div className='mt-6 flex justify-center gap-4'>
        <PrimaryButton endIcon={<FiArrowUpRight />}>Get Started</PrimaryButton>
        <SecondaryButton
          sx={{
            color: defaultTheme.colors.primary,
            background: defaultTheme.colors.secondary,
            fontWeight: 500,
          }}
        >
          Explore Services
        </SecondaryButton>
      </div>

      {/* Steps Section */}
      <div className='mt-12 md:mt-20  space-y-12 container font-poppins'>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={step.image}
              alt={step.title}
              className='size-full sm:size-[250px] object-contain'
            />
            <div className='text-left max-w-sm'>
              <h3 className='text-[#CCCCCC] text-7xl md:text-[56px] font-medium'>
                {step.id}
              </h3>
              <h4 className='text-2xl md:text-[32px] text-[#374151] font-medium mt-2'>
                {step.title}
              </h4>
              <p className='text-[#6B7280] text-[1rem] font-normal mt-2'>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials5;
