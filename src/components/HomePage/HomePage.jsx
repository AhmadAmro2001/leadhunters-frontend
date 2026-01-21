import React, { useEffect, useState } from "react";
import HomeFirstSection from "../HomeFirstSection/HomeFirstSection";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
export default function HomePage() {
  const [data, setData] = useState();
  useEffect(() => {}, []);
  return (
    <>
      <HomeFirstSection />
      <div id="aboutus" className="scroll-mt-20">
        <AboutUsPage />
      </div>
    </>
  );
}

{
  /*  */
}
