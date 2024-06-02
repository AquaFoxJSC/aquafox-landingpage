import Image from "next/image";
import Hero from "../components/landingpage/hero";
import Expertise from "../components/landingpage/expertise";
import Contact from "../components/landingpage/contact";

export default function Home() {
  return (
    <div className="landing-page">
      <Hero/>
      <Expertise/>
      <Contact/>
    </div>
  );
}
