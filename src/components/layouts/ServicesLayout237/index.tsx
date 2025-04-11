/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import image from "../../../constants/images/image";
import { defaultTheme } from "../../../constants/theme/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  sections: SectionProps[];
  buttons: ButtonProps[];
};

export type Layout237Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout237 = (props: Layout237Props) => {
  const { heading, description, sections } = {
    ...props,
    ...Layout237Defaults,
  };
  return (
    <section
      style={{ backgroundImage: `url(${image.HomeHeaderBg})` }}
      id='relume'
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='flex flex-col items-center'>
          <div className='rb-12 mb-12 text-center md:mb-18 lg:mb-20'>
            <div className='w-full max-w-lg'>
              <h2
                style={{
                  fontFamily: defaultTheme.fonts.poppins.join(","),
                  color: defaultTheme.colors.secondary,
                }}
                className='rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'
              >
                {heading}
              </h2>
              <p
                style={{
                  fontFamily: defaultTheme.fonts.poppins.join(","),
                  color: defaultTheme.colors.secondary,
                }}
                className='md:text-md'
              >
                {description}
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
            {sections.map((section, index) => (
              <div
                key={index}
                className='flex w-full flex-col items-center text-center'
              >
                <div className='rb-5 mb-5 md:mb-6'>
                  <img
                    src={section.icon.src}
                    className='size-12'
                    alt={section.icon.alt}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: defaultTheme.fonts.poppins.join(","),
                    color: defaultTheme.colors.secondary,
                  }}
                  className='mb-5 text-xl font-medium md:mb-6 md:text-xl md:leading-[1.3] lg:text-2xl'
                >
                  {section.heading}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout237Defaults: Props = {
  heading: "Our Services",
  description:
    "In todays competitive landscape, effective lead generation is crucial for business success. MarketMingle offers tailored solutions designed to meet your specific needs and deliver measurable results. We combine cutting-edge technology, proven strategies, and expert analysis to help you achieve your growth objectives.",
  sections: [
    {
      icon: {
        src: `${image.chart_success}`,
        alt: "Relume logo 1",
      },
      heading: "Fuel Your Sales Pipeline with Qualified Leads",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: {
        src: `${image.sms_search}`,
        alt: "Relume logo 2",
      },
      heading: "Connect with Your Audience Through Personalized Emails",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: {
        src: `${image.personalcard}`,
        alt: "Relume logo 3",
      },
      heading: "Unlock the Power of Actionable Data Insights & Growth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: {
        src: `${image.status_up}`,
        alt: "Relume logo 3",
      },
      heading: "Gain a Competitive Edge with Market Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: {
        src: `${image.mobile}`,
        alt: "Relume logo 3",
      },
      heading: "Captivate Your Audience with Compelling Content",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: {
        src: `${image.favorite_chart}`,
        alt: "Relume logo 3",
      },
      heading: "Engage High-Value Accounts with Personalized Strategies",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
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
