import UserContextProvider from '../contexts/UserContext';
import { Banner } from '../templates/Banner';
import { Base } from '../templates/Base';
import { Hero } from '../templates/Hero';
import { VerticalFeatures } from '../templates/VerticalFeatures';

const Index = () => {
  return (
    <UserContextProvider>
      <Base>
        <Hero />
        <VerticalFeatures />
        <Banner />
      </Base>
    </UserContextProvider>
  );
};

export default Index;
