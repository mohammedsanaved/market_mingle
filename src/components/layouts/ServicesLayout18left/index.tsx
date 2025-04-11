/** @format */

import { defaultTheme } from "../../../constants/theme/theme";
import { FaCheck } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  paragraph: string;
};

type CardProps = {
  heading: string;
  description: string;
  features: FeaturesProps[];
  image: ImageProps;
};

type LayoutProps = {
  cards: CardProps[];
};

export const Layout18Dynamic = ({ cards }: LayoutProps) => {
  return (
    <section className='px-[5%] py-14 md:py-24 lg:py-24'>
      <div className='space-y-12'>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{ fontFamily: defaultTheme.fonts.poppins.join(",") }}
            className='container shadow-large p-6 rounded-tr-3xl rounded-bl-3xl bg-white backdrop-blur-[100px] border border-[#0000001A] lg:p-12'
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20 ${
                index % 2 === 0 ? "" : "md:grid-cols-2 md:grid-flow-dense"
              }`}
            >
              {/* Left Content */}
              <div className={`${index % 2 === 0 ? "order-1" : "order-2"}`}>
                <span
                  style={{ color: defaultTheme.colors.tertiary }}
                  className='font-semibold uppercase text-sm'
                >
                  Demand Generation
                </span>
                <h3 className='mb-5 text-4xl font-medium leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl'>
                  {card.heading}
                </h3>
                <p className='mb-5 md:mb-6 md:text-md'>{card.description}</p>
                <ul className='grid grid-cols-1 gap-4 py-2'>
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex self-start'>
                      <div className='mr-4 flex-none self-start'>
                        <FaCheck className='text-[#4F4F4F] text-2xl' />
                      </div>
                      <p>{feature.paragraph}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Image */}
              <div className={`${index % 2 === 0 ? "order-2" : "order-1"}`}>
                <img
                  src={card.image.src}
                  className='w-full object-cover rounded-tr-3xl rounded-bl-3xl'
                  alt={card.image.alt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
