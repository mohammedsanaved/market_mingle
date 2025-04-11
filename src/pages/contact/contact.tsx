/** @format */

import { Navbar2 } from "../../components/layouts/navbar";
import { Contact7 } from "../../components/layouts/ContactForm";
import { Logo2 } from "../../components/layouts/ContactLogo2";
import { Contact22 } from "../../components/layouts/Contact22";
import { Footer } from "../../components/layouts/Footer";
import { ContactData } from "../../constants/data/contact/data";

const contact = () => {
  return (
    <div>
      <Navbar2 />
      <Contact7 data={ContactData} />
      <Logo2 />
      <Contact22 />
      <Footer />
    </div>
  );
};

export default contact;
