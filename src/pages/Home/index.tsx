import IntroductionSection from '../../components/IntroductionSection';
import ServicesSection from '../../components/ServicesSection';
import RecipesSection from '../../components/RecipesSection';
import BlogSection from '../../components/BlogSection';
import JoinSection from '../../components/JoinSection';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <RecipesSection />
      <ServicesSection />
      <BlogSection />
      <JoinSection />
      <Footer />
    </>
  );
}
