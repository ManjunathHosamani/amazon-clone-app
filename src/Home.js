import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/GW/NEW/HERO/AugART21_PC_hero_1x_2days-to-go_FDFO._CB645199309_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="01"
          title="Apple iphone 12 64GB"
          price={78999}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/iQoo/iQOO_Z3/Aug/QC/D26590554_IN_WLD_August_Desktop_MSO_Mobile_CC_DesktopGateway_QuadCard_372X232_4_1x._SY116_CB645449629_.jpg"
          rating={5}
        />

        <Product
          id="02"
          title="Apple iphone 12 64GB"
          price={78999}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/iQoo/iQOO_Z3/Aug/QC/D26590554_IN_WLD_August_Desktop_MSO_Mobile_CC_DesktopGateway_QuadCard_372X232_4_1x._SY116_CB645449629_.jpg"
          rating={2}
        />
      </div>
      <div className="home__row">
        <Product
          id="03"
          title="Apple iphone 12 64GB"
          price={78999}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/iQoo/iQOO_Z3/Aug/QC/D26590554_IN_WLD_August_Desktop_MSO_Mobile_CC_DesktopGateway_QuadCard_372X232_4_1x._SY116_CB645449629_.jpg"
          rating={2}
        />
        <Product
          id="04"
          title="Apple iphone 12 64GB"
          price={78999}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/iQoo/iQOO_Z3/Aug/QC/D26590554_IN_WLD_August_Desktop_MSO_Mobile_CC_DesktopGateway_QuadCard_372X232_4_1x._SY116_CB645449629_.jpg"
          rating={5}
        />
        <Product
          id="05"
          title="Apple iphone 12 64GB"
          price={78999}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/iQoo/iQOO_Z3/Aug/QC/D26590554_IN_WLD_August_Desktop_MSO_Mobile_CC_DesktopGateway_QuadCard_372X232_4_1x._SY116_CB645449629_.jpg"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id="06"
          title="Apple iphone 12 64GB"
          price={78999}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/iQoo/iQOO_Z3/Aug/QC/D26590554_IN_WLD_August_Desktop_MSO_Mobile_CC_DesktopGateway_QuadCard_372X232_4_1x._SY116_CB645449629_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
