/** @format */

"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import image from "../../../constants/images/image";
import { defaultTheme } from "../../../constants/theme/theme";
import PrimaryButton from "../../inputs/PrimaryButton";
import { FiArrowUpRight } from "react-icons/fi";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  image: ImageProps;
  startHeading: string;
  colorHeading: string;
  endHeading: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Header81Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header81 = (props: Header81Props) => {
  const {
    startHeading,
    colorHeading,
    endHeading,
    description,
    buttons,
    image,
  } = {
    ...Header81Defaults,
    ...props,
  };

  return (
    <section id='relume' className='relative py-16 lg:py-24'>
      <div
        style={{
          fontFamily: defaultTheme.fonts.poppins.join(","),
        }}
        className='grid grid-cols-1 lg:grid-cols-2 items-center gap-y-10 lg:gap-y-0 px-[5%]'
      >
        {/* Text Content */}
        <div className='max-w-md lg:ml-[5vw] lg:mr-20'>
          <h1
            style={{
              fontFamily: defaultTheme.fonts.poppins.join(","),
              color: defaultTheme.colors.primary,
            }}
            className='mb-5 text-4xl font-medium md:text-6xl lg:text-7xl'
          >
            {startHeading}{" "}
            <span
              className='text-[3.5rem] md:text-[4rem] lg:text-[5rem]'
              style={{
                color: defaultTheme.colors.tertiary,
                fontFamily: defaultTheme.fonts.niconne.join(","),
              }}
            >
              {colorHeading}
            </span>
            <br />
            {endHeading}
          </h1>
          <p
            style={{
              fontFamily: defaultTheme.fonts.poppins.join(","),
              color: defaultTheme.colors.lightPrimary,
            }}
            className='text-lg text-gray-700'
          >
            {description}
          </p>
          <div className='mt-6 flex flex-wrap gap-4'>
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
            {buttons.map((button, index) => (
              <Button
                style={{
                  borderRadius: "5px 20px",
                }}
                key={index}
                {...button}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full'>
          <img
            src={image.src}
            alt={image.alt}
            className='w-full h-auto object-cover rounded-lg shadow-md'
          />
        </div>
      </div>
    </section>
  );
};

export const Header81Defaults: Props = {
  startHeading: "Unlock Your",
  colorHeading: "Growth",
  endHeading: "Potential with Targeted Lead Generation",
  heading: "Unlock Your Growth Potential with Targeted Lead Generation",
  description:
    "Drive more qualified leads, boost conversions and maximize your ROI with our comprehensive suite of data-driven services.",
  buttons: [{ title: "Explore Services", variant: "secondary" }],
  image: {
    src: `${image.headerbanner}`,
    alt: "Business strategy planning",
  },
};
