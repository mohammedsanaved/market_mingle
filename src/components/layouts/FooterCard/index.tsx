/** @format */

import { defaultTheme } from "../../../constants/theme/theme";
import PrimaryButton from "../../inputs/PrimaryButton";
import { FiArrowUpRight } from "react-icons/fi";
import image from "../../../constants/images/image";

function FooterCard() {
  return (
    <div
      style={{ backgroundImage: `url(${image.HomeHeaderBg})` }}
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container flex lg:flex-row flex-col gap-12  items-center'>
        <div
          style={{ fontFamily: defaultTheme.fonts.poppins.join(",") }}
          className='mx-auto w-full '
        >
          <h1
            style={{ color: defaultTheme.colors.secondary }}
            className='mb-5 text-6xl font-medium md:mb-6 md:text-9xl'
          >
            Ready to{" "}
            <span
              className='text-[3.5rem] md:text-[4rem] lg:text-[4.8rem]'
              style={{
                color: defaultTheme.colors.tertiary,
                fontFamily: defaultTheme.fonts.niconne.join(","),
              }}
            >
              Supercharge{" "}
            </span>
            Your Business?
          </h1>
          <p
            style={{ color: defaultTheme.colors.Paragraphtext }}
            className='md:text-md'
          >
            Partner with MarketMingle and unlock the full potential of your B2B
            marketing efforts.
          </p>
          <div className='mt-6 flex items-center justify-start gap-4 md:mt-8'>
            <PrimaryButton
              sx={{
                color: defaultTheme.colors.primary,
                background: defaultTheme.colors.tertiary,
                fontWeight: 500,
              }}
              endIcon={<FiArrowUpRight />}
            >
              Free Consultation
            </PrimaryButton>
            {/* <SecondaryButton sx={{ fontWeight: 500 }}>
              Explore Services
            </SecondaryButton> */}
          </div>
        </div>{" "}
        <img
          src='https://images.pexels.com/photos/16771153/pexels-photo-16771153/free-photo-of-woman-working-on-laptop-in-an-office.jpeg'
          className='w-[580px] h-[360px] xl:w-[680px] xl:h-[400px] bg-cover object-contain bg-no-repeat rounded-tl-[5px] rounded-tr-[50px] rounded-br-[5px] rounded-bl-[50px] '
          alt=''
        />
      </div>
    </div>
  );
}

export default FooterCard;
