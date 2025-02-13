import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

function Expertise() {
  return (
    <div id="services" className="expertise-section">
      <div className="expertise-div container">
        <h2>AquaFox’s Expertise</h2>
        <div className="expertise-items">
          <div className="ept-info">
            <div className="ept-icon">
              <Image
                src="/images/icons/service-icon.png"
                alt="Vercel Logo"
                width={28}
                height={28}
                priority
              />
            </div>
            <div className="ept-title">Premier Token Listing Services</div>
            <div className="ept-text">
              Boost the visibility of your newly launched tokens by propelling
              them into the top 10 on leading decentralized exchange (DEX)
              platforms.
            </div>
          </div>
          <div className="ept-img">
            <Image
              src="/images/expertise/expertise1.png"
              alt="Vercel Logo"
              className="expertise-img"
              width={395}
              height={344}
              priority
            />
          </div>
        </div>
        <div className="expertise-items expertise-flex-order">
          <div className="ept-info">
            <div className="ept-icon">
              <Image
                src="/images/icons/chart-icon.png"
                alt="Vercel Logo"
                width={28}
                height={28}
                priority
              />
            </div>
            <div className="ept-title">Tier 1 Blockchain Outsourcing</div>
            <div className="ept-text">
              Address your business needs with top-tier expertise from
              professionals at billion-dollar enterprises.
            </div>
          </div>
          <div className="ept-img">
            <Image
              src="/images/expertise/expertise2.png"
              alt="Liquidity-ptovision"
              className="expertise-img"
              width={380}
              height={351}
              priority
            />
          </div>
        </div>
        <div className="expertise-items">
          <div className="ept-info">
            <div className="ept-icon">
              <Image
                src="/images/icons/flatform-icon.png"
                alt="Liquidity-ptovision"
                width={28}
                height={28}
                priority
              />
            </div>
            <div className="ept-title">
              Powerful & Seamless DEX Investing Tools
            </div>
            <div className="ept-text">
              Simplify your DEX investments, making them as straightforward as traditional stock market ventures.
            </div>
          </div>
          <div className="ept-img">
            <Image
              src="/images/landingpage/high-frequency-trading.png"
              alt="high-frequency-trading"
              className="expertise-img"
              width={236}
              height={218}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
