import React, { useState } from "react";
import Header from "./Header";
import Taare from "../../public/imgs/taare.png";
import NavigationMenu from "./NavigationMenu";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const DefaultLayout = ({ children }) => {
  const router = useRouter();

  React.useEffect(() => {
    window.onscroll = () => {
      console.log("hello world");
    };
  }, []);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // boxShadow: 'inset 0 0 0 1000px rgba(25, 50, 71,0.5)'
  return (
    <>
      <NavigationMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div
        className={`min-h-screen bg-black text-white relative default-layout ${
          router.pathname !== "/" && "BlueBg"
        }`}
        style={{
          //   backgroundImage: `url(${Taare.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            // background: "red",
            position: "absolute",
            width: "150%",
            height: "150%",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${Taare.src})`,
            }}
            id="customAnimatedBackground"
            // animate={{
            //   y: [10, -10, 10],
            // }}
            // transition={{ ease: "easeInOut", duration: 2, repeat: 20 }}
          >
            {/* <img src={} style={{ width: "100%", height: "100%" }} /> */}
          </div>
        </div>
        {/* <ParticleArea /> */}
        <Header setIsNavOpen={setIsNavOpen} />
        {children}
      </div>
    </>
  );
};

export default DefaultLayout;
