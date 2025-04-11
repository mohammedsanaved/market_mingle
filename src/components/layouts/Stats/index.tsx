/** @format */

import { defaultTheme } from "../../../constants/theme/theme";

type StatsProps = {
  percentage: string;
  heading: string;
  subHeading: string;
};

type DataProps = {
  startHeading: string;
  colorHeading: string;
  endHeading: string;
  stats: StatsProps[];
};

export type Stats8Props = React.ComponentPropsWithoutRef<"section"> & {
  data: DataProps;
};

export const Stats = ({ data }: Stats8Props) => {
  const { startHeading, colorHeading, endHeading, stats } = data;
  return (
    <section
      style={{ fontFamily: defaultTheme.fonts.poppins.join(",") }}
      id='relume'
      className='px-[5%] lg:mt-[240px]  py-16 md:py-24 lg:py-28'
    >
      <div className='container flex flex-col items-start'>
        <div className='rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20'>
          <h3
            style={{ color: defaultTheme.colors.primary }}
            className='text-6xl font-medium md:text-9xl lg:text-10xl leading-1.2'
          >
            {startHeading}
            <span
              className='text-[3.2rem] md:text-[4rem] lg:text-[5rem]'
              style={{
                color: defaultTheme.colors.tertiary,
                fontFamily: defaultTheme.fonts.niconne.join(","),
              }}
            >
              {colorHeading}
            </span>
            {endHeading}
          </h3>
        </div>
        <div className='grid w-full grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16'>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                borderLeft: "2px solid",
                borderImageSource:
                  index === 0
                    ? "linear-gradient(180deg, #000000 0%, #D9D9D9 50%, #D9D9D9 100%)"
                    : index === 1
                    ? "linear-gradient(180deg, #D9D9D9 0%, #D9D9D9 25%, #000000 50%, #D9D9D9 75%, #D9D9D9 100%)"
                    : "linear-gradient(180deg, #D9D9D9 0%, #D9D9D9 50%, #000000 100%)",
                borderImageSlice: 1,
              }}
              className='w-full pl-8'
            >
              <p
                style={{ color: defaultTheme.colors.primary }}
                className='mb-2 text-6xl font-medium md:text-9xl lg:text-10xl leading-[1.3]'
              >
                {stat.percentage}
              </p>
              <h3
                style={{ color: defaultTheme.colors.lightPrimary }}
                className='text-md mb-2 font-medium leading-[1.2] xl:text-nowrap md:text-2xl'
              >
                {stat.heading}
              </h3>
              <h3
                style={{ color: defaultTheme.colors.Paragraphtext }}
                className='text-sm md:text-[1rem] font-normal'
              >
                {stat.subHeading}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
