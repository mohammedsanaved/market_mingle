/** @format */

import { defaultTheme } from "../../../constants/theme/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type aboutUsData = {
  startHeading: string;
  colorHeading: string;
  descriptionPara01: string;
  descriptionPara02: string;
  image: ImageProps;
};

export type Layout1Props = React.ComponentPropsWithoutRef<"section"> & {
  data: aboutUsData;
};

export const Layout1 = ({ data }: Layout1Props) => {
  const {
    startHeading,
    colorHeading,
    descriptionPara01,
    descriptionPara02,
    image,
  } = data;
  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20'>
          <div style={{ fontFamily: defaultTheme.fonts.poppins.join(",") }}>
            <h1 className='rb-5 mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl'>
              {startHeading}
              <span
                className='text-[3.5rem] md:text-[4rem] lg:text-[5rem]'
                style={{
                  color: defaultTheme.colors.tertiary,
                  fontFamily: defaultTheme.fonts.niconne.join(","),
                }}
              >
                {colorHeading}
              </span>
            </h1>
            <p className='md:text-md mb-2'>{descriptionPara01}</p>
            <p className='md:text-md '>{descriptionPara02}</p>
          </div>
          <div>
            <img
              src={image.src}
              className='w-full object-cover'
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
