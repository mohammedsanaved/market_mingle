/** @format */

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { defaultTheme } from "../../../constants/theme/theme";
import image from "../../../constants/images/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type VideoProps = {
  image: ImageProps;
  url: string;
};

type TabProps = {
  value: string;
  heading: string;
  description: string;
  image?: ImageProps;
  video?: VideoProps;
};

type Props = {
  defaultTabValue: string;
  startHeading: string;
  colorHeading: string;
  endHeading: string;
  tabs: TabProps[];
};

export type Layout219Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FeaturedCards = (props: Layout219Props) => {
  const { tabs, startHeading, endHeading, colorHeading, defaultTabValue } = {
    ...Layout219Defaults,
    ...props,
  };

  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container'>
        <div className='w-full flex justify-start mb-12 lg:mb-20'>
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
        </div>
        <Tabs
          defaultValue={defaultTabValue}
          style={{ fontFamily: defaultTheme.fonts.poppins.join(",") }}
          className='grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 md:gap-x-12 lg:gap-x-20'
        >
          <div className='max-size-full order-last flex items-center justify-center overflow-hidden md:order-first'>
            {tabs.map((tab, index) => {
              return (
                <TabsContent
                  key={index}
                  value={tab.value}
                  className='data-[state=active]:animate-tabs'
                >
                  {tab.image && (
                    <img
                      src={tab.image.src}
                      alt={tab.image.alt}
                      className='size-full object-cover rounded-tl-[5px] rounded-tr-[50px] rounded-br-[5px] rounded-bl-[50px]'
                    />
                  )}
                  {tab.video && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className='relative flex w-full items-center justify-center'>
                          <img
                            src={tab.video.image.src}
                            alt={tab.video.image.alt}
                            className='size-full object-cover'
                          />
                          <FaCirclePlay className='absolute z-20 size-16 text-white' />
                          <span className='absolute inset-0 z-10 bg-black/50' />
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        {tab.image && (
                          <img
                            src={tab.image.src}
                            alt={tab.image.alt}
                            className='size-full'
                          />
                        )}
                        {tab.video && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className='relative flex w-full items-center justify-center'>
                                <img
                                  src={tab.video.image.src}
                                  alt={tab.video.image.alt}
                                  className='size-full object-cover'
                                />
                                <span className='absolute inset-0 z-10 bg-black/50' />
                                <FaCirclePlay className='absolute z-20 size-16 text-white' />
                              </button>
                            </DialogTrigger>

                            <DialogContent>
                              <VideoIframe video={tab.video.url} />
                            </DialogContent>
                          </Dialog>
                        )}
                      </DialogContent>
                    </Dialog>
                  )}
                </TabsContent>
              );
            })}
          </div>
          <TabsList className='order-first flex-col gap-8 py-8 md:order-last md:py-0'>
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className='flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-0 pl-8 pr-0 text-left transition-all duration-300
            data-[state=active]:border-l-[3px] data-[state=active]:border-transparent 
            data-[state=active]:bg-transparent data-[state=active]:text-[#1F2937] gradient-border
              data-[state=inactive]:text-[#9CA3AF]' // Text color for inactive state
              >
                <h3
                  style={
                    {
                      // color: defaultTheme.colors.primary,
                    }
                  }
                  className='mb-3 text-xl font-medium md:mb-4 md:text-2xl md:leading-[1.3] '
                >
                  {tab.heading}
                </h3>
                <p
                  //   style={{ color: defaultTheme.colors.lightPrimary }}
                  className='text-[1rem] leading-6 font-normal'
                >
                  {tab.description}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};

export const Layout219Defaults: Props = {
  defaultTabValue: "tab-one",
  startHeading: "Get Strategic",
  colorHeading: "Advantages",
  endHeading: "in Lead Generation",
  tabs: [
    {
      value: "tab-one",
      heading: "Data-Driven Strategies",
      description:
        "We make data-informed decisions at every step, ensuring maximum impact and ROI.",
      image: {
        src: image.Advantages1,
        alt: "Relume placeholder image 1",
      },
    },
    {
      value: "tab-two",
      heading: "Tailored Solutions",
      description:
        "We understand that every business is unique, which needs customized strategies aligned with your specific goals and target audience.",
      image: {
        src: image.Advantages2,
        alt: "Relume placeholder image 1",
      },
    },
    {
      value: "tab-three",
      heading: "Experienced Team",
      description:
        "Our team of B2B marketing experts brings years of experience and a proven track record of success.",
      image: {
        src: image.Advantages3,
        alt: "Relume placeholder image 3",
      },
    },
    {
      value: "tab-four",
      heading: "Transparent Reporting",
      description:
        "We provide regular, detailed reports to keep you informed of our progress and the results we're achieving.",
      image: {
        src: image.Advantages4,
        alt: "Relume placeholder image 3",
      },
    },
  ],
};
