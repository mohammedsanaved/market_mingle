/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { defaultTheme } from "../../../constants/theme/theme";
import images from "../../../constants/images/image";
import SecondaryButton from "../../inputs/SecondaryButton";
import { FiArrowUpRight } from "react-icons/fi";
import PrimaryButton from "../../inputs/PrimaryButton";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  image: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  startHeading: string;
  colorHeading: string;
  endHeading: string;
  heading: string;
  description: string;
  sections: SectionProps[];
  buttons: ButtonProps[];
};

export type Layout251Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout251 = (props: Layout251Props) => {
  const { startHeading, colorHeading, endHeading, description, sections } = {
    ...props,
    ...Layout251Defaults,
  };
  return (
    <section
      id='relume'
      style={{ fontFamily: defaultTheme.fonts.poppins.join(",") }}
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20'>
          <div>
            <h2
              style={{ fontFamily: defaultTheme.fonts.poppins.join(",") }}
              className='text-5xl font-medium md:text-5xl lg:text-6xl'
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
            </h2>
          </div>
          <p className='md:text-md'>{description}</p>
        </div>
        <div className='grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12'>
          {sections.map((section, index) => (
            <div key={index}>
              <div className='mb-6 md:mb-8 rounded-tl-2xl rounded-tr-sm rounded-bl-sm rounded-br-2xl overflow-hidden'>
                <img src={section.image.src} alt={section.image.alt} />
              </div>
              <h3 className='mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl'>
                {section.heading}
              </h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
        <div className='mt-12 flex items-center gap-4 md:mt-18 lg:mt-20'>
          <PrimaryButton endIcon={<FiArrowUpRight />}>
            Get Started
          </PrimaryButton>
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
      </div>
    </section>
  );
};

export const Layout251Defaults: Props = {
  startHeading: "Turn Leads into",
  colorHeading: "Revenue",
  endHeading: "with Our Proven Solutions",
  heading: "Medium length section heading goes here",
  description:
    "We offer a full suite of services designed to address every aspect of your lead generation needs.",
  sections: [
    {
      image: {
        src: `${images.layout_1_1}`,
        alt: "Relume placeholder image 1",
      },
      heading: "Demand Generation",
      description:
        "Drive a consistent flow of qualified leads through targeted multi-channel campaigns, including content marketing, SEO, and social media.",
    },
    {
      image: {
        src: `${images.layout_1_2}`,
        alt: "Relume placeholder image 2",
      },
      heading: "Email Marketing",
      description:
        "Engage your target audience with personalized email campaigns that nurture leads and drive conversions.",
    },
    {
      image: {
        src: `${images.layout_1_3}`,
        alt: "Relume placeholder image 3",
      },
      heading: "Data Solutions",
      description:
        "Leverage accurate, actionable data to refine your targeting, personalize your messaging, and maximize your ROI.",
    },
    {
      image: {
        src: `${images.layout_1_4}`,
        alt: "Relume placeholder image 1",
      },
      heading: "Market Research",
      description:
        "Gain valuable insights into your market landscape, customer behaviour, and competitor activities to inform your strategic decisions.",
    },
    {
      image: {
        src: `${images.layout_1_5}`,
        alt: "Relume placeholder image 1",
      },
      heading: "Content Marketing",
      description:
        "Content is king—we create and distribute it to attract, engage, and convert. From blogs to videos, our strategies boost brand authority and drive traffic.",
    },
    {
      image: {
        src: `${images.layout_1_6}`,
        alt: "Relume placeholder image 1",
      },
      heading: "Account-Based Marketing (ABM)",
      description:
        "Focus your resources on high-value accounts with tailored campaigns that deliver personalized experiences and drive deeper engagement.",
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};
