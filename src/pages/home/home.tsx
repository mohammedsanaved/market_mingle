/** @format */

import { Navbar2 } from "../../components/layouts/navbar";
import { Header141 } from "../../components/layouts/HomeHeader";
import { Stats } from "../../components/layouts/Stats";
import { Testimonial } from "../../components/layouts/Testimonials";
import { Footer } from "../../components/layouts/Footer";
import { dataStats, HeaderData } from "../../constants/data/home/data";
import { FeaturedCards } from "../../components/layouts/FeatureCards";
import FooterCard from "../../components/layouts/FooterCard";
import { Layout251 } from "../../components/layouts/HomeLayout251";
import Testimonials5 from "../../components/layouts/Testimonials5";

function Home() {
  return (
    <div className=' w-full justify-center'>
      <Navbar2 />
      <Header141 data={HeaderData} />
      <Stats data={dataStats} />
      {/* <ProvenSolutions /> */}
      <Layout251 />
      <FeaturedCards />
      <Testimonial />
      <Testimonials5 />
      <FooterCard />
      <Footer />
    </div>
  );
}

export default Home;
