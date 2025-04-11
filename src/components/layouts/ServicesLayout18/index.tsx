import { ReactElement } from 'react';
import { defaultTheme } from '../../../constants/theme/theme';
import { FaCheck } from 'react-icons/fa6';
import image from '../../../constants/images/image';

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ReactElement;
  paragraph: string;
};

type Props = {
  heading: string;
  description: string;
  features: FeaturesProps[];
  image: ImageProps;
};

export type Layout18Props = React.ComponentPropsWithoutRef<'section'> &
  Partial<Props>;

export const Layout18 = (props: Layout18Props) => {
  const { heading, description, features, image } = {
    ...Layout18Defaults,
    ...props,
  };
  return (
    <section id='relume' className='px-[5%] py-14 md:py-24 lg:py-24'>
      <div
        style={{ fontFamily: defaultTheme.fonts.poppins.join(',') }}
        className='container shadow-large p-6 rounded-tr-3xl rounded-bl-3xl bg-white backdrop-blur-[100px] border border-[#0000001A] lg:p-12'
      >
        <div className='grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20'>
          <div>
            <span
              style={{ color: defaultTheme.colors.tertiary }}
              className='font-semibold uppercase text-sm'
            >
              Demand Generation
            </span>
            <h3 className='mb-5 text-4xl font-medium leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl'>
              {heading}
            </h3>
            <p className='mb-5 md:mb-6 md:text-md'>{description}</p>
            <ul className='grid grid-cols-1 gap-4 py-2'>
              {features.map((feature, index) => (
                <li key={index} className='flex self-start'>
                  <div className='mr-4 flex-none self-start'>
                    {feature.icon}
                  </div>
                  <p>{feature.paragraph}</p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={image.src}
            className='w-full object-cover rounded-tr-3xl rounded-bl-3xl'
            alt={image.alt}
          />
        </div>
      </div>
    </section>
  );
};

export const Layout18Defaults: Props = {
  heading: 'Fuel Your Sales Pipeline with Qualified Leads',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  features: [
    {
      icon: <FaCheck />,
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <FaCheck />,
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <FaCheck />,
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
  image: {
    src: `${image.layout18Image01}`,
    alt: 'image01',
  },
};
