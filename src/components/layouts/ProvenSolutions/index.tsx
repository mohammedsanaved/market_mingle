/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";
import { defaultTheme } from "../../../constants/theme/theme";
import PrimaryButton from "../../inputs/PrimaryButton";
import SecondaryButton from "../../inputs/SecondaryButton";
import { FiArrowUpRight } from "react-icons/fi";
import { useMediaQuery } from "@mui/material";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  startHeading: string;
  colorHeading: string;
  endHeading: string;
  description: string;
  buttons: ButtonProps[];
  firstImage: ImageProps;
  secondImage: ImageProps;
};

export type Header131Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ProvenSolutions = (props: Header131Props) => {
  const { startHeading, colorHeading, endHeading, description } = {
    ...Header131Defaults,
    ...props,
  };
  const sx = useMediaQuery("(max-width:400px)");
  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div
        style={{
          fontFamily: defaultTheme.fonts.poppins.join(","),
          color: defaultTheme.colors.primary,
        }}
        className='container'
      >
        <div className='rb-12 mb-12 w-full flex flex-col lg:flex-row justify-start gap-8 items-center lg:gap-20 md:mb-18  lg:mb-20 '>
          <h3 className=' lg:max-w-[716px] text-6xl font-medium md:text-9xl lg:text-10xl '>
            {startHeading}{" "}
            <span
              className='text-[3.2rem] md:text-[4rem] lg:text-[5rem]'
              style={{
                color: defaultTheme.colors.tertiary,
                fontFamily: defaultTheme.fonts.niconne.join(","),
              }}
            >
              {colorHeading}{" "}
            </span>
            {endHeading}
          </h3>
          <div className=''>
            <p className='text-[1rem]'>{description}</p>
            <div className='mt-6 flex   gap-4 md:mt-8'>
              <PrimaryButton
                sx={{
                  color: defaultTheme.colors.tertiary,
                  background: defaultTheme.colors.primary,
                  borderRadius: "2px 20px",
                  width: sx ? "150px" : "176px",

                  fontWeight: 500,
                }}
                endIcon={<FiArrowUpRight />}
              >
                Get Started
              </PrimaryButton>
              <SecondaryButton
                sx={{
                  width: sx ? "150px" : "177px",
                  fontWeight: 500,
                  background: "transparent",
                  borderRadius: "2px 20px",
                  color: defaultTheme.colors.primary,
                }}
              >
                Explore Services
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className='relative gap-12 justify-center flex flex-wrap'>
          {/* <div className='mr-[15%] w-full'>
            <img
              src={firstImage.src}
              className='aspect-[3/2] size-full object-cover'
              alt={firstImage.alt}
            />
          </div>
          <div className='absolute right-0 top-[10%] w-[30%]'>
            <img
              src={secondImage.src}
              className='aspect-square size-full object-cover'
              alt={secondImage.alt}
            />
          </div> */}
          <img
            src='https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg'
            className='max-w-[596px] size-full rounded-tl-[5px] rounded-tr-[50px] rounded-br-[5px] rounded-bl-[50px] '
            alt=''
          />
          <img
            src='https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg'
            className='max-w-[596px] size-full rounded-tl-[5px] rounded-tr-[50px] rounded-br-[5px] rounded-bl-[50px] '
            alt=''
          />
          <img
            src='https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg'
            className='max-w-[596px] size-full rounded-tl-[5px] rounded-tr-[50px] rounded-br-[5px] rounded-bl-[50px] '
            alt=''
          />
          <img
            src='https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg'
            className='max-w-[596px] size-full rounded-tl-[5px] rounded-tr-[50px] rounded-br-[5px] rounded-bl-[50px] '
            alt=''
          />
          <img
            src='https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg'
            className='max-w-[596px] size-full rounded-tl-[5px] rounded-tr-[50px] rounded-br-[5px] rounded-bl-[50px] '
            alt=''
          />
          <img
            src='https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg'
            className='max-w-[596px] size-full rounded-tl-[5px] rounded-tr-[50px] rounded-br-[5px] rounded-bl-[50px] '
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export const Header131Defaults: Props = {
  startHeading: "Turn Leads into",
  colorHeading: "Revenue",
  endHeading: "with Our Proven Solutions",
  description:
    "We offer a full suite of services designed to address every aspect of your lead generation needs.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  firstImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image 1",
  },
  secondImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png",
    alt: "Relume placeholder image 2",
  },
};
