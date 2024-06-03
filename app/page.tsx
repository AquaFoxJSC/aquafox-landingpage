import Hero from "../components/landingpage/hero";
import Expertise from "../components/landingpage/expertise";
import OurWorks from "../components/landingpage/OurWorks";
import OurClients from "../components/landingpage/OurClients";
import Contact from "../components/landingpage/contact";

export default function Home() {
  return (
    <div className="landing-page">
      <Hero/>
      <Expertise/>
      <OurWorks />
      <OurClients />
      <Contact/>
    </div>
  );
}
