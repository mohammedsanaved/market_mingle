import { Navbar2 } from '../../components/layouts/navbar';
import { Header81 } from '../../components/layouts/ServiceHeader81';
import FooterCard from '../../components/layouts/FooterCard';
import { Layout237 } from '../../components/layouts/ServicesLayout237';
import { Layout18Dynamic } from '../../components/layouts/ServicesLayout18left';
import { cards } from '../../constants/data/services/data';
import { Footer } from '../../components/layouts/Footer';

const services = () => {
  return (
    <div>
      <Navbar2 />
      <Header81 />
      <Layout237 />
      <Layout18Dynamic cards={cards} />
      <FooterCard />
      <Footer />
    </div>
  );
};

export default services;
