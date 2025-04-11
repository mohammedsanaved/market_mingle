import { Button } from '@relume_io/relume-ui';
import type { ButtonProps } from '@relume_io/relume-ui';
import { BiLogoDribbble, BiLogoLinkedinSquare } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { defaultTheme } from '../../../constants/theme/theme';
import { FiArrowUpRight } from 'react-icons/fi';

type ImageProps = {
  src: string;
  alt?: string;
};

type Footer = {
  heading: string;
  description: string;
  button: ButtonProps;
};

type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLink[];
};

type Props = {
  startHeading: string;
  colorHeading: string;
  teamMembers: TeamMember[];
  footerContent: Footer;
};

export type Team4Props = React.ComponentPropsWithoutRef<'section'> &
  Partial<Props>;

export const Team4 = (props: Team4Props) => {
  const { startHeading, colorHeading, teamMembers, footerContent } = {
    ...Team4Defaults,
    ...props,
  };
  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div
        style={{ fontFamily: defaultTheme.fonts.poppins.join(',') }}
        className=''
      >
        <div className='rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20'>
          <h2 className='rb-5 mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl'>
            {startHeading}{' '}
            <span
              className='text-[3.5rem] md:text-[4rem] lg:text-[5rem]'
              style={{
                color: defaultTheme.colors.tertiary,
                fontFamily: defaultTheme.fonts.niconne.join(','),
              }}
            >
              {colorHeading}
            </span>
          </h2>
        </div>
        <div className='grid grid-cols-1 items-start justify-items-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4'>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
        <div className='mt-14 w-full max-w-md md:mt-20 lg:mt-24'>
          <h4
            style={{ color: defaultTheme.colors.lightPrimary }}
            className='mb-3 text-2xl font-medium md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl'
          >
            {footerContent.heading}
          </h4>
          <p className='md:text-md'>{footerContent.description}</p>
          <div className='mt-6 flex flex-wrap gap-4 md:mt-8'>
            <Button
              className='rounded-tr-xl rounded-bl-xl border border-[#000]'
              {...footerContent.button}
            >
              {footerContent.button.title}
              <span>
                <FiArrowUpRight
                  style={{ color: defaultTheme.colors.tertiary }}
                />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <div className='flex flex-col'>
      <div className='relative mb-5 aspect-square rounded-tr-xl rounded-bl-xl  size-full overflow-hidden md:mb-6 md:pt-[100%]'>
        <img
          src={member.image.src}
          alt={member.image.alt}
          className='absolute inset-0 size-full object-cover'
        />
      </div>
      <div className='mb-3 md:mb-4'>
        <h5 className='text-md font-semibold md:text-lg'>{member.name}</h5>
        <h6
          style={{ color: defaultTheme.colors.tertiary }}
          className='md:text-md'
        >
          {member.jobTitle}
        </h6>
      </div>
      <p style={{ color: defaultTheme.colors.Paragraphtext }}>
        {member.description}
      </p>
      <div className='mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start'>
        {member.socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export const Team4Defaults: Props = {
  startHeading: 'Meet the Experts Driving Your',
  colorHeading: 'Success',
  teamMembers: [
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Relume placeholder image 1',
      },
      name: 'Full name',
      jobTitle: 'Job title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      socialLinks: [
        { href: '#', icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: '#', icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: '#', icon: <BiLogoDribbble className='size-6' /> },
      ],
    },
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Relume placeholder image 2',
      },
      name: 'Full name',
      jobTitle: 'Job title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      socialLinks: [
        { href: '#', icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: '#', icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: '#', icon: <BiLogoDribbble className='size-6' /> },
      ],
    },
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Relume placeholder image 3',
      },
      name: 'Full name',
      jobTitle: 'Job title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      socialLinks: [
        { href: '#', icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: '#', icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: '#', icon: <BiLogoDribbble className='size-6' /> },
      ],
    },
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Relume placeholder image 4',
      },
      name: 'Full name',
      jobTitle: 'Job title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      socialLinks: [
        { href: '#', icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: '#', icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: '#', icon: <BiLogoDribbble className='size-6' /> },
      ],
    },
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Relume placeholder image 5',
      },
      name: 'Full name',
      jobTitle: 'Job title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      socialLinks: [
        { href: '#', icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: '#', icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: '#', icon: <BiLogoDribbble className='size-6' /> },
      ],
    },
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Relume placeholder image 6',
      },
      name: 'Full name',
      jobTitle: 'Job title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      socialLinks: [
        { href: '#', icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: '#', icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: '#', icon: <BiLogoDribbble className='size-6' /> },
      ],
    },
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Relume placeholder image 7',
      },
      name: 'Full name',
      jobTitle: 'Job title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      socialLinks: [
        { href: '#', icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: '#', icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: '#', icon: <BiLogoDribbble className='size-6' /> },
      ],
    },
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Relume placeholder image 8',
      },
      name: 'Full name',
      jobTitle: 'Job title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      socialLinks: [
        { href: '#', icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: '#', icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: '#', icon: <BiLogoDribbble className='size-6' /> },
      ],
    },
  ],
  footerContent: {
    heading: "We're hiring!",
    description:
      'Our team is growing fast and we’re always looking for smart people.',
    button: { title: 'Open positions', variant: 'secondary' },
  },
};
