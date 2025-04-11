/** @format */

import image from "../../../constants/images/image";
import { defaultTheme } from "../../../constants/theme/theme";
// import image from "../../../constants/images/image"

type LinkProps = {
  label: string;
  url: string;
};

type Contact = {
  icon: string;
  title: string;
  description: string;
  link: LinkProps;
};

type Props = {
  contacts: Contact[];
};

export type Contact22Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Contact22 = (props: Contact22Props) => {
  const { contacts } = {
    ...Contact22Defaults,
    ...props,
  };
  return (
    <section
      id='relume'
      style={{ backgroundImage: `url(${image.HomeHeaderBg})` }}
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='grid auto-cols-fr gap-x-8 gap-y-12 sm:gap-x-10 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4'>
          {contacts.map((contact, index) => (
            <div
              key={index}
              style={{ fontFamily: defaultTheme.fonts.poppins.join(",") }}
            >
              <img className='mb-5 sm:mb-6' src={contact.icon} />
              <h3
                style={{ color: defaultTheme.colors.secondary }}
                className='mb-3 text-2xl font-medium leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl'
              >
                {contact.title}
              </h3>
              <p
                style={{ color: defaultTheme.colors.Paragraphtext }}
                className='mb-5 md:mb-6'
              >
                {contact.description}
              </p>
              <a className='underline text-white' href={contact.link.url}>
                {contact.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact22Defaults: Props = {
  contacts: [
    {
      // icon: <BiEnvelope className='size-12' />,
      icon: `${image.sms}`,
      title: "Email",
      description:
        "Connect with us via email for inquiries and collaborations.",
      link: {
        label: "hello@relume.io",
        url: "#",
      },
    },
    {
      icon: `${image.phone}`,
      title: "Phone",
      description: "Call us to discuss your business needs and requirements.",
      link: {
        label: "+91 999-999-9999",
        url: "#",
      },
    },
    {
      icon: `${image.location}`,
      title: "Office",
      description:
        "Visit our office to meet our team, located at the following address.",
      link: {
        label: "123 Sample St, Sydney NSW 2000 AU",
        url: "#",
      },
    },
    {
      icon: `${image.clock}`,
      title: "Business Hours",
      description:
        "We are available to assist you, visit us between these hours.",
      link: {
        label: "Monday-Friday, 9:00 AM - 5:00 PM",
        url: "#",
      },
    },
  ],
};
