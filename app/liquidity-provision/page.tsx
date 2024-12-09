import MarketMakersSection from "../../components/liquidity-provision/MarketMakersSection";
import WhyWorkWithAquaFox from "../../components/liquidity-provision/WhyWorkWithAquaFox";
import ContactSection from "../../components/liquidity-provision/ContactSection";
import Chart from "../../components/liquidity-provision/Chart";
import StatsSection from "../../components/landingpage/StatsSection";

export default function LiquidityProvision() {
  return (
    <div>
      <Chart />
      <MarketMakersSection />
      <WhyWorkWithAquaFox />
      <StatsSection/>

      <ContactSection />
    </div>

  );
}
