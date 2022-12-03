"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className="mx-auto flex justify-between">
      <h2 className="font-extrabold text-[24px] leading-[25.24px] text-white">
        N3WS
      </h2>
      <h3 className="font-extrabold text-[24px] leading-[25.24px] text-white">
         
      </h3>
      <a href='/news'>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
           Explore
          </span>
        </button>
        </a>
      <ConnectButton />
    </div>
  </motion.nav>
);

export default Navbar;
