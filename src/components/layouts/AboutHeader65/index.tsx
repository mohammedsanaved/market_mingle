/** @format */

import image from "../../../constants/images/image";
import { defaultTheme } from "../../../constants/theme/theme";

interface ImageProps {
  src: string;
  alt?: string;
}

interface HeaderData {
  startHeading: string;
  colorHeading: string;
  image: ImageProps; // Changed from ImageProps[] to ImageProps
}

export type Header65Props = React.ComponentPropsWithoutRef<"section"> & {
  data: HeaderData;
};

export const Header65 = ({ data }: Header65Props) => {
  const { startHeading, colorHeading, image } = data;
  return (
    <section id='relume' className='relative px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container relative z-10 max-w-lg text-center'>
        <h1 className='mb-5 text-6xl font-medium text-text-alternative md:mb-6 md:text-9xl lg:text-10xl'>
          {startHeading}
          <br />
          <span
            className='text-[3.2rem] md:text-[4rem] lg:text-[5rem]'
            style={{
              color: defaultTheme.colors.tertiary,
              fontFamily: defaultTheme.fonts.niconne.join(","),
            }}
          >
            {colorHeading}
          </span>
        </h1>
      </div>
      <div className='absolute inset-0 z-0'>
        <img
          src={image.src}
          className='size-full object-cover'
          alt={image.alt} // Fixed the alt attribute usage
        />
        <div className='absolute inset-0 bg-black/50' />
      </div>
    </section>
  );
};

export const Header65Defaults: HeaderData = {
  // Changed Props to HeaderData
  startHeading: "Short heading here",
  colorHeading: "Tagline",
  image: {
    src: `${image.headerAbout}`,
    alt: "Relume placeholder image",
  },
};
