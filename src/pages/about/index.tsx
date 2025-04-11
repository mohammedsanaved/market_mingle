/** @format */

import { Navbar2 } from "../../components/layouts/navbar";
import { Header65 } from "../../components/layouts/AboutHeader65";
import { Layout1 } from "../../components/layouts/AboutLayout1";
import { Team4 } from "../../components/layouts/AboutTeam4";
import { Testimonial } from "../../components/layouts/Testimonials";
import { Contact22 } from "../../components/layouts/Contact22";
import { Footer } from "../../components/layouts/Footer";
import { aboutData, aboutUsData } from "../../constants/data/about/data";

const index = () => {
  return (
    <div>
      <Navbar2 />
      <Header65 data={aboutData} />
      <Layout1 data={aboutUsData} />
      <Team4 />
      <Testimonial />
      <Contact22 />
      <Footer />
    </div>
  );
};

export default index;
