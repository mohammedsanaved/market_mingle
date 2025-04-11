/** @format */

"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { defaultTheme } from "../../../constants/theme/theme";
import image from "../../../constants/images/image";
import PrimaryButton from "../../inputs/PrimaryButton";
import SecondaryButton from "../../inputs/SecondaryButton";

// Define types
interface ImageProps {
  src: string;
  alt?: string;
}

interface HeaderData {
  colorHeading: string;
  heading: string;
  description: string;
  bottomImages: ImageProps[];
}

interface Header141Props extends React.ComponentPropsWithoutRef<"section"> {
  data: HeaderData;
}

export const Header141 = ({ data }: Header141Props) => {
  const { colorHeading, heading, description, bottomImages } = data;

  return (
    <div className='w-full bg-gray-500 relative'>
      <section
        style={{ backgroundImage: `url(${image.HomeHeaderBg})` }}
        id='relume'
        className='px-[5%] w-full bg-no-repeat bg-center object-contain flex items-center py-28 md:py-24 lg:py-28'
      >
        <div className='container'>
          <div className='rb-12 mb-12 text-center md:mb-18 lg:mb-20'>
            <div
              style={{ fontFamily: defaultTheme.fonts.poppins.join(",") }}
              className='mx-auto w-full max-w-lg'
            >
              <h1
                style={{ color: defaultTheme.colors.secondary }}
                className='mb-5 text-6xl font-medium md:mb-6 md:text-9xl lg:text-10xl'
              >
                <span
                  className='text-[3.5rem] md:text-[4rem] lg:text-[5rem]'
                  style={{
                    color: defaultTheme.colors.tertiary,
                    fontFamily: defaultTheme.fonts.niconne.join(","),
                  }}
                >
                  {colorHeading}
                </span>
                {heading}
              </h1>
              <p
                style={{ color: defaultTheme.colors.Paragraphtext }}
                className='md:text-md'
              >
                {description}
              </p>
              <div className='mt-6 flex items-center justify-center gap-4 md:mt-8'>
                <PrimaryButton
                  sx={{
                    color: defaultTheme.colors.primary,
                    background: defaultTheme.colors.tertiary,
                    fontWeight: 500,
                  }}
                  endIcon={<FiArrowUpRight />}
                >
                  Get Started
                </PrimaryButton>
                <SecondaryButton sx={{ fontWeight: 500 }}>
                  Explore Services
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // Mobile view for bottom images */}
      <div className='hidden md:flex w-full flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-6 transition-all duration-300 absolute top-[85%] sm:top-[80%] '>
        {bottomImages.map((image, index) => (
          <div
            key={index}
            className='w-1/2 max-w-[250px] md:max-w-full md:w-[342px] md:h-[300px] flex justify-center items-center'
          >
            <img
              src={image.src}
              alt={image.alt}
              className='size-full object-cover rounded-tl-[5px] rounded-tr-[50px] rounded-br-[5px] rounded-bl-[50px] rounded-3xl'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
