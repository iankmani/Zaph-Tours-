import HeroSection from "./HeroSection";
import About from "./About";
import FeaturedDestinations from "./FeaturedDestinations";
import Testimonials from "./Testimonials";
import SignUp from "./SignUp";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <About />
      <FeaturedDestinations />

      <section className="test">
        <Testimonials />
        <SignUp />
      </section>
    </div>
  );
};
export default Home;
