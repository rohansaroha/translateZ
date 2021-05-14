import React, { useEffect, useState } from "react";
import Layout from "../components/base/Layout";
import LHeader from "../components/landing/LHeader";
import LAccordion from "../components/landing/LAccordion";
import LFooter from "../components/landing/LFooter";
import LFooterM from "../components/landing/LFooter.mobile";

const Landing = () => {
  const [width,setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <Layout>
      <LHeader/>
      <LAccordion/>
      {width > 800 ? (<LFooter/>) : (<LFooterM/>)}

    </Layout>
  );
};

export default Landing;
