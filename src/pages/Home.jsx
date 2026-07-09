import TopBar from "../components/TopBar";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuickSearch from "../components/QuickSearch";
import InfoSection from "../components/InfoSection";
import ServicesGrid from "../components/ServicesGrid";
import SmartServices from "../components/SmartServices";
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      <QuickSearch />
      <InfoSection />
      <ServicesGrid />
      <SmartServices />
      <FeatureCards />
      <Footer />
    </>
  );
}