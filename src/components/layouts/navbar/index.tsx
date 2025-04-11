/** @format */

'use client';

import { useState } from 'react';
import { useMediaQuery } from '@relume_io/relume-ui';
import type { ButtonProps } from '@relume_io/relume-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { RxChevronDown } from 'react-icons/rx';
import image from '../../../constants/images/image';
import { defaultTheme } from '../../../constants/theme/theme';
import PrimaryButton from '../../inputs/PrimaryButton';
import { FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar2Props = React.ComponentPropsWithoutRef<'section'> &
  Partial<Props>;

export const Navbar2 = (props: Navbar2Props) => {
  const { logo, navLinks, buttons } = {
    ...Navbar2Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  const isMobile = useMediaQuery('(max-width: 991px)');
  console.log(currentPath, '=======>pathname');
  console.log(Navbar2Defaults.navLinks[0].url, '=======>url');

  return (
    <div className='w-full flex justify-center  '>
      <section
        id='relume'
        style={{
          borderRadius: isMobile ? '' : '5px 32px',
          backgroundColor: '#FFFFFFCC)',
          boxShadow: '0px 7px 7px 0px #00000030',
          backdropFilter: 'blur(100px)',
        }}
        className='flex w-full lg:w-[95%] fixed top-0 lg:top-[13.08px]  lg:max-w-[1440px] z-50 h-[72px] items-center border-b  bg-background-primary lg:min-h-18 lg:px-3'
      >
        <div className='mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4'>
          <div className='flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0'>
            <a href={logo.url}>
              <img src={logo.src} alt={logo.alt} />
            </a>
            <div className='flex items-center gap-4 lg:hidden'>
              <button
                className='-mr-2 flex size-12 flex-col items-center justify-center'
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <motion.span
                  className='my-[3px] h-0.5 w-6 bg-black'
                  animate={
                    isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'
                  }
                  variants={topLineVariants}
                />
                <motion.span
                  className='my-[3px] h-0.5 w-6 bg-black'
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  variants={middleLineVariants}
                />
                <motion.span
                  className='my-[3px] h-0.5 w-6 bg-black'
                  animate={
                    isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'
                  }
                  variants={bottomLineVariants}
                />
              </button>
            </div>
          </div>
          <motion.div
            variants={{
              open: {
                height: 'var(--height-open, 100dvh)',
              },
              close: {
                height: 'var(--height-closed, 0)',
              },
            }}
            animate={isMobileMenuOpen ? 'open' : 'close'}
            initial='close'
            exit='close'
            transition={{ duration: 0.4 }}
            className='overflow-hidden px-[5%] bg-white lg:bg-transparent text-left lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]'
          >
            {navLinks.map((navLink, index) =>
              navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu key={index} navLink={navLink} isMobile={isMobile} />
              ) : (
                <Link
                  key={index}
                  to={navLink.url}
                  style={{
                    fontFamily: defaultTheme.fonts.poppins.join(','),
                    fontWeight: currentPath === navLink.url ? 500 : 400,
                    color: defaultTheme.colors.primary,
                    borderBottom:
                      currentPath === navLink.url ? '3px solid ' : '',
                    borderColor:
                      currentPath === navLink.url
                        ? defaultTheme.colors.primary
                        : '',
                  }}
                  className='block py-3 text-[1rem] first:pt-7 lg:px-4 lg:py-2  first:lg:pt-2'
                >
                  {navLink.title}
                </Link>
              )
            )}
            <a
              href={'#'}
              style={{ color: defaultTheme.colors.primary }}
              className='flex items-center py-3 lg:hidden text-[1rem]  first:pt-7 lg:px-4 lg:py-2  first:lg:pt-2'
            >
              <FaPhone size={19.93} className='me-2' />
              Free Consultation
            </a>
          </motion.div>
          <div className='hidden justify-self-end lg:block'>
            {buttons.map((button, index) => (
              <PrimaryButton startIcon={<FaPhone size={19.93} />} key={index}>
                {button.title}
              </PrimaryButton>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
}: {
  navLink: NavLink;
  isMobile: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className='flex w-full items-center justify-center gap-4 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base'
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <motion.span
          animate={isDropdownOpen ? 'rotated' : 'initial'}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            animate={isDropdownOpen ? 'open' : 'close'}
            initial='close'
            exit='close'
            variants={{
              open: {
                visibility: 'visible',
                opacity: 'var(--opacity-open, 100%)',
                y: 0,
              },
              close: {
                visibility: 'hidden',
                opacity: 'var(--opacity-close, 0)',
                y: 'var(--y-close, 0%)',
              },
            }}
            transition={{ duration: 0.2 }}
            className='bg-background-primary lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]'
          >
            {navLink.subMenuLinks?.map((subMenuLink, index) => (
              <a
                key={index}
                href={subMenuLink.url}
                className='block py-3 text-center lg:px-4 lg:py-2 lg:text-left'
              >
                {subMenuLink.title}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </section>
  );
};

export const Navbar2Defaults: Props = {
  logo: {
    url: '/',
    src: image.NavLogo,
    alt: 'Logo image',
  },
  navLinks: [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services' },
    { title: 'Contact', url: '/contact' },
  ],
  buttons: [
    {
      title: 'Free Consultation',
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: '1.5rem',
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
